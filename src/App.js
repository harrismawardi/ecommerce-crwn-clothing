import './App.css';
import Home from "./routes/home/home";
import Shop from './routes/shop/shop'
import Navigation from './routes/navigation/navigation'
import SignIn from "./routes/sign-in/sign-in";
import {Routes, Route } from 'react-router-dom';
import SignOut from "./routes/sign-out/sign-out";
import {useState} from "react";

function App() {

  const [signedIn, setSignedIn] = useState('false')

  return (
    <Routes>
      <Route path='/' element={<Navigation signedIn={signedIn}/>}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn setSignedIn={setSignedIn}/>} />
        <Route path='sign-out' element={<SignOut setSignedIn={setSignedIn}/>} />
      </Route>
    </Routes>
);
}

export default App;
