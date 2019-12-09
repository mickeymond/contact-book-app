import React from "react";
import { useAuth0 } from "../auth/react-auth0-spa";

import { PageHeader, Button } from 'antd/es';
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <PageHeader
        ghost={false}
        title={<Link to="/">Contact Book App</Link>}
        extra={[
          !isAuthenticated && (
            <Button key="1" type="primary" onClick={() => loginWithRedirect({})}>Log in</Button>
          ),
          isAuthenticated && <Button key="2" type="danger" onClick={() => {
            localStorage.clear();
            logout();
          }}>Log out</Button>,
        ]}
        avatar={{src: 'img/contact.png'}}
      >
      </PageHeader>
    </div>
  );
};

export default NavBar;