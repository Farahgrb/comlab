import "./online.css";

export default function Online({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="lbarFriend">
      <div className="lbarProfileImgContainer">
        <img className="lbarProfileImg" src={PF+user.profilePicture} alt="" />
        <span className="lbarOnline"></span>
      </div>
      <span className="lbarUsername">{user.username}</span>
    </li>
  );
}