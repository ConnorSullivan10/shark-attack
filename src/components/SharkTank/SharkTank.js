import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from '../LiveStudent/LiveStudent';
import studentShape from '../../helpers/props/studentShape';

class SharkTank extends React.Component {
  static propTypes = {
    livingStudents: PropTypes.arrayOf(studentShape.studentShape),
    sharkAttack: PropTypes.func,
  }

  sharkAttackEvent = (e) => {
    const { sharkAttack } = this.props;
    e.preventDefault();
    sharkAttack();
  }

  render() {
    const myLiveStudents = this.props.livingStudents;
    const liveStudentCards = myLiveStudents.map((liveStudent) => <LiveStudent key={liveStudent.id} liveStudent={liveStudent}/>);
    return (
      <div className="sharkTank">
        <button className="btn btn-danger" onClick={this.sharkAttackEvent}>SHARK ATTACK</button>
        {liveStudentCards}
      </div>
    );
  }
}

export default SharkTank;
