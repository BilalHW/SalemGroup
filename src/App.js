import Login from './login/Login';
import './App.css';
import Dashboard from './board/dashboard';
import Navbar from './data/Navbar';

function App() {
  let Component;
  switch(window.location.pathname){
    case "/":
      Component=Login
      break
    case "/dashboard":
      Component=Dashboard
      break
  }
  return (
      <>
        <Navbar />
        <Component />
      </>
      


      
  )
}

export default App;
