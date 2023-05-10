import { ConnectWallet } from "@thirdweb-dev/react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import CreateChitForm from "./components/CreateChitForm";
import About from "./components/About";
import Feed from "./components/Feed";
import Analytics from "./components/Analytics";
import ChitDetails from "./components/ChitDetails";

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/create" element={<CreateChitForm/>} />
          <Route path="/chit/:id" element={<ChitDetails/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/feed" element={<Feed/>} />
          <Route path="/analytics" element={<Analytics/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
