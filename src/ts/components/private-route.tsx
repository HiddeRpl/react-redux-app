import { NavigationPath } from '@models/routes'
import { RootState } from '@store/reducers/root-reducers'
import * as React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom'

interface ReduxProps {
  isAuth: boolean
}

interface ComponentProps {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
}

export type Props = ComponentProps & RouteProps & ReduxProps

export class PrivateRouteComponent extends React.Component<Props, {}> {
  public render() {
    const { component: Component, ...rest } = this.props
    return (
      <Route
        {...rest}
        render={
          // tslint:disable-next-line jsx-no-lambda
          props => (this.props.isAuth ? <Component {...props} /> : <Redirect to={NavigationPath.Unauthorized} />)
        }
      />
    )
  }
}

const mapStateToProps = (state: RootState): ReduxProps => ({
  isAuth: true,
})

const PrivateRoute = connect(mapStateToProps)(PrivateRouteComponent)

export default PrivateRoute
