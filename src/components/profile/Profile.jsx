import { ProfileCard } from "components/ProfileCard/ProfileCard";
import { ProfileStats } from "components/ProfileStats/ProfileStats";
import { Wrapper } from "./Profile.styled";

export const Profile = ({ userProfile: {avatar, username, tag, location, stats: {followers, views, likes}} }) => {
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