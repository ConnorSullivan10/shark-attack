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
      <div className="card-body grave-container">
        <img id="coffin" src="https://myrealdomain.com/images/clip-art-coffin-5.png" alt="coffin"/>
        <h5 className="card-title graveText"> {gravestone.firstName} {gravestone.lastName} </h5>
      </div>
    );
  }
}

export default Gravestone;
