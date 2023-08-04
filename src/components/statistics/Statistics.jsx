import PropTypes from 'prop-types';

import {
  StatisticsDiv,
  StatTitle,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  
  return (
    <StatisticsDiv>
      {title ?
        <StatTitle>{title}</StatTitle> : null
    }
     

      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsDiv>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })),
};
