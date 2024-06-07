import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";
import './App.css'
import {User} from "./Type";
import {useState} from "react";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers([...users, user]);
  };

  return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <UserForm onSubmit={addUser}/>
          </div>
          <div className="col-md-6">
            <Users users={users}/>
          </div>
        </div>
      </div>
  )
};

export default App;
