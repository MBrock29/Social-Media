
import './App.css';
import { UserContextProvider } from './Contexts/User';
import Home from './Pages/Home/Index';

function App() {
  return (
    <UserContextProvider>
    <div className="App">
      <Home />
    </div>
    </UserContextProvider>
  );
}

export default App;
