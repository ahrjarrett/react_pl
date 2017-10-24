import React, { Component } from 'react'
import DataApi from '../DataApi'
import { data } from '../testData'

import ArticleList from './ArticleList'

const store = new DataApi(data)

class App extends Component {
  constructor() {
    super()
    this.state = {
      articles: store.getArticles(),
      authors: store.getAuthors()
    }
  }

  articleActions = {
    lookUpAuthor: authorId => this.state.authors[authorId]
  }

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    )
  }
}

export default App
