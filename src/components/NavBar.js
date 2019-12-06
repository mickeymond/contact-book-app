import React from "react";
import { useAuth0 } from "../auth/react-auth0-spa";

import { PageHeader, Button } from 'antd/es';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <PageHeader
        ghost={false}
        title="Contact Book App"
        extra={[
          !isAuthenticated && (
            <Button key="1" type="primary" onClick={() => loginWithRedirect({})}>Log in</Button>
          ),
          isAuthenticated && <Button key="2" type="danger" onClick={() => logout()}>Log out</Button>,
        ]}
        avatar={{src: 'img/contact.png'}}
      >
      </PageHeader>
    </div>
  );
};

export default NavBar;