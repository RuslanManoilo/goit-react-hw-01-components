import styled from "styled-components";

export const BlockStats = styled.ul`
    display: flex;
    justify-content: center;
`;

export const StatsLabel = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100px;
    height: 100px;
    color: ${(props) => props.theme.colors.gray};
    background-color: rgb(240, 240, 240);
    border-top: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Quantity = styled.span`
    color: ${(props) => props.theme.colors.black};
    font-weight: 700;
`;