import React from 'react';
import style from "./style.module.css"
import "../Styles/App.css"
import Header from '../Components/Layouts/Header/Header.tsx';

function App() {
  return (
    <div className={ style.App }>
      <Header></Header>
    </div>
  )
}

export default App;
