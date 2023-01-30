import "./styles.css"
import { Route, Routes } from 'react-router-dom';
import Cards from './components/Cards/Cards'
import CardDetail from './components/CardDetail/CardDetail'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Cards />} />   
        <Route path="/image/:imageName" element={<CardDetail />} />
      </Routes>
    </div>
  );
}
