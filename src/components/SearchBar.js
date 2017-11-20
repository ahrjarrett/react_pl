import React, { Component } from 'react'
import { debounce } from 'lodash'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { query: '' }
  }

  performSearch = debounce(() => {
    this.props.performSearch(this.state.query)
  }, 300)

  handleSearch = (evt) => {
    // 2nd arg to setState is a callback to call after setting state:
    this.setState({ query: evt.target.value }, () => {
      this.performSearch()

    })
  }

  render() {
    return (
      <input
        type="search"
        placeholder="Enter search term..."
        value={this.state.query}
        onChange={this.handleSearch}
      />
    )
  }
}

export default SearchBar
