import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <div className="App">
              <Layout />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
