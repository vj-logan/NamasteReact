import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header"
import MOCK_DATA from "../mocks/RestaurantMenuMockData.json"
import { act, fireEvent } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import Cart from "../Cart";

global.fetch = jest.fn(()=> Promise.resolve({
    json:() => Promise.resolve(MOCK_DATA)
}))

describe("Test add to cart entire work flow", ()=>{
    it("should have cart items on clicking add to cart", async()=> {
        await act(async()=> render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </Provider>
            </BrowserRouter>
        ))
    
        const categories = screen.getAllByTestId("itemCategory");
    
        expect(categories.length).toBe(8)

        fireEvent.click(categories[1]);

        const foodItems = screen.getAllByTestId("foodItem")

        expect(foodItems.length).toBe(6);

        const addToCartBtns = screen.getAllByRole("button", {name: "Add +"});


        //1 item
        fireEvent.click(addToCartBtns[0]);

        const cartItem = screen.getByText("Cart-[1]");

        expect(cartItem).toBeInTheDocument();

        const cartFoodItems = screen.getAllByTestId("foodItem")

        expect(cartFoodItems.length).toBe(7);


        //2 items
        fireEvent.click(addToCartBtns[1]);

        const twoCartItems = screen.getByText("Cart-[2]");

        expect(twoCartItems).toBeInTheDocument();

        const twoCartFoodItems = screen.getAllByTestId("foodItem")

        expect(twoCartFoodItems.length).toBe(8);


        //empty cart
        const clearCartBtn = screen.getByRole("button", {name: "Clear Cart"})

        fireEvent.click(clearCartBtn)

        const emptyCartMessage = screen.getByText("Your Cart is empty, Please add items to your cart");

        expect(emptyCartMessage).toBeInTheDocument()

    })

    
})