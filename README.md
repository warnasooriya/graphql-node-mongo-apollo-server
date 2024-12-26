# GraphQL Node Mongo Apollo Server

This repository contains a full-stack implementation of a GraphQL server using Node.js, MongoDB, and Apollo Server. The project demonstrates how to build a GraphQL API with MongoDB as the database, leveraging the Apollo Server framework for managing GraphQL queries and mutations.

---

## Features

- **GraphQL API**: Provides a flexible and efficient query language for APIs.
- **MongoDB Integration**: Leverages MongoDB for data storage and retrieval.
- **Apollo Server**: Simplifies the setup of a GraphQL server with built-in features like schema stitching, authentication, and more.
- **CRUD Operations**: Implements Create, Read, Update, and Delete functionality via GraphQL queries and mutations.
- **Modular Structure**: Organized codebase for scalability and maintainability.
- **Real-Time Functionality**: Supports subscriptions for real-time updates (if implemented).

---

## Installation

### Prerequisites

Ensure you have the following installed on your system:
- Node.js (v14.x or later)
- MongoDB (running locally or via a cloud service like MongoDB Atlas)
- Git

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/warnasooriya/graphql-node-mongo-apollo-server.git
   cd graphql-node-mongo-apollo-server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root of the project with the following content:
   ```env
   PORT=4000
   MONGO_URI=mongodb://localhost:27017/your-database-name
   ```

   Replace `your-database-name` with the name of your MongoDB database.

4. Start the server:
   ```bash
   npm start
   ```

5. Access the GraphQL Playground:
   Navigate to `http://localhost:5000/graphql` in your browser to explore and test the API.

---

## Usage

### Example Queries

#### Fetch a Single Recipe by ID
```graphql
query {
    receipe(ID: "12345") {
        name
        description
        createdAt
        thumbsUp
        thumbsDown
    }
}
```

#### Fetch Multiple Recipes
```graphql
query {
    getReceipes(amount: 5) {
        name
        description
        createdAt
    }
}
```

### Example Mutations

#### Create a New Recipe
```graphql
mutation {
    createReceipe(receipeInput: {name: "Pasta", description: "Delicious homemade pasta"}) {
        name
        description
        createdAt
    }
}
```

#### Update a Recipe
```graphql
mutation {
    editReceipe(ID: "12345", receipeInput: {name: "Updated Pasta", description: "Updated description"}) 
}
```


#### Delete a Recipe
```graphql
mutation {
    deleteReceipe(ID: "12345")
}
```

---

## Folder Structure

```
graphql-node-mongo-apollo-server/
├── src/
│   ├── resolvers/         # Resolver functions for GraphQL operations
│   ├── schemas/           # GraphQL schema definitions
│   ├── models/            # Mongoose models
│   └── index.js           # Entry point for the server
├── .env                   # Environment variables
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```
 
 
