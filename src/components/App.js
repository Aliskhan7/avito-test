import Header from "./Header";
import Footer from "./Footer";
import {Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {loadImg} from "../redux/actions";
import '../main.css'
import Modal from "./Modal";
import Images from "./Images";


function App() {
    const dispatch = useDispatch();

    useEffect(() =>{
      dispatch(loadImg())
    },[])

  return (
          <div>
              <div className="container">
                  <Header/>
                  <Images/>
                  <Footer/>
              </div>
              <Route path="/modal/:id?">
                  <Modal/>
              </Route>
          </div>

  );
}

export default App;
