import React from 'react';;

function User({ id, name, surname, age, ChangeItem }) {
const [Edit, setEdit] = React.useState(false);
  return (
    <>
      {Edit ? (
        <p>
          Имя:
          <input type="text" value={name} onChange={(event) => ChangeItem(id, 'name', event)} />
          Фамилия:
          <input
            type="text"
            value={surname}
            onChange={(event) => ChangeItem(id, 'surname', event)}
          />
          Возраст:{' '}
          <input type="number" value={age} onChange={(event) => ChangeItem(id, 'age', event)} />
          <button onClick={() => setEdit(false)}>Сохранить</button>
        </p>
      ) : (
        <span onClick={() => setEdit(true)}>
          {name} {surname} {age}
        </span>
      )}
    </>
  );
}
export default User;
