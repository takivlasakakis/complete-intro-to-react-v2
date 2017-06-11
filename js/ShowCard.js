import React from 'react'
import { Link } from 'react-router'
const { string } = React.PropTypes

const ShowCard = React.createClass({
  propTypes: {//what i expect to get from my parent
    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired,
    imdbID: string.isRequired
  },
  render () {
    const { poster, title, year, description } = this.props //  remove .show because in search we did ...show
    return (
      <Link to={`/details/${this.props.imdbID}`}>
        <div className='show-card'>
          <img src={`/public/img/posters/${poster}`} />
          <div>
            <h3>{title}</h3>
            <h4>({year})</h4>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    )
  }
})

export default ShowCard
