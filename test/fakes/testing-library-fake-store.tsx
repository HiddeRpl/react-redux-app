import * as React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, Store } from 'redux'
import rootReducer from '@store/reducers/root-reducers'
import thunk from 'redux-thunk'
import { Route, Router } from 'react-router-dom'
import { render, RenderResult } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { renderHook } from '@testing-library/react-hooks'
import { useForm, UseFormReturn } from 'react-hook-form'

export const createRenderAndStore = ({
  path = '',
  route = '/',
  history = createMemoryHistory({ initialEntries: [route] }),
  defaultFormValues = {},
} = {}): [(ui, options?) => RenderResult, Store, UseFormReturn] => {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  const { result } = renderHook(() => useForm({ defaultValues: defaultFormValues }))
  const methods = result.current

  const AppProviders = ({ children }) => {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path={path}>{children}</Route>
        </Router>
      </Provider>
    )
  }
  const customRender = (ui, options?): RenderResult => {
    return render(ui, { wrapper: AppProviders, ...(options || {}) })
  }

  return [customRender, store, methods]
}

// re-export everything
export * from '@testing-library/react'
