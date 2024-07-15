import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Homepage from './Components/Homepage.js';
import SignIn from './Admin_Components/SignIn.js';
import { useEffect } from 'react';
import axios from "axios"
import {loadingStarts, loadingSucess, loadingFails, setPortfolioData} from "./Redux/root/rootSlice.js"
import {useDispatch, useSelector} from "react-redux"
import Update from './Admin_Components/Update.js';

function App() {
  const dispatch = useDispatch();
  const {loading} = useSelector((state) => state.root)

  useEffect(()=>{
    const fetchData = async () => {
      dispatch(loadingStarts());
      try {
        const res = await axios.get('https://portfolio-server-git-main-anjay29s-projects.vercel.app/api/v1/get-portfolio-data')
        // console.log(res.data);
        dispatch(setPortfolioData(res.data))
        dispatch(loadingSucess());
      } catch (error) {
        dispatch(loadingFails());
        console.log(error);
      }
    }
    fetchData();
    // eslint-disable-next-line
  },[])

  return (
    <Router>
      <Routes>
        {loading ? "Loading..." : <Route path="/" element={<Homepage />}/>}
        <Route path="/admin-sign-in" element={<SignIn/>} />
        <Route path="/update" element={<Update/>} />
      </Routes>
    </Router>
  );
}

export default App;
