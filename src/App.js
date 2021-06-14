import React, { Component } from 'react';
import { CardList } from './components/CardList/Card-list.component'
import { SearchBox } from './components/SearchBox/SearchBox.component'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters : [],
      searchField : '',
    }
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(monsters => this.setState({monsters : monsters}))
  }

  handleChange = (e) => {
    this.setState({searchField : e.target.value})
  }

  render() {  
    const { monsters, searchField } = this.state
    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className='App'>
        <h1>Monsters</h1>
        <SearchBox
          placeholder="Search monsters"
          handleSearch={this.handleChange}/>
        <CardList monsters={filteredMonster}/>
      </div>
    )
  }
}

export default App;