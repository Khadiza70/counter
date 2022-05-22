import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Pricing from './views/Pricing';

function App() {
  return (
    <div>
      <div className='container'>
        <Header />
        <Pricing />
      </div>      
    </div>
  );
}

export default App;
