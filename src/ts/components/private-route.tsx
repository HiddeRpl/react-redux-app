import { NavigationPath } from '@models/routes'
import * as React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom'

interface ReduxProps {
  isAuth: boolean
}

interface ComponentProps {
  component: React.ComponentType<RouteComponentProps<{}>> | React.ComponentType<unknown>
}

export type Props = ComponentProps & RouteProps & ReduxProps

export class PrivateRouteComponent extends React.Component<Props, {}> {
  public render(): React.ReactNode {
    const { component: Component, ...rest } = this.props
    return (
      <Route
        {...rest}
        // eslint-disable-next-line react/jsx-no-bind
        render={props => (this.props.isAuth ? <Component {...props} /> : <Redirect to={NavigationPath.Unauthorized} />)}
      />
    )
  }
}

const mapStateToProps = (): ReduxProps => ({
  isAuth: true,
})

const PrivateRoute = connect(mapStateToProps)(PrivateRouteComponent)

export default PrivateRoute
