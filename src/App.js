import logo from './logo.svg';
import './App.css';
import Homepage from './component/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category from './component/Category';
import Header from './component/Header';
function App() {
  return (
    <>

      <Homepage />
      {/* <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path='/'><Homepage key='general' category="general" /></Route>
          <Route exact path='/business'><Homepage key='business' category="business" /></Route>
          <Route exact path='/sports'><Homepage key='sports' category="sports" /></Route>
          <Route exact path='/technology'><Homepage key='technology' category="technology" /></Route>
          <Route exact path='/science'><Homepage key='science' category="science" /></Route>
          <Route exact path='/entertainment'><Homepage key='entertainment' category="entertainment" /></Route>
        </Routes>
      </BrowserRouter> */}
      {/* <Homepage category="entertainment" /> */}
    </>
  )

}

export default App;
