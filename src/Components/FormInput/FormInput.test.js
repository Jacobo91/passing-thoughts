import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import FormInput from "./FormInput";

test("FormInput component is being rendered", () => { 
    render(<FormInput/>);
    const textInput = screen.getByTestId("text input");
    const addBtn = screen.getByTestId("add button");

    expect(textInput).toBeInTheDocument();
    expect(addBtn).toBeInTheDocument();
    expect(addBtn).toBeEnabled();
})
