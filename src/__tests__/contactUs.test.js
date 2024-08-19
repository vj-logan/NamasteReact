import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import ContactUs from "../components/ContactUs";

test("ContactUs rendered", ()=> {
    render(<ContactUs/>)
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();

}) 

test("ContactUs element has a place holder", ()=> {
    render(<ContactUs/>)
    const placeHolder = screen.getByPlaceholderText("name");

    //Assertion
    expect(placeHolder).toBeInTheDocument();
}) 

test("ContactUs has 2 inputs", ()=> {
    render(<ContactUs/>)
    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes.length).toBe(2);
    console.log(inputBoxes);

}) 