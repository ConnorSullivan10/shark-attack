import React from 'react';
// import PropTypes from 'prop-types';
import studentShape from '../../helpers/props/studentShape';

class Gravestone extends React.Component {
  static propTypes = {
    deadStudents: studentShape.studentShape,
  }

  render() {
    const { gravestone } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{gravestone.firstName} {gravestone.lastName}</h5>
        </div>
      </div>
    );
  }
}

export default Gravestone;
