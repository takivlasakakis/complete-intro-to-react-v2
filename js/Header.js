import React from 'react'
import { Link } from 'react-router'
// import { connect } from 'react-redux'
// import { setSearchTerm } from './actionCreators'
// const { func, bool, string } = React.PropTypes

class Header extends React.Component {
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace =  <input onChange={this.props.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
    } else {
      utilSpace = (
        <h2>
          <Link to='/search'>
            Back
          </Link>
        </h2>
      )
    }
    return (
      <header>
        <h1>
          <Link to='/'>
            svideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

const { func, bool, string } = React.PropTypes
Header.propTypes = {
  handleSearchTermChange: func,
  showSearch: bool,
  searchTerm: string
}

export default Header




























// const Header = React.createClass({
//   propTypes: {
//     showSearch: bool,
//     searchTerm: string,
//     dispatch: func
//   },
//   handleSearchTermChange (event) {
//     this.props.dispatch(setSearchTerm(event.target.value))
//   },
//   render () {
//     let utilSpace
//     if (this.props.showSearch) {
//       utilSpace = <input type='text' placeholder='Search' value={this.props.searchTerm} onChange={this.handleSearchTermChange} />
//     } else {
//       utilSpace = (
//         <h2 className='header-back'>
//           <Link to='/search'>
//             Back
//           </Link>
//         </h2>
//       )
//     }
//     return (
//       <header>
//         <h1>
//           <Link to='/'>
//             svideo
//           </Link>
//         </h1>
//         {utilSpace}
//       </header>
//     )
//   }
// })

// const mapStateToProps = (state) => {
//   return {
//     searchTerm: state.searchTerm
//   }
// }

// export default connect(mapStateToProps)(Header)
