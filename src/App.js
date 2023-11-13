import RoutesPrincial from "../src/router/index"
import './App.css';
import {AuthProvider} from "./contexts/Auth"

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RoutesPrincial></RoutesPrincial>        
      </AuthProvider>

    </div>
  );
}

export default App;
