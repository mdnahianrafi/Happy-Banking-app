import { useState } from "react";
import LoginForm from "../components/LoginForm";

export default function LoginPage({ setUser }) {
 

  return (
    <div className="container mx-auto">
<LoginForm setUser={setUser}/>
    </div>
  );
}
