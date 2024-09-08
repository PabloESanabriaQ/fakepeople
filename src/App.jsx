import { useState } from 'react'
import './App.css'
import ViewContext from './hooks/ViewContext'
import Main from './components/Main';

function App() {

  const [id, setId] = useState(-1);

  function handleSelectedId(id){
    setId(id);
  }

  return (
    <ViewContext.Provider value={{ id, handleSelectedId }}>
      <Main />
    </ViewContext.Provider>
  )
}

export default App
