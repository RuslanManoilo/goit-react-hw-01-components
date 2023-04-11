import { Percentage, StatItem, StatList, Title, Wrapper } from "./Statistics.styled";

export const Statistics = ({ stats }) => {
    return (
        <Wrapper>
            <Title>UPLOAD STATS</Title>

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