import { useLocation, useNavigate } from "react-router";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, match }) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => navigate(`${location.pathname}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title"> {title.toUpperCase()} </h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
