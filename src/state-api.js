class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      query: ''
    }
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr
      return acc
    }, {})
  }

  lookUpAuthor = authorId => this.data.authors[authorId]

  getState = () => this.data

}

export default StateApi
