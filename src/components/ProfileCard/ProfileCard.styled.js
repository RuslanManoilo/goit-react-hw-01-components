import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 30px;
`;

export const Avatar = styled.img`
    width: 100px;
    padding: 8px;
    border-radius: 50%;
    box-shadow: 0px 0px 5px 0px ${(props) => props.theme.colors.gray};
`;

export const Name = styled.p`
    font-weight: 700;
    font-size: 20px;
    margin-top: 20px;
`;

export const Tag = styled.p`
    color: ${(props) => props.theme.colors.gray};
    margin-top: 10px;
`;

export const Location = styled.p`
    color: ${(props) => props.theme.colors.gray};
    margin-top: 10px;
`;