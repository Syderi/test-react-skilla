import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
