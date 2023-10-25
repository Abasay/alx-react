import { render, screen } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  it('renders without crashing', () => {
    render(<App />)
  })

  it('should render a div with the class "App-header"', () => {
    render(<App />)
    const appHeader = screen.getByRole('heading')
    expect(appHeader).toBeInTheDocument()
  })

  it('should render a div with the class "App-body"', () => {
    render(<App />)
    const appBody = screen.getByTestId('app-body')
    expect(appBody).toBeInTheDocument()
  })

  it('should render a div with the class "App-footer"', () => {
    render(<App />)
    const appFooter = screen.getByTestId('app-footer')
    expect(appFooter).toBeInTheDocument()
  })
})
