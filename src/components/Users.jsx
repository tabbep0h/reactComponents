import React from 'react';
import uuid from 'react-uuid';
import User from './User';

function Users() {
  const initUsers = [
    { id: id(), name: 'Sanya', surname: 'Zekrin', age: 3 },
    { id: id(), name: 'Timur', surname: 'Zhirenkin', age: 2 },
  ];

  const [users, setUsers] = React.useState(initUsers);

  const result = users.map((user, index) => {
    return (
      <>
        <User
          key={index}
          id={user.id}
          name={user.name}
          surname={user.surname}
          age={user.age}
          ChangeItem={ChangeItem}
        />
        <button onClick={() => BanUser(index)}>Забанить</button> <br />
      </>
    );
  });

  function BanUser(index) {
    setUsers([...users.slice(0, index), ...users.slice(index + 1)]);
  }

  function ChangeItem(id, prop, event) {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          user[prop] = event.target.value;
        }
        return user;
      }),
    );
  }
  return <ul>{result}</ul>;

  function id() {
    return uuid();
  }
}
export default Users;