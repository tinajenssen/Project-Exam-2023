import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CreateNewPost from "../../js/api/user/CreatePost";
import EditPost from "../../js/api/user/EditPost";
import DeletePost from "../../js/api/user/DeletePost";

function PostTabs() {
  return (
    <Tabs defaultActiveKey="create" id="post" className="mt-4">
      <Tab eventKey="create" title="New post">
        <CreateNewPost />
      </Tab>
      <Tab eventKey="edit" title="Edit post">
        <EditPost />
      </Tab>
      <Tab eventKey="delete" title="Delete post">
        <DeletePost />
      </Tab>
    </Tabs>
  );
}

export default PostTabs;
