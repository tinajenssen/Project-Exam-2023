import { setRegisterFormListener } from "../handlers/register";
import { setLoginFormListener } from "./handlers/login";

if (path === "/") {
  setRegisterFormListener();
} else if (path === "/login") {
  setLoginFormListener();
}

// har ikke noe form til createPost enda. tester derfor koden her
/*
import { createPost } from "./api/posts/Create";

createPost({
  title: "Example Post",
  body: "also an example"
})
*/

// test av update
/*
import { updatePost } from "./api/posts/Update";
updatePost({
  id: 00,
  title: "Example Post UPDATED",
  body: "also an example UPDATED"
})
*/

// test av remove
/*
import { removePost } from "./api/posts/Delete";
updatePost(00)
*/

/*

import * as post from ".api/posts/index.jsx";

post.createPost()
post.updatePost()
post.removePost()
post.getPost()
post.getPosts()

*/

/*
post.getPosts().then(console.log)
*/

/*
post.getPosts(640).then(console.log)
*/
