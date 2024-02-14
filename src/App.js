import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from './components/Layout';
import Mens from './components/Mens';
import Womens from './components/Womens';
import BagsPacks from './components/BagsPacks';

function App() {


  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Layout />}> </Route>
        <Route path="/mens" element={<Mens />}> </Route>
        <Route path="/womens" element={<Womens />}> </Route>
        <Route path="/bags-packs" element={<BagsPacks />}> </Route>
      </Routes>

    </div>
  );
}

export default App;
