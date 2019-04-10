import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux';
import AllKittens from './AllKittens'
import AllUsers from './AllUsers'

class Root extends React.Component {
  async componentDidMount() {

  }
  render() {
    return (
      <Router>
        <div>
          <nav>
            <h3>Welcome!</h3>
            <Link className="linkStyle" to="/">Home</Link>
            <Link className="linkStyle" to="/kittens">Kittens</Link>
            <Link className="linkStyle" to="/users">Users</Link>
          </nav>
          <main>
            <h1>Kittens</h1>
            <Route exact path="/kittens" component={AllKittens} />
            <Route exact path="/users" component={AllUsers} />
          </main>
        </div>
      </Router>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  null,
  mapDispatchToProps
)(Root)
