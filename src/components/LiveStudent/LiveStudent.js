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
        <div className="card-body surf-container">
          <img id="surfboard" src="https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/surfboard-with-shark-bite-6258-15340-550x550.png" alt="surfboard"/>
          <h5 className="card-title surfText">{liveStudent.firstName} {liveStudent.lastName}</h5>
        </div>
    );
  }
}

export default LiveStudent;
