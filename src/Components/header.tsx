import React from 'react';
import { IRoute } from './Router/interfaces';
import { Link } from 'react-router-dom';


interface NavObj {
  routes: IRoute[];  
}

const Header:React.FC<NavObj> = ({ routes }) => {
  console.log('Routes:', routes);  
  return (
    <nav>
        {routes.map((route) => (
          <Link to={route.path} className="text-black hover:underline" key={route.path}>
            {route.label}
          </Link>
        ))}
    </nav>
  );
};

export default Header;
