import PropTypes from "prop-types";
import { ProfileCard } from "components/ProfileCard/ProfileCard";
import { ProfileStats } from "components/ProfileStats/ProfileStats";
import { Wrapper } from "./Profile.styled";

export const UserProfile = ({ userProfile: {avatar, username, tag, location, stats: {followers, views, likes}} }) => {
    return (
        <Wrapper>
            <ProfileCard 
                avatar = {avatar} 
                username = {username} 
                tag = {tag} 
                location = {location}
            />            
            <ProfileStats 
                followers = {followers} 
                views = {views} 
                likes = {likes}
            />
        </Wrapper>
    );
};


UserProfile.propTypes = {
    userProfile: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        })
    }),
};