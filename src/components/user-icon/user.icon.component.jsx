import { useState } from "react";
import { Link } from "react-router-dom";

const UserIcon = ({ showMenu, user, photoSize }) => {
  const [validImage, setValidImage] = useState(true);
  const imageError = () => setValidImage(false);

  const photoStyle = {
    width: photoSize,
    height: "auto",
    borderRadius: "50%",
  };

  return (
    <Link to className="link user-account" onClick={showMenu}>
      {!user.photoURL || !validImage ? (
        <p>{user.displayName[0]}</p>
      ) : (
        <img
          style={photoStyle}
          onError={imageError}
          src={user.photoURL}
          alt="user"
          referrerPolicy="no-referrer"
        />
      )}
    </Link>
  );
};

export default UserIcon;
