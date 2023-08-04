import PropTypes from 'prop-types';

import FriendListItem from '../friend_item/FriendListItem';

import { FriendCardList } from './FriendsList.styled';

export default function FriendList({ friends }) {
  return (
    <>
      <FriendCardList>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </FriendCardList>
    </>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
