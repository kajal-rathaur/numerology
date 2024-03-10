import './App.css';
import RoutingPage from './Routes/RoutingPage';
import Container from '@mui/material/Container';
function App() {
  return (
    <div className='App'>
      <Container maxWidth="lg" style={{ paddingTop: "10vh", paddingBottom: "10vh" }}>
        <RoutingPage />
      </Container>
    </div>
  );
}

export default App;
