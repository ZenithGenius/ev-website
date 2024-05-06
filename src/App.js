import './App.css';
import Background from './components/Background/Background';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Rules from './components/Rules/Rules';
import StyledComponents from './components/StyledComponents/styled-components';

function App() {
  return (
    <div className='page'>
      <Background/>
      <NavBar/>
      <Hero/>
      <StyledComponents/>
      <Rules/>
    </div>
  );
}

export default App;
