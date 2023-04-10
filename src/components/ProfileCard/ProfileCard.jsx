import { Avatar, Location, Name, Tag, Wrapper } from "./ProfileCard.styled";

export const ProfileCard = ({avatar, username, tag, location}) => {
    return (
        <Wrapper>
            <Avatar
                src={avatar}
                alt="User avatar"
            />
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Wrapper> 
    );
};