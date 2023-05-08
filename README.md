# Truvideo

Author: Nicolas de Paula

A new company needs to address these requirements:
Create a Node API with Typescript.
Connect the Node API to MongoDB using mongoose (desirable models in typescript).
We need to develop three endpoints behind a basic authentication (username and password).
Create a user with name, last name, address, and profile picture (this should be a file).
Retrieve users.
Update user.
Star point: Dockerize MongoDB and the Node API

**Note**: Authentication is performed using JWT and password hashing is implemented using bcrypt.

## Prerequisites

Make sure you have Docker and Docker Compose installed on your system. If not, you can download and install them from the [official Docker website](https://www.docker.com/products/docker-desktop).

## Installation

1. **Clone the repository** to your local machine:
git clone https://github.com/kNightRunner/truvideo.git


2. **Rename** `.env.example` to `.env`.

3. **Run Docker Compose** to build the images:

docker-compose build

## Usage

1. **Run Docker Compose** to start the containers:

docker-compose up

2. The API should now be accessible at `http://localhost:3000`.

3. POST /login - This endpoint is used to authenticate a user and obtain an access token. The client sends a request to this endpoint with their login credentials in the request body. 
If the credentials are valid, the server responds with an access token that the client can use to make authenticated requests to other endpoints. 
The token is typically sent in the Authorization header of subsequent requests.

## API Endpoints
- `POST /login` - Use this endpoint to log in and receive the token
- `POST /users` - Create a new user
- `GET /users` - Retrieve all users
- `PUT /users/:id` - Update a user

## License

This project is licensed under the ISC License.

