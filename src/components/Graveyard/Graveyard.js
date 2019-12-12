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
        {gravestoneCards}
      </div>
    );
  }
}

export default Graveyard;
