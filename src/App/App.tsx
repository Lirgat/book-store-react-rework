import React from 'react';
import style from "./style.module.css"
import "../Styles/App.css"
import Header from '../Components/Layouts/Header/Header.tsx';
import Main from '../Components/Layouts/Main/Main.tsx';

function App() {
  return (
    <div className={ style.App }>
      <Header></Header>
      <Main></Main>
    </div>
  )
}

export default App;
