import { useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import Sidebar from "./component/Sidebar";
import Overview from "./pages/Overview";
import Analytics from "./pages/Analytics";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={`dashboard ${theme}`}>
      <Sidebar />

      <main className="Main_content">
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/overview" replace />}
          />
          <Route path="/overview" element={<Overview  searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}/>} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/customers" element={<Customers  searchTerm={searchTerm}
          setSearchTerm={setSearchTerm} />} />
          <Route path="/settings" element={<Settings  theme={theme} setTheme={setTheme}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
