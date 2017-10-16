# reactnd-project-myreads
This is myreads project from Udacity, I have added my files/functions to the project.

## Getting started
### To run locally:
```
git clone https://github.com/bhargavgandhi/reactnd-project-myreads-starter.git
cd reactnd-project-myreads
npm install
npm start
```

## Demo
Check out the live demo here  [https://bhargavgandhi.github.io/reactnd-project-myreads-starter/](https://bhargavgandhi.github.io/reactnd-project-myreads-starter/)

## Documentation
### What's included
Files you will find are below:
```
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   ├── arrow-drop-down.svg
    │   └── search.svg
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BookCategory.js # A JavaScript file to render books based on the category (shelf).
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── ListBooks.js # A Javascript file, to create a react component to render List of books for given three categories : Currently Reading, Want to Read and Read.
    └── SearchBooks.js # A JavaScript file to fire a search query (using the BooksAPI) and search and render list of filtered/matching books.

```
### Functionality
The main page shows the list of books fetched from the backend server (provided by Udacity) using BooksAPI. Display list of books into different categories based on Book's Shelf value. The three categories are:

* Currently Reading
* Want to Read
* Read

You can change book's shelf by changing the shelf using the dropdown option. It appears when you mouse hover each book. You can select 1 option from available 4 options. The first 3 options are the categories as mentioned above and 4th option is 'None'.

When you click on 'Search' Icon / Button, it will navigate you to Search Page (/search). You can search books by Book's Title or Author Name. You can also change the shelf value of a book within Search page which reflects on search page as well as main page too. See below for more information on Search Function and Search Terms.

The changing of the shelf value is updated to the backend server as well within app.

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


## Copyright and License
A Project [starter code](https://github.com/udacity/reactnd-project-myreads-starter) contributed by Udacity.

## Resources
Search Icon has been provided by [simpleicon] (https://www.flaticon.com/authors/simpleicon)
from website [flaticon] (https://www.flaticon.com/) and is licensed by [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/)
