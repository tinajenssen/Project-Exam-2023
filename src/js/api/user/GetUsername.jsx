import React, { useState, useEffect } from "react";
function getUsername() {
  const [username, setUsername] = useState("");
  function greetUser() {
    console.log(`${username}`);
  }
  return { setUsername, greetUser };
}

function UsersName() {
  const [greetUser, setUsername] = getUsername();
  useEffect(() => {
    setUsername("{post.author.name}");
    greetUser();
  }, [setUsername, greetUser]);

  return <div>ex</div>;
}
export default UsersName;

// Authorization: `Bearer ${token}`,
