import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import LandingPage from './Views/LandingPage';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from 'react-router-dom';
import Sparkview from './SparkView/Sparkview';
import FormView from './Views/FormView';

import Login from './Components/Login/Login';
import FooterSection from './Components/Footer/FooterSection';
import Futer from './Components/Footer/FooterSection';
import Home from './Components/SignupSignin/Home';

import UserContext, { UserContexts, useAuth } from './utils/UserContext';
import ComingSoon from './ComingSoon';
import GridExample from './Components/Grids/GridTest';
import TestComponents from './TestComponents';
function App() {
  return (
    <>
      <div className="sticky top-0 z-10">
        <NavigationBar />
      </div>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/home" element={<LandingPage />} /> */}
            <Route path="/home" element={<LandingPage />} />
            <Route path="/Reporting" element={<FormView />} />
            {/* <Route path="/Spark" element={<Sparkview />} /> */}
            <Route path="/Login" element={<Home />} />
            <Route path="/aboutus" element={<ComingSoon />} />
            <Route path="/events" element={<ComingSoon />} />
            <Route path="/Dashboard" element={<GridExample />} />
            <Route path="/TestExtension" element={<TestComponents />} />
          </Routes>
        </Router>
      </main>
      {/* <footer className="">
        <Futer />
      </footer> */}
    </>
  );
}

export default App;
