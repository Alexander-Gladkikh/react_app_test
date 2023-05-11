import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {render} from "react-dom";
import App from "./App";


describe('Roter Test App', () => {
    test('main an about links', () => {
        render(<App />)
        const mainLink = screen.getByTestId('main-link')
        const aboutLink = screen.getByTestId('about-link')
        userEvent.click(aboutLink)
        expect(screen.getByTestId('about-link')).toBeInTheDocument()
        userEvent.click(mainLink)
        expect(screen.getByTestId('main-link')).toBeInTheDocument()
    })
})