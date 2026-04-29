import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import Customers from "./Pages/Customers";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <div>
        <div id="app-container" className="bg-gray-100 min-h-screen flex">
          <div id="layout-wrapper" className="flex flex-row flex-1">
            <Sidebar />
            <div id="main-content" className="flex-1 p-4">
              <Header />
              <Routes>
                <Route path="*"  element={<NotFound/>} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/customers" element={<Customers />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      , );
    </>
  );
}

export default App;
