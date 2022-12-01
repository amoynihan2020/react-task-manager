import React from 'react'
import ListOfItems from './components/ListOfItems';

function App() {
 
  const title = 'Things I gotta Do'
  return (
    <>
    <div className='todolist'>
     <h1>{title.toUpperCase()}</h1>
    <div className="container">
  
      <div className="row">
    
    <ListOfItems/>
    </div>
    </div>
    </div>
    </>
  );
}

export default App;