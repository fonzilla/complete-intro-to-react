import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
        <MyTitle title='props are cool' color='rebeccapurple' />
        <MyTitle title='semicolons are useless' color='mediumaquamarine' />
        <MyTitle title='whatever whatever' color='peru' />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
