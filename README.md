# contentful_interview

A simple express server that resizes images

## To run the application

1. Clone the repository
2. `cd contentful_interview && npm install`
3. `node app.js`

### API

- GET /resize/:file_name?width&height
  - :file_name is the name of the file on the server
  - Width and height are optional numerics, they both default to 300
