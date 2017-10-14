import React, {Component} from 'react'

class BookCategory extends Component {
  render() {
    const {filteredBooks, category, onUpdate} = this.props

    let showingBooks
    showingBooks = filteredBooks.filter((book) => category === 'none' ? book : book.shelf === category)

    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {showingBooks.map((book) => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks.thumbnail})`
                  }}></div>

                  <div className="book-shelf-changer">
                    <select value={!book.shelf ? "none" : book.shelf} onChange={(event) => onUpdate(book, event.target.value)}>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                  { !book.authors ? book.authors : book.authors.join(', ') }
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default BookCategory
