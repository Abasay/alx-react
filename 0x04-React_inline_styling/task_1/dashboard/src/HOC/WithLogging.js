import React from 'react'

function WithLogging(WrappedComponent) {
  class WithLogging extends React.Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      console.log(`Component ${WrappedComponent} is mounted`)
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent} is going to unmount`)
    }
  }

  WithLogging.displayName = `WithLogging(${WrappedComponent || 'Component'})`

  return WithLogging
}
