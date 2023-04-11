import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 8px;
    box-shadow: 0px 0px 5px 0px ${(props) => props.theme.colors.gray};
`;

export const Title = styled.h2`
    text-align: center;
    font-weight: 600;
    padding: 30px;
    color: ${(props) => props.theme.colors.gray};
`;

export const StatList = styled.ul`
    display: flex;
`;

export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100px;
    height: 100px;
`;

export const Percentage = styled.span`
    font-size: 24px;
`;