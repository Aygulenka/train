import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Text from './Text';
import Example from './Example';
import Rout from './Rout'
import PrimerClass from './PrimerClass';
import PrimerUseEffect from './PrimerUseEffect'
import ParentComponent from './ParentComponent';
import PureExampleComponent from './PureComponent'
import Memo from './Memo'

function App() {
  return (
    <div>
      {/* Добавим навигацию с использованием компонента Link */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/text">Text</Link>
          </li>
          <li>
            <Link to="/example">Example</Link>
          </li>
          <li>
            <Link to="/rout">LifeCycle</Link>
          </li>
          <li>
            <Link to="/PrimerClass">PrimerClass</Link>
          </li>
          <li>
            <Link to="/PrimerUseEffect">PrimerUseEffect</Link>
          </li>
          <li>
            <Link to="/parent">Parent</Link>
          </li>
          <li>
            <Link to="/PureExampleComponent">Pure</Link>
          </li>
          <li>
            <Link to="/Memo">React.memo и useMemo</Link>
          </li>
        </ul>
      </nav>

      {/* Добавим маршруты для компонентов */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/text" element={<Text />} />
        <Route path="/example" element={<Example />} />
        <Route path="/rout" element={<Rout/>} />
        <Route path = "/PrimerClass" element={<PrimerClass/>}/>
        <Route path = "/PrimerUseEffect" element= {<PrimerUseEffect/>}/>
        <Route path="/parent" element={<ParentComponent />} />
        <Route path = '/PureExampleComponent' element={<PureExampleComponent/>}/>
      <Route path= '/Memo' element = {<Memo/>}/>
      </Routes>
    </div>
  );
}

export default App;