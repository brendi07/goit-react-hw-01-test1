import {
  StatisticsDiv,
  StatTitle,
  StatList,
  StatItem,
  Label,
  Percentage
} from "./Statistics.styled";
import PropTypes from "prop-types";

export default function Statistics({ title, stats }) {
    return (
      <StatisticsDiv>
        <StatTitle>{title}</StatTitle>

        <StatList>
          {stats.map((stat) => (
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
  stats: PropTypes.array,
}