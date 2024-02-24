import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Home from './components/Home'
import CategoryBookList from './components/CategoryBookList';
// @ts-ignore
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import './App.css'


function App() {
  return (

      <Router basename={"SonaBookstoreReact"}>
              <AppHeader/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/categories" element={<CategoryBookList/>}/>
                  <Route path="*" element={<div>Page Not Found</div>}/>
              </Routes>
              <AppFooter/>
      </Router>

)
    ;
}

export default App;

