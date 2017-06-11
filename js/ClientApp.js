/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle) // convenience method{title: '

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({title: 'props are da best', color: 'peru'}),
        MyTitleFactory({title: 'semicolons are the worst', color: 'mediumaquamarine'}),
        MyTitleFactory({title: 'really i hate semicolons', color: 'rebeccapurple'}),
        MyTitleFactory({title: 'lololololol', color: 'tomato'})
      )
    )
  }
})
ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
