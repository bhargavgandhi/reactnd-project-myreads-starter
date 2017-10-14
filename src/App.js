import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id).concat([book])
      }))
    })
  }

  render() {
    const {books} = this.state

    return (
      <BrowserRouter>
      <div className="app">
        <Route exact path="/" render={() => (
            <ListBooks books={books} onUpdateShelf={this.updateBookShelf}/>
        )}/>

        <Route path="/search" render={({ history }) => (
          <SearchBooks
            books={books} onUpdateShelf={this.updateBookShelf}
          />
        )} />
      </div>
    </BrowserRouter>
    )
  }
}

export default BooksApp
