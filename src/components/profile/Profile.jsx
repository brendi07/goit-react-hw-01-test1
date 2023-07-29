import {
  ProfileCard,
  UserDescr,
  Image,
  Name,
  Tag,
  Location,
  Stats,
  StatsEl,
  Label,
  Quantity,
} from "./Profile.styled";
import PropTypes from "prop-types";

export default function Profile({ username, tag, location, avatar, stats }) {
    return (
      <>
        <ProfileCard>
          <UserDescr>
            <Image src={avatar} alt="User avatar" width={300} />
            <Name>{username}</Name>
            <Tag>{tag}</Tag>
            <Location>{location}</Location>
          </UserDescr>

          <Stats>
            <StatsEl>
              <Label>Followers</Label>
              <Quantity>{stats.followers}</Quantity>
            </StatsEl>
            <StatsEl>
              <Label>Views</Label>
              <Quantity>{stats.views}</Quantity>
            </StatsEl>
            <StatsEl>
              <Label>Likes</Label>
              <Quantity>{stats.likes}</Quantity>
            </StatsEl>
          </Stats>
        </ProfileCard>
      </>
    );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

