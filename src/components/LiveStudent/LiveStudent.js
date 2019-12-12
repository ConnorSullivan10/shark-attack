import React from 'react';
// import PropTypes from 'prop-types';
import studentShape from '../../helpers/props/studentShape';

class LiveStudent extends React.Component {
  static propTypes = {
    livingStudents: studentShape.studentShape,
  }


  render() {
    const { liveStudent } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{liveStudent.firstName} {liveStudent.lastName}</h5>
        </div>
      </div>
    );
  }
}

export default LiveStudent;
