import React from 'react'
import ShowCard from './ShowCard'
import preload from '../public/data.json'

const Search = React.createClass({
  getInitialState () { // enhanced object literal syntax, just shorter | getInitialState: function () {} 
    return {
      searchTerm: 'house'
    }
  },

  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})
    // could do this.state.searchTerm = event.target.value
    // this.forceUpdate()
  },

  render () {
    return (
      <div className='search'>
        <header>
          <h1>sVideo</h1>
          {/*<h1>{this.state.searchTerm}</h1>*/}
          <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type='text' placeholder='Search' />
        </header>
        <div>
          {preload.shows
            .filter((show) => return `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0 // look at 4:41+2:30 for good explaination 
            )
            .map((show) => {
            return (
              <ShowCard key={show.imdbID} {...show} /> // like saying poster={show.poster} title={show.title} etc
            )
          })}
        </div>
      </div>
    )
  }
})

export default Search
