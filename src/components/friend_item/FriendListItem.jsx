import PropTypes from "prop-types";

import { Item, Online, Ofline, Avatar, Name } from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline}) {
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
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};