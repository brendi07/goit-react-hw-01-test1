import { Item, Online, Ofline, Avatar, Name } from "./FriendListItem.styled";
import PropTypes from "prop-types";

export default function FriendListItem({id, avatar, name, isOnline}) {
    return (
      <>
        <Item>
          {isOnline ? (<Online></Online>)
            : (<Ofline></Ofline>)}
          <Avatar src={avatar} alt="User avatar" width="100" />
          <Name>{name}</Name>
        </Item>
      </>
    );
}

FriendListItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};