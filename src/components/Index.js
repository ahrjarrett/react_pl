import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    answer: 49
  }

  asyncFunc = () => {
    return Promise.resolve(52)
  }

  async componentDidMount() {
    this.setState({ answer: await this.asyncFunc() })
  }

  render() {
    return (
      <div>
      <h2> class component stuffs {this.state.answer} </h2>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
