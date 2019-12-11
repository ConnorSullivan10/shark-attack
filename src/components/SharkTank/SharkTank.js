import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from '../LiveStudent/LiveStudent';
import studentShape from '../../helpers/props/studentShape';

class SharkTank extends React.Component {
  static propTypes = {
    liveStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const myLiveStudents = this.props.liveStudents;
    const liveStudentCards = myLiveStudents.map((student) => <LiveStudent key={student.id} student={student}/>);
    return (
      <div className="sharkTank">
        {liveStudentCards}
      </div>
    );
  }
}

export default SharkTank;
