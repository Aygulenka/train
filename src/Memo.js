import React, {useState} from 'react';
import UserList from './UserList'

const Memo = () =>{
    const [users, setUsers] = useState([
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Jane', age: 30 },
        { id: 3, name: 'Doe', age: 22 },
      ]);
      return (
        <div>
          <h1>User List</h1>
          <UserList users={users} />
        </div>
      );
}
export default Memo;