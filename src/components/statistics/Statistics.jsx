export const Statistics = ({ stats }) => {
    return (
        <ul>
            {stats.map(data => (
                <li key={data.id}>
                    <span>{data.label}</span>
                    <span>{data.percentage}%</span>
                </li>
            ))}
        </ul>
    );
};