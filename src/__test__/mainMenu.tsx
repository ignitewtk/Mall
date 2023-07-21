import React from 'react'

import {render, screen} from "@testing-library/react"

import MainMenu from "../components/MainMenu";


test('Test main menu component', () => {
    const message = 'mock message'
    render(<MainMenu message={message} />)
    expect(screen.getByText(message)).toBeInTheDocument();
    expect(screen.getByText(message)).toHaveStyle('color: #257AFD')
    expect(screen.getByText(message)).not.toHaveStyle('color: #253AFD')
})

