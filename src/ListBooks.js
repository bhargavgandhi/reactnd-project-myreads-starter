import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookCategory from './BookCategory'

class ListBooks extends Component {
  render() {
    const {books, onUpdateShelf} = this.props

    const booksCategories = [
      {
        'catID': 1,
        'catTitle': 'Currently Reading',
        'catValue': 'currentlyReading'
      }, {
        'catID': 2,
        'catTitle': 'Want to Read',
        'catValue': 'wantToRead'
      }, {
        'catID': 3,
        'catTitle': 'Read',
        'catValue': 'read'
      }
    ];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {booksCategories.map((category) => (
              <div key={category.catID} className="bookshelf">
                <h2 className="bookshelf-title">{category.catTitle}</h2>
                <BookCategory filteredBooks={books} category={category.catValue} onUpdate={onUpdateShelf} />
              </div>
            ))}
          </div>
        </div>

        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
