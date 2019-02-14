
# Project
E-commerce
Build with Node.js and React.js

## Preview
![gif preview](https://github.com/c0d3r24/e-commerce/blob/master/intialUI.gif)


## Available Scripts

In the project directory, you can run:

### `npm run download`
This will download server and client dependencies.

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Details
### server
- server.js : set-up the server using express.
- routes/productRoute : specifies two endpoint that inturn fetch data from provided URI.
- dev-dependencies : ['concurrently']
- dependencies: ['express', 'axios']

### client
- .component files in client/src/components are stateless components
- .container files in the client/src/components are with state
- dependencies: ['react', 'react-redux', 'redux-thunk', 'react-router-dom', 'axios']