import React, { Component } from 'react'
//import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box-components';

class App extends Component 
{
  constructor()
  {
    super();
    this.state = { monsters:[] ,
                   searchField: ' '
                 };
    this.onSearchChange = this.onSearchChange.bind(this);
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() 
  {
    fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(users => this.setState({monsters:users}));
  }

  onSearchChange = (Event) => {
                               this.setState ({searchField: Event.target.value});
                              };

  render()
  {
    const { monsters, searchField } = this.state;
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;

    console.log(this.state);
    const filteredMonsters = monsters.filter
    (monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className='App'>
        <h1> Catherine's Monsters </h1>
        <SearchBox
          placeholder = 'Catherine search monsters'
          onSearchChange = {this.onSearchChange}
        /> 
        <CardList monsters = {filteredMonsters} />
      </div>
    );
  }
}



export default App;
