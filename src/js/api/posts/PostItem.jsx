import React from "react";
import PropTypes from "prop-types";

// import placeholder from "../../img/placeholder.png";
// import cart from "../../img/cart.png";

function PostItem({ id, title, body }) {
  return (
    <div>
      <h2 className="post__title">{title}</h2>
      <p className="post__body">{body}</p>
      <p className="post__body">{id}</p>
    </div>
  );
}

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostItem;
