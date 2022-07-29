import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home'
import CommentForm from './components/CommentForm';
import SingleItem from './components/SingleItem';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://cryptic-dawn-66364.herokuapp.com/meals')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
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
            <Route exact path='/comment/:id' element={<CommentForm items={this.state.items}/>}/>
            <Route exact path= '/' element={< SingleItem items={this.state.items}/>}/>
          </Routes>
        </Router> 
        
      );
    }
  }
};

export default App;
