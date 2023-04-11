import styled from "styled-components";

export const TableTitle = styled.th`
    justify-content: center;
    gap: 1px;
    width: 230px;
    height: 15px;
    padding: 20px;

    color: ${(prop) => prop.theme.colors.white};
    background-color: blueviolet;
`;