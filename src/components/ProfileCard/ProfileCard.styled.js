import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 30px;
`;

export const Avatar = styled.img`
    width: 100px;
    border-radius: 50%;
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