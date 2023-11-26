import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
function App() {
  const title = "Welcome to Kuru's Blog";
  const likes = 50;
  const link = "https://www.google.com/";
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div> 
    </div>
  );
}

export default App;
