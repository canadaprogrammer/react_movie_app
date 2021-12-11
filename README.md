# React Movie App

- React JS Fundamentals Practice

## class component vs function component

- | Functional Components                                 | Class Components                                                             |
  | ----------------------------------------------------- | ---------------------------------------------------------------------------- |
  | a plain JS function that accepts props as an argument | a render function automatically executes when it starts and calls setState() |
  | Stateless Components - accept data and display them   | stateful Components - implement logic and state                              |
  | React lifecycle methods can't be used                 | React lifecycle methods can be used                                          |
  | Hooks can be easily used                              | required different syntax                                                    |
  | Constructors are not used                             | Constructors are used as it needs to store state                             |

## The Component Lifecycle

- In the list below, commonly used lifecycle methods are marked as **bold**.

### Mounting

- These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

  1. **constructor()**
  2. static getDerivedStateFromProps()
  3. **render()**
  4. **componentDidMount()**

### Updating

- An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

  1. static getDerivedStateFromProps()
  2. shouldComponentUpdate()
  3. **render()**
  4. getSnapshotBeforeUPdate()
  5. **componentDidUpdate()**

### Unmounting

- This method is called when a component is being removed from the DOM:

  - **componentWillUnmount()**

### Error Handling

- These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

  - static getDerivedStateFromError()
  - componentDidCatch()

- ```jsx
  import React from 'react';
  import { unmountComponentAtNode } from 'react-dom';

  class App extends React.Component {
    state = {
      count: 0,
    };
    add = () => {
      // this.setState({ count: this.state.count + 1 });
      this.setState((current) => ({ count: current.count + 1 }));
    };
    minus = () => {
      this.setState((current) => ({ count: current.count - 1 }));
    };
    handleUnmount = () => {
      unmountComponentAtNode(document.getElementById('root'));
    };
    componentWillUnmount() {
      console.log('Component unmounted');
    }
    componentDidUpdate() {
      console.log('Component updated');
    }
    componentDidMount() {
      console.log('Component rendered');
    }
    render() {
      console.log('I am rendering');
      return (
        <div>
          <h1>The number is {this.state.count}</h1>
          <button onClick={this.add}>Add</button>
          <button onClick={this.minus}>Minus</button>
          <button onClick={this.handleUnmount}>Unmount</button>
        </div>
      );
    }
  }

  export default App;
  ```

## axios

- Axios is a promise-based HTTP Client for node.js and the browser. On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.

- instead of `fetch`

- `npm i axios`

## Navigation

- When you use `Link`, it needs to be inside `Router`

- BrowserRouter

  - It uses html5 historyAPI (`pushState`, `replaceState`, and `popstate`)

  -

- HashRouter

  - It uses the hash portion of the URL (`window.location.hash`)

  -

- ```jsx
  import React from 'react';
  import { HashRouter as Router, Routes, Route } from 'react-router-dom';
  import Home from './routes/Home.js';
  import About from './routes/About.js';
  import Navigation from './components/Navigation';

  function App() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </Router>
    );
  }

  export default App;
  ```

## detail page

- on Movie.js

  - ```jsx
    function Movie({ year, title, summary, poster, genres }) {
      return (
        <Link to='/movie-detail' state={{ year, title, summary, poster, genres }}>
          <div className={styles.movie}>
    ```

- on Detail.js

  - ```jsx
    import React from 'react';
    import { useLocation } from 'react-router-dom';
    import styles from './Movie.module.css';

    function Detail() {
      const location = useLocation();
      console.log(location);
      const { poster, title, year, genres, summary } = location.state;
      return (
        <div className={styles.movie}>
          <img src={poster} alt={title} title={title} />
    ```

# Javascript

- es6, Destructuring Assignment

  ```js
  // const movies = axios.get('https://yts-proxy.now.sh/list_movies.json');
  // setState({ movies: movies.data.data.movies });

  // prettier-ignore
  const {data: {data: { movies }}} = await axios.get('https://yts-proxy.now.sh/list_movies.json');
  setState({ movies });
  ```
