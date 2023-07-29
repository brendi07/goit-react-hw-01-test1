import FriendListItem from "./FriendListItem";
import { FriendCardList } from "./FriendsList.styled";
import PropTypes from "prop-types";

export default function FriendList({ friends }) {
  return (
    <>
      <FriendCardList>
        {friends.map((friend) => (
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
friends: PropTypes.array,
};

