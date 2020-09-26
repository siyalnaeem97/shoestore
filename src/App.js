import React from "react";
import { AppRoute } from "./components/AppRoute.route";
import { Navbar } from "./components/Navbar.component";

function App() {
  return (
    <div>
      <Navbar />
      <AppRoute />
    </div>
  );
}

export default App;
