import './App.css';
import RoutingPage from './Routes/RoutingPage';
import Container from '@mui/material/Container';
import NavbarPage from './components/Navbar';
function App() {
  return (
    <div className='App' style={{ height: '100%' }}>
    {/* <div className='App' style={{ height: '100vh', backgroundColor: '#cbc8dd', }}> */}
      {/* <Container maxWidth="lg"> */}
      <Container maxWidth="lg" style={{ paddingBottom: "10vh" }}>
        <NavbarPage />
        <RoutingPage />
      </Container>
    </div>
  );
}

export default App;
