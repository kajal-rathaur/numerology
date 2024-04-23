import './App.css';
import RoutingPage from './Routes/RoutingPage';
import Container from '@mui/material/Container';
import NavbarPage from './components/Navbar';
import bg from "./utils/images/bg6.png"
function App() {
  return (
    <div className='App' style={{
      height: '100%', backgroundColor: '#171836', backgroundImage: `url(${bg})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <Container maxWidth="lg" style={{ paddingBottom: "10vh" }}>
        <NavbarPage />
        <RoutingPage />
      </Container>
    </div>
  );
}

export default App;
