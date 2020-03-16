import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./Landing";
import Header from "./Header";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
// import Signout from "./auth/Signout";
import CreateTask from "./tasks/CreateTask";
import EditTask from "./tasks/EditTask";
// import DeleteTask from "./tasks/DeleteTask";
import TaskList from "./tasks/TaskList";
import UserProfile from "./user/UserProfile";
import EditUserProfile from "./user/EditUserProfile";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={Landing} />
          <Route path="/auth/signin" exact component={Signin} />
          <Route path="/auth/signup" exact component={Signup} />
          <Route path="/tasks/list" exact component={TaskList} />
          <Route path="/tasks/create" exact component={CreateTask} />
          <Route path="/tasks/edit" exact component={EditTask} />
          <Route path="/user/profile" exact component={UserProfile} />
          <Route path="/user/edit" exact component={EditUserProfile} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
