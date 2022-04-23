import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import AppView from '@app'

describe('AppView', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.createRoot(div).render(<AppView />)
  })
})
