import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getAllByRole('heading', { name: /react avançado/i })
    ).toBeinTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
