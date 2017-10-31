import React from 'react'
import ArticleList from '../ArticleList'
import Article from '../Article'

//import renderer from 'react-test-renderer'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('ArticleList', () => {

  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' },
    },
  }

  Article.proptypes = {}

  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    )

    expect(wrapper.find('Article').length).toBe(2)
    // Same thing as:
    //expect(wrapper.getElement().props.children.length).toBe(2)

    expect(wrapper).toMatchSnapshot()
  })

})
