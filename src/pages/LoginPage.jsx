import { useState } from "react";
import LoginForm from "../components/LoginForm";

export default function LoginPage({ setUser }) {
 

  return (
    <div className="">
<LoginForm setUser={setUser}/>
    </div>
  );
}
