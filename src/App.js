
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Main from './Component/Main/Main';
import Register from './Component/Register/Register';
import Login from './LogIn/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>, children:[
        {
          path:"/", element: <Home></Home>
        },
        {
          path:"login", element: <Login></Login>
        },
        {
          path:"register", element: <Register></Register>
        }
      ]
    },
  ]);
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
