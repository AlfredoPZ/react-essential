import React from 'react'
import './form.css'

export const Form = () => {
    return (
        <div className='formContainer'>
            <h1 className='title'>Create a free account</h1>
            <p className='subtitle'>Your smart assitant for everyday tasks.</p>

            <section className='social'>
                <button className='googleBtn'>Sign up with Google</button>
                <button className='appleBtn'>Sign up with Apple</button>
            </section>

            <p className='divider'>OR</p>

            <form className='form'>
                <legend>Sign up with email</legend>

                <div>
                    <label for="name">Name*</label>
                    <input name='name' type='text' placeholder='Name' />
                </div>

                <div>
                    <label for='email'>Email*</label>
                    <input name='email' type='email' placeholder='Email' />
                </div>
                
                <div>
                    <label for='password'>Password*</label>
                    <input name='password' type='password' placeholder='Password' />
                </div>
                
                <div>
                    <label for='confirmPwd' >Confirm Password*</label>
                    <input name='confirmPwd' type='password' placeholder='Confirm Password' />
                </div>
                
                <button className='signupBtn'>Sign up</button>
            </form>

            <p>Already have an account? <a href='#'>Log in</a></p>
        </div>
    )
}
