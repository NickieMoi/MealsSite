import './App.css';
import { Component } from 'react';
import Home from '../src/components/Home';
import { Router, Route } from "react-router-dom"

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
          <center>
            <ul>
              {items.map(item => (
                <li key={item.idMeal}>
                  Meal: {item.strMeal} Category: {item.strCategory}
                  Image :<img src={item.strMealThumb} style={{ height: 200 + `px`, width: 200 + `px` }}></img>
                  Recipe :{item.strInstructions}

                </li>
              ))};
            </ul>
          </center>
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
