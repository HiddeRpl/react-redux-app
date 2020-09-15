import * as React from 'react'
import * as ReactDOM from 'react-dom'
import AppView from '@app'

describe('AppView', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AppView />, div)
  })
})
