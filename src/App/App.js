import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.scss';
import studentData from '../helpers/data/studentsData';
import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';

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

  sharkAttack = (studentId) => {
    const livingStudents = studentData.livingStudents();
    const randStudent = livingStudents[Math.floor(Math.random() * livingStudents.length)];
    studentData.followTheLight(randStudent);
    const deadStudents = studentData.dearlyBeloved();
    this.setState({ deadStudents, livingStudents });
  }

  render() {
    return (
      <div className="App">
          <button className="btn btn-success">Sharks on sharks</button>
          <SharkTank livingStudents={this.state.livingStudents}/>
          <Graveyard deadStudents={this.state.deadStudents}/>
      </div>
    );
  }
}

export default App;
