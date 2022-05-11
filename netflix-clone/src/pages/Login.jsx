import React, { useState } from 'react'
import { LoginForm, SignUpForm } from '../components'
import backgroundNetflix from "../assets/background.png"

const Login = () => {

    const [formLogin, setFormLogin] = useState(true)


    const changeFormHandler = () => {
        setFormLogin(!formLogin)
    }

    return (
        <React.Fragment>
            <div className=' w-screen  h-screen relative '>
                <img src={backgroundNetflix} alt="background-netflix" className="absolute top-0 left-0      object-cover w-full h-full" />
                <div className='absolute top-0 left-0 bg-black/30 w-full h-full'>
                    {formLogin ? <LoginForm changeForm={changeFormHandler} /> : <SignUpForm changeForm={changeFormHandler} />}
                </div>

            </div>

        </React.Fragment>
    )
}

export default Login