import { FriendAvatar, FriendItem, Name, Status } from "./FriendListItem.styled";

export const FriendListItem = ({ friend: {id, avatar, name, isOnline}}) => {
    return (
        <FriendItem key={id}>
            <Status online={isOnline}></Status>
            <FriendAvatar src={avatar} alt={name} />
            <Name>{name}</Name>
        </FriendItem>
    );
};