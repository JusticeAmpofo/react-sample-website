import Header from './components/Header';
import Footer from './components/Footer';
import SafetyBar from './components/SafetyBar';
import ISI from './components/ISI';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Home />
      <ISI />
      <Footer />
      <SafetyBar hideOffset={40} targetId="isi" />
    </>
  );
}

export default App;
