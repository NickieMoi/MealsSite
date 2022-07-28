import './App.css';
import { Component } from 'react';
import Home from '../src/components/Home';
import { Router, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=f')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json.meals
        })
      });
  }

  render() {
    let { isLoaded, items } = this.state;
    if (!isLoaded) {
      return (
        <div>
          loading..
        </div>)
    } else {
      return (
        <div className="App">
          <div id='header'>
            My<span>Meal</span>pal
          </div>
          <div id='head'></div>
            <ul>
              {items.map(item => (
                <li key={item.idMeal}>
                  <li>Meal: <b>{item.strMeal}</b> </li>
                  <li>Category: <i>{item.strCategory}</i></li>
                  <li><img src={item.strMealThumb} style={{ height: 100 + `%`, width: 100 + `%` }}></img></li>
                  <li id='last'><b>Recipe</b> :<p>{item.strInstructions}</p></li>
                  <li className='list'><input class="form-control" type="text" placeholder="Add review"></input><button type='button' className='btn btn-lg btn-success'>Submit</button></li>
                  <li><button type='button' className='btn btn-md btn-outline-success order'>Order</button></li>
                  <li id='buttons'><img src="https://img.icons8.com/emoji/38/000000/thumbs-up.png"/><img src="https://img.icons8.com/emoji/38/000000/thumbs-down-emoji.png"/></li>

                </li>
              ))};
            </ul>
        </div>
      );
    }
return(
  <Router>
    <div>
    <Home/>
    </div>
  </Router>
)
  }
};

export default App;
