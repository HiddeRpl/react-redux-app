import { NavigationPath } from '@models/routes'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '@store/reducers/root-reducers'

interface ComponentProps {
  component: React.ComponentType<any>
}

const PrivateRoute = (props: ComponentProps): JSX.Element => {
  const isAuth = useSelector((state: RootState) => state.emptyState.isEmpty)

  const Component = props.component

  return isAuth ? <Component {...props} /> : <Navigate to={NavigationPath.Unauthorized} />
}

export default PrivateRoute
