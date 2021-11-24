import 'core-js/stable'

import 'react-status-alert/dist/status-alert.css'

import '@assets/styles/app.scss'

import PrivateRoute from '@components/private-route'
import { NavigationPath } from '@models/routes'
import UnauthorizedView from '@components/unauthorized'
import store from '@store/index'
import * as React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import StatusAlert from 'react-status-alert'
import StartupView from './startup'
import HomeView from '@modules/home/home'

const AppContainer = (props: React.PropsWithChildren<any>): JSX.Element => {
  const location = useLocation()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return props.children
}

export default class AppView extends React.Component<{}, {}> {
  public render(): React.ReactNode {
    return (
      <Provider store={store}>
        <StartupView>
          <HashRouter basename="/">
            <AppContainer>
              <StatusAlert />
              <Routes>
                <Route path={NavigationPath.Home} element={<PrivateRoute component={HomeView} />} />
                <Route path={NavigationPath.Unauthorized} element={<UnauthorizedView />} />
                <Route path="*" element={<HomeView />} />
              </Routes>
            </AppContainer>
          </HashRouter>
        </StartupView>
      </Provider>
    )
  }
}
