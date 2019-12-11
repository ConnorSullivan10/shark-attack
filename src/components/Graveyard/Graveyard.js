import React from 'react';
import PropTypes from 'prop-types';
import Gravestone from '../Gravestone/Gravestone';
import studentShape from '../../helpers/props/studentShape';

class Graveyard extends React.Component {
  static propTypes = {
    gravestones: PropTypes.arrayOf(studentShape.studentShape),
  }


  render() {
    const myGravestones = this.props.gravestones;
    const gravestoneCards = myGravestones.map((student) => <Gravestone key={student.id} student={student}/>);
    return (
      <div className="graveyard">
        {gravestoneCards}
      </div>
    );
  }
}

export default Graveyard;
