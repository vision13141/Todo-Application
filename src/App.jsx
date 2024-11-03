import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Loging from './Component/Loging'
import SingUp from './Component/SingUp'
import Todo from './Component/Todo';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Loging />} />
        <Route path="/singUp" element={<SingUp />} />
        <Route path="/loging" element={<Loging />} />
        <Route path="/todo" element={<Todo />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App