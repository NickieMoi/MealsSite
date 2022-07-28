import React, { Component } from "react";


class Home extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
          items: this.props.items,
          value: '',
        }

        this.handleChange =this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event){
        this.setState({value:event.target.value});
      }

      handleSubmit(event){
        event.preventDefault();
      }

render(){
    let items=this.props.items;

    return (
        <React.Fragment>
        <div>
          <div className="App">
              <div id='header'>
                My<span>Meal</span>pal
              </div>
              <div id='head'>
                <ul>
                  {items.map(item => (
                    <li key={item.idMeal}>
                      <li>Meal: <b>{item.strMeal}</b> </li>
                      <li>Category: <i>{item.strCategory}</i></li>
                      <li><img src={item.strMealThumb} style={{ height: 100 + `%`, width: 100 + `%` }}></img></li>
                      <li id='last'><b>Recipe</b> :<p>{item.strInstructions}</p></li>
                      <form onSubmit={this.handleSubmit}>
                      <li className='list'><input class="form-control" type="text" placeholder="Add review here" value={this.state.value} onChange={this.handleChange}></input><button type='submit' className='btn btn-lg btn-success'>Submit</button></li></form>
                      <h4>{this.state.value}</h4>
                      <li><button type='button' className='btn btn-md btn-outline-success order'>Order</button></li>
                      <li id='buttons'><img src="https://img.icons8.com/emoji/38/000000/thumbs-up.png"/><img src="https://img.icons8.com/emoji/38/000000/thumbs-down-emoji.png"/></li>
    
                    </li>
                  ))};
                </ul>
            </div>
            </div>
        </div>
        </React.Fragment>
    )
}

}

export default Home