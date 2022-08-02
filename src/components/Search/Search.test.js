import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import App from "../../App";
test("Emoji list must be rendered while filtering", () => {
  render(<App />);
  const inputText = screen.getByPlaceholderText(/search/i);
  const ulElement = screen.getByRole("list")
  console.log("asdasd",ulElement)
  // const emoji = "smile"
  // userEvent.type(inputText, emoji)
//  console.log(screen)
});