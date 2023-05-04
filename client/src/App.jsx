import { ConnectWallet } from "@thirdweb-dev/react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Chit from "./components/Chit";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/chit/:id" element={<Chit/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
