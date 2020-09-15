import * as React from 'react'

interface Props {
  children: React.ReactNode
}

interface State {
  loading: boolean
}

export default class StartupView extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props)

    this.state = {
      loading: true,
    }
  }

  public componentDidMount(): void {
    this.initializeData()
  }

  public render() {
    return this.state.loading ? null : this.props.children
  }

  public initializeData = (): void => {
    this.setState({ loading: false })
  }
}
