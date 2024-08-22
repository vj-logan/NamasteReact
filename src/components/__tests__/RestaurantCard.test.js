import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/RestaurantCardMock.json"
import "@testing-library/jest-dom"

describe("test cases for RestaurantCard component", ()=> {
    it("Should render data in RestaurantCard comp", ()=> {
        render(<RestaurantCard restaurantData={MOCK_DATA}/>)
        const restaurantName= screen.getByText("Chinese Wok")
        expect(restaurantName).toBeInTheDocument();
    })
})