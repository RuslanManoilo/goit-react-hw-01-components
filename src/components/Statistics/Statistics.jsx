import PropTypes from "prop-types";
import { Percentage, StatItem, StatList, Title, Wrapper } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
    return (
        <Wrapper>
            <Title>{ title }</Title>

            <StatList>
                {stats.map(data => (
                    <StatItem key={data.id}>
                        <span>{data.label}</span>
                        <Percentage>{data.percentage}%</Percentage>
                    </StatItem>
                ))}
            </StatList>
        </Wrapper>
    );
};


Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};