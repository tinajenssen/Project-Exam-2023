// Reactions.jsx
import React from "react";
import Container from "react-bootstrap/Container";

function Reactions({ post }) {
  return (
    <Container className="reactions mt-2">
      <h5>Reactions</h5>
      <Container className="justify-content reaction py-2">
        {post.reactions &&
          post.reactions.map((reaction, index) => (
            <div key={index}>
              <Container className="reaction__group">
                <div className="reaction__symbol">{reaction.symbol}</div>
                <div className="reaction__count">{reaction.count}</div>
              </Container>
            </div>
          ))}
      </Container>
    </Container>
  );
}

export default Reactions;
