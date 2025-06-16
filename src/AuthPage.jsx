import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

function AuthPage() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    const role = login(password);
    if (role === 'nurse') {
      navigate('/nurse');
    } else if (role === 'store') {
      navigate('/store');
    } else {
      alert('Invalid password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl mb-6 text-green-600">Login</h1>
      <input
        type="password"
        placeholder="Enter password"
        className="border p-2 mb-4 w-64 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
      >
        Login
      </button>
    </div>
  );
}

export default AuthPage;
