import styled from "styled-components";

export const Table = styled.table`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
`;

export const TableBody = styled.tbody`
    box-shadow: 0px 3px 5px 0px ${(props) => props.theme.colors.gray};

`;