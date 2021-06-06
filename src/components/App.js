import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import {Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadImg} from "../redux/actions";
import '../main.css'


function App() {
    const dispatch = useDispatch();

    useEffect(() =>{
      dispatch(loadImg())
    },[])

  return (
      <Route path='/:id?'>
          <div>
              <Header/>
              <Main/>
              <Footer/>
          </div>
      </Route>

  );
}

export default App;
