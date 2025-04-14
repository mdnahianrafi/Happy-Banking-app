
import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ForgotPassword from './components/ForgotPassword';
import RegisterPage from './pages/RegisterPage';
import RootLayout from './rootlayout/RootLayout';
function App() {
  const [user, setUser] = useState(null);
  return (
    <>
<div className="container mx-auto">

<div className="md:mt-[74px] mx-auto w-full h-screen md:w-[366px] md:h-[662px] md:border-[6px] md:border-black rounded-3xl bg-[#F4F8FB] drop-shadow-lg relative overflow-y-auto">
<Router>
<Routes>
<Route path="/" element={<RootLayout/>}>
  <Route path="/" element={<LoginPage setUser={setUser}/>}/>
  <Route path="/forgot-password" element={<ForgotPassword/>}/>
  <Route path="/register-page" element={<RegisterPage/>}/>
</Route>
</Routes>

</Router>
</div>
</div>


    </>
  )
}

export default App
