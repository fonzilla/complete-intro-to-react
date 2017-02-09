import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFact({title: 'props are the best', color: 'peru'}),
        MyTitleFact({title: 'whatever whatever', color: 'mediumaquamarine'}),
        MyTitleFact({title: 'out of ideas to type', color: 'tomato'})
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
