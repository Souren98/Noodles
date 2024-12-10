
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const NoodleIcon = styled.div`
  font-size: 3em;
`;

const Name = styled.h2`
  color: #D2691E;
  margin: 10px 0;
`;

const Origin = styled.p`
  display: flex;
  align-items: center;
  color: #888;
  font-weight: bold;
  margin: 5px 0;
`;

const Description = styled.p`
  color: #333;
  margin-top: 10px;
  line-height: 1.4;
`;

function NoodleCard({ noodle }) {
  return (
    <Card
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <NoodleIcon>{noodle.icon}</NoodleIcon>
      <Name>{noodle.name}</Name>
      <Origin><FaMapMarkerAlt /> {noodle.origin}</Origin>
      <Description>{noodle.description}</Description>
    </Card>
  );
}

export default NoodleCard;
