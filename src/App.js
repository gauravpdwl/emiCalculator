
import './App.css';
import Navbar from './Navbar';
import About from './pages/about';
import Home from './pages/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const router=createBrowserRouter([
    {path:"/", element:<Navbar/>, children:[
      {index:true, element:<Home/>},
      {path:"about", element:<About/>}
    ]}
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
