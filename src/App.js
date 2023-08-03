import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SafetyBar from './components/SafetyBar';
import ISI from './components/ISI';
import { ModalProvider } from './context/modal/ModalContext';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
    return (
        <ModalProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                <ISI />
                <Footer />
                <SafetyBar hideOffset={40} targetId='isi' />
            </Router>
        </ModalProvider>
    );
}

export default App;
