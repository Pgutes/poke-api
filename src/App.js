import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import AppRoutes from './routes/AppRoutes';
function App() {
  return (
    <div className="App">
        <Router>
          <Nav />
          <AppRoutes />
        </Router>
      <Footer />
    </div>
  );
}

export default App;
