
# Gurucool Assignment Backend

This is the backend API for the Gurucool Assignment. It provides routes for user authentication, authorization, and url management. The project uses Node.js, Express, Mongoose, JWT, and Swagger for API documentation.

## Demo Video and Postman Data

 - [Demo Video](https://drive.google.com/file/d/1FAjAHg-5jknCjzh99Pk_aF_kO6SuaV11/view?usp=drive_link)
 - [Deployed Link](https://gurucool-assignment-yf1e.onrender.com/)

## Run Locally

Clone the project

```bash
  git clone https://github.com/kirti136/gurucool_assignment
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start or npm start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`
`MONGO_URL`
`JWT_SECRET_KEY`


## API Reference

### SWAGGER_DOCS

#### Serve swagger docs
```http
https://gurucool-assignment-yf1e.onrender.com/api-docs
```

### USER
#### Register a new user
```http
POST /api/user/register
```

#### Log in a user
```http
POST /api/user/login
```

#### Log out a user
```http
POST /api/user/logout
```

#### Get all users (Admin)
```http
GET /api/user/
```

### URL
#### Generate Short Url
```http
POST /api/url/shorten
```

#### Redirector
```http
GET /api/url/:shortUrl
```

## Tech Stack

- **Node.js**: JavaScript runtime for server-side programming.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **JWT**: JSON Web Token for secure user authentication.
- **Swagger**: Simplifies API development by documenting API endpoints.
- **express-validator**: Middleware for validating and sanitizing user input.
- **dotenv**: Loads environment variables from a `.env` file.
- **cookie-parser**: Parse HTTP request cookies.
- **cors**: Provides a Connect/Express middleware to enable CORS.
- **bcryptjs**: Library to hash passwords.
