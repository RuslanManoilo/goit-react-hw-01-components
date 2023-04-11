import styled from "styled-components";

export const FriendItem = styled.li`
    display: flex;
    gap: 10px;
    width: 300px;
    padding: 8px;
    border-radius: 8px;
    box-shadow: 1px 3px 5px 0px ${(props) => props.theme.colors.gray};
    align-items: center;
`;

export const Status = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;

    background-color: ${(props) => {
        return props.online ? props.theme.colors.green : props.theme.colors.red;
    }};
`;

export const FriendAvatar = styled.img`
    width: 100px;
    height: 100px;
    padding: 8px;

    border-radius: 8px;
    box-shadow: 0px 0px 5px 0px ${(props) => props.theme.colors.gray};
`;

export const Name = styled.p`
    font-weight: 500;
    font-size: 24px;
`;