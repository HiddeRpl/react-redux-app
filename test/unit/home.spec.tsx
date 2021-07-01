import * as React from 'react'
import HomeView from '@modules/home/home'
import { createRenderAndStore } from '@fakes/testing-library-fake-store'

describe('HomeView', () => {
  let vm

  beforeEach(() => {
    const [render] = createRenderAndStore()
    const { container } = render(<HomeView />)
    vm = container
  })

  it('should render', () => {
    expect(vm.querySelector('.home')).not.toBeNull()
  })
})
