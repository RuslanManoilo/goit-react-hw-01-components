export const FriendListItem = ({ friend: {id, avatar, name, isOnline} }) => {
    return (
        <li key={id}>
            <span>{isOnline}</span>
            <img src={avatar} alt={name} />
            <p>{name}</p>
        </li>
    );
};