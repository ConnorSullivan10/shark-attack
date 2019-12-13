import React from 'react';
import PropTypes from 'prop-types';
import Gravestone from '../Gravestone/Gravestone';
import studentShape from '../../helpers/props/studentShape';

class Graveyard extends React.Component {
  static propTypes = {
    deadStudents: PropTypes.arrayOf(studentShape.studentShape),
  }


  render() {
    const myGravestones = this.props.deadStudents;
    const gravestoneCards = myGravestones.map((gravestone) => <Gravestone key={gravestone.id} gravestone={gravestone}/>);
    return (
      <div className="graveyard">
        <h1 className="text-center graveTitle">Graveyard</h1>
        <br></br>
        <div className="card gravestone-section d-flex flex-wrap">
          {gravestoneCards}
        </div>
      </div>
    );
  }
}

export default Graveyard;
