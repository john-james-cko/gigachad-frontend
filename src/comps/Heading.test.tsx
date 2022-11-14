import { render, screen } from "@testing-library/react"
import Heading from "./Heading"

test("renders test heading", () => {
  render(<Heading content="Test" />)
  const element = screen.getByText(/test/i)
  expect(element).toBeInTheDocument()
})

test("renders nothing", () => {
  render(<Heading content={undefined} />)
  const element = screen.queryByText(/test/i)
  expect(element).not.toBeInTheDocument()
})
