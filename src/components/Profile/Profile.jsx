import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css['profile-info']}>
        <img
          src={image}
          className={css.avatar}
          alt="User avatar"
        />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.title}>Followers</span>
          <span className={css.value}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.title}>Views</span>
          <span className={css.value}>{stats.views}</span>
        </li>
        <li>
          <span className={css.title}>Likes</span>
          <span className={css.value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
