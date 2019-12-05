import React from 'react';
import NavBar from "./components/NavBar";
import { useAuth0 } from "./auth/react-auth0-spa";

const App: React.FC = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
    </div>
  );
}

export default App;
