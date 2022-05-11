import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'


import { authErrorHandler } from '../../utils/authError'

const LoginForm = ({ changeForm }) => {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()


  const { signInHandler } = useAuth()


  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      setError("")
      await signInHandler(email, password)
      navigate("/")
    } catch (error) {
      const message = authErrorHandler(error.code)
      setError(message)
    }
  }


  return (
    <div className='w-full h-full  flex items-center justify-center flex-col  '>
      <form onSubmit={submitHandler} className='p-16 min-h-[60%] w-full  md:w-[450px]  bg-black/60 rounded-lg '>
        <div className='text-4xl text-white block mb-6 '>
          Login
        </div>
        <div className='flex flex-col justify-center w-full gap-8 '>

          {
            error && <p className='bg-red-400 p-2 rounded-lg text-white'> {error} </p>
          }
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='p-3 rounded-lg bg-gray-400/40  outline-none text-white' placeholder='Insert your Email'>
          </input>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='p-3 rounded-lg bg-gray-400/40  outline-none text-white' placeholder='Password'>
          </input>

          <button type="submit" className='w-full bg-red-700 p-3 rounded-lg text-white text-lg  '>
            Login
          </button>

          <div className='mt-3 text-gray-400/80 '>
            Do you want register ? <span className='text-white font-semibold text-lg cursor-pointer' onClick={() => { changeForm() }}>Sign Up </span>
          </div>
        </div>

      </form>

    </div>
  )
}

export default LoginForm