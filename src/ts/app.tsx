import 'core-js/stable'

import 'react-status-alert/dist/status-alert.css'

import '@assets/styles/app.scss'

import PrivateRoute from '@components/private-route'
import { NavigationPath } from '@models/routes'
import UnauthorizedView from '@components/unauthorized'
import store from '@store/index'
import * as React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom'
import StatusAlert from 'react-status-alert'
import StartupView from './startup'
import HomeView from '@modules/home/home'

class App extends React.Component<RouteComponentProps<any>, {}> {
  private readonly routeListen

  constructor(props) {
    super(props)

    this.routeListen = this.props.history.listen(() => {
      this.handleRouteChange()
    })
  }

  public componentWillUnmount(): void {
    if (this.routeListen) {
      this.routeListen()
    }
  }

  public render() {
    return this.props.children
  }

  public handleRouteChange = (): void => {
    window.scrollTo(0, 0)
  }
}

const AppContainer = withRouter(App)

export default class AppView extends React.Component<{}, {}> {
  public render() {
    return (
      <Provider store={store}>
        <StartupView>
          <HashRouter basename="/">
            <AppContainer>
              <StatusAlert />
              <Switch>
                <PrivateRoute exact={true} path={NavigationPath.Home} component={HomeView} />
                <Route path={NavigationPath.Unauthorized} component={UnauthorizedView} />
                <Redirect from="*" to={NavigationPath.Home} />
              </Switch>
            </AppContainer>
          </HashRouter>
        </StartupView>
      </Provider>
    )
  }
}
