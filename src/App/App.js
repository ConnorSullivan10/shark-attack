import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import studentData from '../helpers/data/studentsData';
import './App.scss';

class App extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    const students = studentData.getStudents();
    this.setState({ students });
  }

  render() {
    return (
      <div className="App">
          <button className="btn btn-success">SHARK ATTACK</button>
      </div>
    );
  }
}

export default App;
