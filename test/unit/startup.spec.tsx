import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import StartupView from '../../src/ts/startup'

describe('StartupView', () => {
  let vm: ShallowWrapper

  beforeEach(() => {
    vm = shallow(
      <StartupView>
        <div>a</div>
      </StartupView>,
    )
  })

  it('should show children', () => {
    expect(vm.html()).toEqual('<div>a</div>')
  })
})
