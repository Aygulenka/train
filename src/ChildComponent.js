import React, {useContext, useRef} from 'react';
import { UserContext } from './ParentComponent';

 //Компонент, использующий useContext и Ref
 function ChildComponent() {
    const { userData, updateUserData } = useContext(UserContext);
    const inputRef = useRef(null);
  
    const handleButtonClick = () => {
      const newName = prompt('Введите новое имя:');
      updateUserData({ name: newName });
    };
  
    const handleFocusInput = () => {
      inputRef.current.focus();
    };
  
    return (
      <div>
        {userData ? (
          <>
            <h2>Привет, {userData.name}!</h2>
            <button onClick={handleButtonClick}>Обновить имя</button>
            <br />
            <input ref={inputRef} type="text" placeholder="Фокус на меня" />
            <button onClick={handleFocusInput}>Установить фокус</button>
          </>
        ) : (
          <p>Пожалуйста, введите ваше имя.</p>
        )}
      </div>
    );
  }

  export default ChildComponent;