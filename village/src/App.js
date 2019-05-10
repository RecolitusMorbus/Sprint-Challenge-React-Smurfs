import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  
  componentDidMount() {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.error(err));
  }

  addSmurf = (e, smurf) => {
    e.preventDefault();

    axios({
      method: 'POST',
      url: `http://localhost:3333/smurfs`,
      data: smurf
    })
      .then(res => {
        console.log(res.data);
        this.setState({ smurf: res.data });
        this.props.history.push('/');
        window.location.reload();
      })
      .catch(err => console.error(err));
  }
  
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Link to='/smurf-form'>Form</Link>
        <br/>
        <Link to='/'>Smurfs</Link>
        <br/><br/>
        <Route exact path='/' render={() => <Smurfs smurfs={this.state.smurfs} />} />
        <Route path='/smurf-form' render={() => <SmurfForm addSmurf={this.addSmurf} />} />
      </div>
    );
  }
}

export default withRouter(App);
