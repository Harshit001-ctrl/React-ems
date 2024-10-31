import React, { useState } from "react";

const login = ({handleLogin}) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const SubmitHandler=(e)=>{
    e.preventDefault()
    handleLogin(email,password)
    setEmail('')
    setPassword('')
        
    }
  return (

    <div className="flex h-screen w-screen p-2 justify-center items-center">
      <div className="border   rounded-md border-white center p-5 ">
        <form onSubmit={SubmitHandler} className="flex flex-col items-center justify-center">
          <input
          value={email}
           id="email-input"
          onChange={(e)=>{setEmail(e.target.value)}}
            required
            type="email"
            name="password"
            className="border-2 rounded-2xl text-xl outline-none m-4 p-2 text-black placeholder:text-black  border-emerald-600 "
            placeholder="email"
          />

          <input
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
            required
            type="password"
            name="password"
            id="password-input"
            className="border-2 rounded-2xl text-xl outline-none m-4 p-2   text-black placeholder:text-black border-emerald-600  "
            placeholder="password"
          />
          <button
            type="submit"
            className="bg-white hover:bg-blue-500 text-rose-400 font-bold mt-5 py-2 px-4 rounded-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default login;
