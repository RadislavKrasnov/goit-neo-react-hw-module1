import css from './FriendListItem.module.css'
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.content}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css['friend-name']}>{name}</p>
      <p className={clsx('status', { [css.online]: isOnline, [css.offline]: !isOnline })}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
