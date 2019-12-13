import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from '../LiveStudent/LiveStudent';
import studentShape from '../../helpers/props/studentShape';
import studentData from '../../helpers/data/studentsData';

class SharkTank extends React.Component {
  static propTypes = {
    livingStudents: PropTypes.arrayOf(studentShape.studentShape),
    sharkAttack: PropTypes.func,
  }

  sharkAttackEvent = (e) => {
    const students = studentData.livingStudents();
    if (students.length > 0) {
      const { sharkAttack } = this.props;
      e.preventDefault();
      sharkAttack();
    }
  }

  render() {
    const myLiveStudents = this.props.livingStudents;
    const liveStudentCards = myLiveStudents.map((liveStudent) => <LiveStudent key={liveStudent.id} liveStudent={liveStudent}/>);
    return (
      <div className="sharkTank">
        <h1 className="text-center">Shark Tank</h1>
        <button className="btn btn-danger text-center" onClick={this.sharkAttackEvent}>SHARK ATTACK</button>
        <div className="card sharkTank-section d-flex flex-wrap">
          {liveStudentCards}
        </div>
      </div>
    );
  }
}

export default SharkTank;
