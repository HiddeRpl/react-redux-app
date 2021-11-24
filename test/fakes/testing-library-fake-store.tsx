import * as React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from '@store/reducers/root-reducers'
import thunk from 'redux-thunk'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { render, RenderResult } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { FormProvider, useForm, UseFormReturn } from 'react-hook-form'

export const createRenderAndStore = ({ path = '', route = '/', defaultFormValues = {} } = {}): [
  any,
  any,
  UseFormReturn,
] => {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  const { result } = renderHook(() => useForm({ defaultValues: defaultFormValues }))
  const methods = result.current

  const AppProviders = ({ children }) => {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>
          <Routes>
            <Route path={path} element={<FormProvider {...methods}>{children}</FormProvider>} />
          </Routes>
        </MemoryRouter>
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
