
import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ForgotPassword from './components/ForgotPassword';
import RegisterPage from './pages/RegisterPage';
function App() {
  const [user, setUser] = useState(null);
  return (
    <>
<Router>
<Routes>
  <Route path="/" element={<LoginPage setUser={setUser}/>}/>
  <Route path="/forgot-password" element={<ForgotPassword/>}/>
  <Route path="/register-page" element={<RegisterPage/>}/>
</Routes>

</Router>


    </>
  )
}

export default App
