import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from './Test';
import Manubar from './components/Shared/Manubar/Manubar';
import Products from './components/Products/Products';
import { useEffect, useState } from 'react';

function App() {

  const [count, setCount] = useState(0)
  const setCartCount = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <div>
        <Manubar count={count}></Manubar>
      </div>

      <div>
        <Products setCartCount={setCartCount}></Products>
      </div>

    </div>
  );
}

export default App;
