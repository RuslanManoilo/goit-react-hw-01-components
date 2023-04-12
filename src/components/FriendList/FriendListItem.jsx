import PropTypes from "prop-types";
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


FriendListItem.propTypes = {
    friend: PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }),
};