import PropTypes from "prop-types";
import { BlockStats, Quantity, StatsLabel } from "./ProfileStats.styled";

export const ProfileStats = ({followers, views, likes}) => {
    return (
        <BlockStats>
            <StatsLabel>
                <span>Followers</span>
                <Quantity>{followers}</Quantity>
            </StatsLabel>
            <StatsLabel>
                <span>Views</span>
                <Quantity>{views}</Quantity>
            </StatsLabel>
            <StatsLabel>
                <span>Likes</span>
                <Quantity>{likes}</Quantity>
            </StatsLabel>
        </BlockStats> 
    );
};


ProfileStats.propType = {
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};