import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import studentData from '../helpers/data/studentsData';
import './App.scss';

class App extends React.Component {
  state = {
    livingStudents: [],
    deadStudents: [],
  }

  componentDidMount() {
    const livingStudents = studentData.livingStudents();
    const deadStudents = studentData.dearlyBeloved();
    this.setState({ deadStudents, livingStudents });
  }

  aliveStudent = () => {
    const livingStudents = studentData.livingStudents();
    this.setState({ livingStudents });
  }

  deadStudent = () => {
    const deadStudents = studentData.dearlyBeloved();
    this.setState({ deadStudents });
  }

  studentKiller = (studentId) => {
    studentData.followTheLight(studentId);
    const livingStudents = studentData.livingStudents();
    const deadStudents = studentData.dearlyBeloved();
    this.setState({ deadStudents, livingStudents });
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
