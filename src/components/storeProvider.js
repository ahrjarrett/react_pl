import React, { Component } from 'react'
import PropTypes from 'prop-types'

const storeProvider = (mapStateToProps) => (WrappedComponent) => {
  return class extends Component {

    static displayName = `${WrappedComponent.name}Container`

    // we use the displayName property (built-in) to give the
    // provider a declarative, rather than ambiguous name
    static contextTypes = {
      store: PropTypes.object,
    }

    render() {
      return <WrappedComponent
        {...this.props}
        {...mapStateToProps(this.context.store, this.props)}
        store={this.context.store}
      />
    }
  }
}

export default storeProvider
