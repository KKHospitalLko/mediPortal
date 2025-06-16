import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './AuthPage';
import NurseForm from './NursePages/NurseForm';
import StorePage from './MedPage/StorePage';
import ProtectedRoute from './lib/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route
          path="/nurse"
          element={
            <ProtectedRoute allowedRole="nurse">
              <NurseForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/store"
          element={
            <ProtectedRoute allowedRole="store">
              <StorePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
