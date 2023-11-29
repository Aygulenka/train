import React, { useState, useMemo } from 'react';

// Компонент для отображения одного пользователя
const User = React.memo(({ user }) => {
  console.log(`Rendering User ${user.name}`);
  return (
    <div>
      {user.name}, {user.age} years old
    </div>
  );
});

// Компонент для отображения суммарного возраста всех пользователей
const UserList = ({ users }) => {
  console.log('Rendering UserList');

  // Используем useMemo для мемоизации суммарного возраста
  const totalAge = useMemo(() => {
    console.log('Calculating total age');
   return users.reduce((sum, user) => sum + user.age, 0);
  }, [users]);

  return (
    <div>
      <h2>Total Age: {totalAge}</h2>
      {users.map(user => (
        // Используем React.memo для мемоизации отдельного пользователя
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;