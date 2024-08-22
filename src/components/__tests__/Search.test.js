import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import { act, fireEvent } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import MOCKDATA from "../mocks/RestaurantListMockData.json"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCKDATA)
        }
    })
});
describe("Integration testing for Body Component", ()=>{
    it("should test search functionality", async()=>{
        await act(()=> render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>))
            const beforeSearchCards = screen.getAllByTestId("resCard");

            expect(beforeSearchCards.length).toBe(8);
            //console.log(defaultCards.length);
            const searchBtn = screen.getByRole("button", {name: "search"});
            const searchInput = screen.getByTestId("searchInput")
            fireEvent.change(searchInput, {target:{value:"pizza"}});
            fireEvent.click(searchBtn);
            const afterSearchCards = screen.getAllByTestId("resCard");
            //console.log("Search res:" + resCards.length);
            expect(afterSearchCards.length).toBe(1);       
    })

    it("should test TopRated Restaurants click functionality", async() => {
        await act(()=> render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>   
        ))
        const topRestaurantBtn = screen.getByRole("button", {name:"Top Restaurants"});
        const BeforeFilter = screen.getAllByTestId("resCard");
        
        expect(BeforeFilter.length).toBe(8);

        fireEvent.click(topRestaurantBtn);

        const afterFilter = screen.getAllByTestId("resCard");

        expect(afterFilter.length).toBe(2);
    })
})