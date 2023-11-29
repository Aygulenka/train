import React, { useState, createContext } from 'react';
import ChildComponent from "./ChildComponent"

// Создаем контекст
export const UserContext = createContext();

// Компонент, использующий createContext
function ParentComponent() {
  const [userData, setUserData] = useState(null);

  const updateUserData = (newData) => {
    setUserData(newData);
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      <div>
        <h1>Главный компонент</h1>
        <button onClick={() => updateUserData(prompt('Введите ваше имя:'))}>
        Ввести имя
        </button>
        <ChildComponent />
      </div>
    </UserContext.Provider>
  );
}

export default ParentComponent;