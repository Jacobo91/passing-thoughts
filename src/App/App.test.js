import "@testing-library/jest-dom";
import { getByTestId, render, screen, act } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";


test('renders the App', () => {
  render(<App />);
  const header = screen.getByTestId("app title");
  expect(header).toHaveTextContent("💭 Passing Thoughts");
});

test("'burgers are great' should appear", () => { 
  render(<App/>);
  const emptyThought = screen.queryByText('burgers are great');
  expect(emptyThought).toBeNull;
})

test("should show new thought to be present", async() => { 
  render(<App/>);

  const input = screen.getByTestId("text input");
  const addButton = screen.getByTestId("add button");

  act(() => { 
    userEvent.type(input, "burgers are great");
    userEvent.click(addButton);
  })

  const thought = await screen.findByText("burgers are great");
  expect(thought).toBeInTheDocument();

})