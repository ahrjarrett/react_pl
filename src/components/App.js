import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { pickBy } from 'lodash'

import ArticleList from './ArticleList'
import SearchBar from './SearchBar'

class App extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  state = this.props.store.getState()

  setSearchQuery = query => {
    this.setState({ query })
  }

  render() {
    let { articles, query } = this.state
    if (query) {
      // this re-assignment seems mutative, not sure this is smart
      articles = pickBy(articles, (value) => {
        return value.title.match(query) || value.body.match(query)
      })
    }
    return (
      <div>
        <SearchBar performSearch={this.setSearchQuery} />
        <ArticleList
          articles={articles}
          store={this.props.store}
        />
      </div>
    )
  }
}

export default App
