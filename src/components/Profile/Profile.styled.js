import styled from "styled-components";

export const Wrapper = styled.div`
    width: 300px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 0px 5px 0px ${(props) => props.theme.colors.gray};
`;