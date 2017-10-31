import React from 'react'
import PropTypes from 'prop-types'

const convertToDate = dateString => new Date(dateString).toDateString()

// a functional component can access the context object
// by adding it as the second argument here
const Article = (props, context) => {
  const { article } = props
  console.log(context)
  const author = context.store.lookUpAuthor(article.authorId)

  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>{convertToDate(article.date)}</div>
      <div style={styles.author}>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  )
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })
}

// by defining the contextTypes property on component,
// we're saying that this component has access to the
// context object (obv the store, in this case)
Article.contextTypes = {
  store: PropTypes.object,
}

export default Article


const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  date: {
    fontSize: '0.85em',
    color: '#888',
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    paddingLeft: 20,
  }
}
