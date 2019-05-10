import React from 'react';
import styled from 'styled-components';

const SmurfPlaque = styled.div`
  height: 120px;
  width: 300px;
  margin: 10px 0;
  padding: 10px;
  color: #cccccc;
  background-color: #7da4bb;
  border-radius: 3px;
  border: 1px solid #fff;
`;

const Smurf = props => {
  return (
    <SmurfPlaque>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </SmurfPlaque>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

