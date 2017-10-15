import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import BookCategory from './BookCategory'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
  static propTypes = {
    onUpdateShelf: PropTypes.func.isRequired
  }
  state = {
    query: '',
    showingBooks: []
  }
  updateQuery = query => {
    this.setState({query: query.trim()})
    let thisQuery = this.state.query
    if (thisQuery) {
      BooksAPI.search(thisQuery, 20).then(result => {
        if (result || !result.error) {
          result.map((book) => {
            let bookInShelf = this.props.books.find(mainBook => mainBook.id === book.id);
            book.shelf = bookInShelf ? bookInShelf.shelf : book.shelf;
            return book;
          });

          this.setState({showingBooks: result})
        } else {
          this.setState({showingBooks: []})
        }
      })
    } else {
      this.setState({showingBooks: []})
    }
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
            {query && (<BookCategory filteredBooks={showingBooks} category={'none'} onUpdate={onUpdateShelf}/>)}
          </div>
        </div>

      </div>
    )
  }
}

export default SearchBooks
