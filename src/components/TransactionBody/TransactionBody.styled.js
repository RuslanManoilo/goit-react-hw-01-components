import styled from "styled-components";

export const TableRow = styled.tr`
    text-align: center;
    height: 50px;
`;

export const TableSell = styled.td`
    box-shadow: 0px 2px 4px 0px ${(props) => props.theme.colors.gray};
`;