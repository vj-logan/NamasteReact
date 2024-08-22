import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import ContactUs from "../ContactUs";

describe("ContactUs page test cases", () => {

    // beforeAll(()=>{
    //     console.log("Before All");
    // })
    // beforeEach(()=>{
    //     console.log("Before Each");
    // })

    // afterAll(()=>{
    //     console.log("After All");
    // })

    // afterEach(()=>{
    //     console.log("After Each");
    // })

    it("Should render", ()=> {
        render(<ContactUs/>)
        const heading = screen.getByRole("heading");
    
        //Assertion
        expect(heading).toBeInTheDocument();
    
    }) 
    
    it(" should have element with a place holder", ()=> {
        render(<ContactUs/>)
        const placeHolder = screen.getByPlaceholderText("name");
    
        //Assertion
        expect(placeHolder).toBeInTheDocument();
    }) 
    
    it("should have 2 inputs", ()=> {
        render(<ContactUs/>)
        const inputBoxes = screen.getAllByRole("textbox");
    
        //Assertion
        expect(inputBoxes.length).toBe(2);
        //console.log(inputBoxes);
    
    }) 
})
