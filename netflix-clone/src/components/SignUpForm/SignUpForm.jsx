import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const SignUpForm = ({ changeForm }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    const { signUpHandler } = useAuth()


    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            await signUpHandler(email, password)
            navigate("/")
        } catch (error) {
            
            console.log(error)
        }


    }




    return (
        <div className='w-full h-full  flex items-center justify-center flex-col  '>
            <form onSubmit={submitHandler} className='p-16 min-h-[60%] w-full  md:w-[450px]  bg-black/60 rounded-lg '>
                <div className='text-4xl text-white block mb-6 '>
                    Sign Up
                </div>
                <div className='flex flex-col justify-center w-full gap-8 '>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='p-3 rounded-lg bg-gray-400/40  outline-none text-white' placeholder='Insert your Email'>
                    </input>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='p-3 rounded-lg bg-gray-400/40  outline-none text-white' placeholder='Password'>
                    </input>

                    <button type="submit" className='w-full bg-red-700 p-3 rounded-lg text-white text-lg  '>
                        Sign Up
                    </button>

                    <div className='mt-3 text-gray-400/80 '>
                        Already subscribe to Netflix ? <span className='text-white cursor-pointer font-semibold text-lg' onClick={() => { changeForm() }}>Sign In </span>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default SignUpForm