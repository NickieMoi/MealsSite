import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home'
import CommentForm from './components/CommentForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json.meals
        })
      });
  }

  render() {
    let { isLoaded } = this.state;
    if (!isLoaded) {
      return (
        <div>
          loading..
        </div>)
    } else {
      return (
        <Router>
          <Routes>
            <Route exact path='/'  element={<Home items={this.state.items}/>}/>
            <Route exact path='/comment' element={<CommentForm/>}/>
          </Routes>
        </Router> 
        
      );
    }
  }
};

export default App;
