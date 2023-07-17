import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SliderDashboadr from './SliderNevigate/SliderDashboard';
import SliderOne from './SliderOne';
import SliderTwo from './SliderNevigate/SliderTwo';
import SliderThree from './SliderNevigate/SliderThree';

 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  }, {
    path: "slideNevigate",
    element: <SliderDashboadr />,
    children: [
      {
        path: "contacts/1",
        element: <SliderOne />,
      }, {
        path: "contacts/2",
        element: <SliderTwo />,
      },
      {
        path: "contacts/3",
        element: <SliderThree />,
      },
      
    ],
    
    
  },
]);
  

 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

