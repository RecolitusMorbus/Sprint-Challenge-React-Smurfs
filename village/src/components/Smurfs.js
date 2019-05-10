import React, { Component } from 'react';
import styled from 'styled-components';
import Smurf from './Smurf';

const VillagePeople = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ModifiedList = styled.ul`
  padding: 0;
`;

class Smurfs extends Component {
  render() {
    return (
      <VillagePeople>
        <h1>Smurf Village</h1>
        <ModifiedList>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ModifiedList>
      </VillagePeople>
    );
  }
}

Smurf.defaultProps = {
  smurfs: [],
};

export default Smurfs;
