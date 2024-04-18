import './App.css';
import Background from './components/Background/Background';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import StyledComponents from './components/StyledComponents/styled-components';

function App() {
  return (
    <div>
      <Background/>
      <NavBar/>
      <Hero/>
      <StyledComponents/>
    </div>
  );
}

export default App;
