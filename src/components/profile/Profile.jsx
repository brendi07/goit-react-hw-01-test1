import PropTypes from 'prop-types';

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
} from './Profile.styled';

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
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
