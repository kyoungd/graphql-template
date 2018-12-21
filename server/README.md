
npm install express graphql express-graphql
npm install mongoose lodash

http://localhost:4000/graphql
# look for a book with ID.
{
  book(id:"5be4dc6f8ebb3930103f00d0") {
    id,
    genre,
    name
  }
}

#look for all books.
{
  books{
    id,
    name,
    author {
      name
    }
  }
}

#update data through mutation
mutation {
  addAuthor(name: "JK Rowlin", age: 53) {
    name
    age
  }
}

# notice the authorId is not available to return.
mutation {
  addBook (name: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", authorId: "5c1bdf97fd8a3015086f83fe") {
  	name
    genre
    author {
      name
    }
	}
}
