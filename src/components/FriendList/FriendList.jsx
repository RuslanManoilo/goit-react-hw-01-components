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