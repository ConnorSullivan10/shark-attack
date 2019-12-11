import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import studentData from '../helpers/data/studentsData';
import './App.scss';

class App extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    let students = studentData.livingStudents();
    this.setState({ students });
    students = studentData.dearlyBeloved();
    this.setState({ students });
  }

  aliveStudent = () => {
    const students = studentData.livingStudents();
    this.setState({ students });
  }

  deadStudent = () => {
    const students = studentData.dearlyBeloved();
    this.setState({ students });
  }

  studentKiller = (studentId) => {
    studentData.followTheLight(studentId);
    let students = studentData.livingStudents();
    this.setState({ students });
    students = studentData.dearlyBeloved();
    this.setState({ students });
  }

  render() {
    return (
      <div className="App">
          <button className="btn btn-success">Sharks on sharks</button>
      </div>
    );
  }
}

export default App;
