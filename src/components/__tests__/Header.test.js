import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../appStore";

describe("test cases for Header Component", ()=>{
    it("should have a cart", ()=> {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        )
        const cart= screen.getByText(/Cart/);

        expect(cart).toBeInTheDocument();
    })

    it("should have a login button", ()=> {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        )
        const loginBtn= screen.getByRole("button");

        expect(loginBtn).toBeInTheDocument();
    })

    it("should have Logout on clicking login button", ()=> {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        )
        const loginBtn= screen.getByRole("button", {name:"Login"});
        fireEvent.click(loginBtn);

        const logoutBtn = screen.getByRole("button", {name:"Logout"});

        expect(logoutBtn).toBeInTheDocument();
    })
})