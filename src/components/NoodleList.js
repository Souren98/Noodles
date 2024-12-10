
import React from 'react';
import styled from 'styled-components';
import NoodleCard from './NoodleCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

function NoodleList({ noodles }) {
  return (
    <Grid>
      {noodles.map(noodle => (
        <NoodleCard key={noodle.id} noodle={noodle} />
      ))}
    </Grid>
  );
}

export default NoodleList;
