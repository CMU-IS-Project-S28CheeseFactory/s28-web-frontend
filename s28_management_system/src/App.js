// import React from 'react'
// import {Button} from 'antd'
import {useRoutes} from 'react-router-dom'
import routes from './routes'

function App() {

  const element=useRoutes(routes)
  console.log(element)

  return (
      <div className="app">
        {element}
      </div>
  );
}

export default App;
