import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookCategory from './BookCategory'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
  state = {
    query: '',
    showingBooks: []
  }
  updateQuery = query => {
    this.setState({query: query.trim()})
    let thisQuery = this.state.query
    if (thisQuery) {
      BooksAPI.search(thisQuery, 20).then(books => {
        this.setState({ showingBooks: !books.error ? books : []})
      })
    } else {
      this.setState({ showingBooks: [] })
    }
  }

  clearQuery = () => {
    this.setState({query: ''})
  }
  render() {
    const {onUpdateShelf} = this.props
    const {query, showingBooks} = this.state

    return (
      <div>

        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to='/'>Close</Link>
            <div className="search-books-input-wrapper">
              {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
              <input type='text' placeholder="Search by title or author" value={query} onChange={(event) => this.updateQuery(event.target.value)}/>

            </div>
          </div>
          <div className="search-books-results">
            {query && (
              <BookCategory filteredBooks={showingBooks} category={'none'} onUpdate={onUpdateShelf} />
            )}
          </div>
        </div>

      </div>
    )
  }
}

export default SearchBooks
