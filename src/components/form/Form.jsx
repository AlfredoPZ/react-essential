import React from 'react'
import './form.css'

export const Form = () => {

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: '',
        confirmPwd: ''
    });
    const [error, setError] = React.useState({
        name: '',
        email: '',
        password: '',
        confirmPwd: ''
    });

    const validateForm = (formData) => {
        const newError = {};
    
        if(formData.name.trim() === '') {
            newError.name = 'Name is required';
        }
    
        if(formData.email.trim() === '') {
            newError.email = 'Email is required';
        }
    
        if(!formData.email.includes('@')) {
            newError.email = 'Email is invalid';
        }
    
        if(formData.password.trim() === '') {
            newError.password = 'Password is required';
        }
        
        if(formData.password.length < 6) {
            newError.password = 'Password must be at least 6 characters';
        }
    
        if(formData.confirmPwd.trim() === '') {
            newError.confirmPwd = 'Confirm Password is required';
        }
    
        if(formData.password !== formData.confirmPwd) {
            newError.confirmPwd = 'Passwords do not match';
        }
    
        return newError;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newError = validateForm(formData);
    
        if(Object.keys(newError).length > 0) {
            setError(newError);
        } else {
            console.log('Form Submitted ' + JSON.stringify(formData));
        }
    };

    const handleData = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});

        setError((prev) => {
            return {
                ...prev,
                [name]: ''
            }
        });
    }

    return (
        <div className='formContainer'>
            <h1 className='title'>Create a free account</h1>
            <p className='subtitle'>Your smart assitant for everyday tasks.</p>

            <section className='social'>
                <button className='googleBtn'>Sign up with Google</button>
                <button className='appleBtn'>Sign up with Apple</button>
            </section>

            <p className='divider'>OR</p>

            <form className='form' >
                <legend>Sign up with email</legend>

                <div>
                    <label htmlFor="name">Name*</label>
                    <input 
                        name='name' 
                        type='text' 
                        placeholder='Name' 
                        value={formData.name}  
                        onChange={handleData}
                    />
                    {error.name && <p className='error'>{error.name} *</p>}
                </div>

                <div>
                    <label htmlFor='email'>Email*</label>
                    <input 
                        name='email' 
                        type='email' 
                        placeholder='Email'  
                        value={formData.email}
                        onChange={handleData}
                    />
                    {error.email && <p className='error'>{error.email} *</p>}
                </div>
                
                <div>
                    <label htmlFor='password' >Password*</label>
                    <input 
                        name='password' 
                        type='password' 
                        placeholder='Password' 
                        value={formData.password}
                        onChange={handleData}
                    />
                    {error.password && <p className='error'>{error.password} *</p>}
                </div>
                
                <div>
                    <label htmlFor='confirmPwd' >Confirm Password*</label>
                    <input 
                        name='confirmPwd' 
                        type='password' 
                        placeholder='Confirm Password' 
                        value={formData.confirmPwd}
                        onChange={handleData}
                    />
                    {error.confirmPwd && <p className='error'>{error.confirmPwd} *</p>}
                </div>

                <button className='signupBtn' onClick={handleSubmit}>Sign up</button>
            </form>

            <p>Already have an account? <a href='https://htmlreference.io/forms/'>Log in</a></p>
        </div>
    )
}
