import Nav from './components/Nav';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import AppRoutes from './routes/AppRoutes';
import '@fortawesome/fontawesome-svg-core/styles.css';



function App() {
  return (
    <div className='App'>
      <Router>
          <Nav/>
          <AppRoutes/>
      </Router>
    </div>
  );
}

export default App;
