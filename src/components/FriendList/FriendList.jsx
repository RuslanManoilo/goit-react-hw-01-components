import PropTypes from "prop-types";
import { Wrapper } from "./FriendList.styled";
import { FriendListItem } from "./FriendListItem";

export const FriendList = ({ friends }) => {
    return (
        <Wrapper>
            {friends.map(friend => (
                <FriendListItem key={friend.id} friend = { friend }/>
            ))}
        </Wrapper>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};