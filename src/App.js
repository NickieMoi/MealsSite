import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      items: [],
      isLoaded: false,
  }
  }

  componentDidMount(){
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=f')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded:true,
          items:json.Meals
        })
      });
  }

render(){
  let { isLoaded, items } = this.state;
  if (!isLoaded){
    return(
    <div>
      loading..
    </div>)
  }else{
    return (
      <div className="App">
        <ul>
          { items.map(item => (
            <li key={item.idMeal}>
            Meal: {item.strMeal} Category: {item.strCategory}
            </li>
          )) };
        </ul>
      </div>
    );
  }
  
}
}

export default App;
