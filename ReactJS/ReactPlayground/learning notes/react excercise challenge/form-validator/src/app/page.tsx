import Image from 'next/image'
import Link from 'next/link'

"use client";
import {useState} from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState([])

  const findErrors = () => {
    const errors = []
    if(email === '') {
      errors.push('Email is required')
    }
    if(password === '') {
      errors.push('Password is required')
      
    }
    if(password.length<8){
      errors.push('Password must be at least 8 characters')
    }
    if(confirmPassword === '') {
      errors.push('Confirm Password is required')
    }

    if(confirmPassword !== password) {
      errors.push('Confirm Password is not same')
    }

    if ([...email].filter(i => i === "@").length !== 1){
      errors.push('Email must contain @')
    }
    
    setErrors(errors);
    console.log(errors)
    return errors.length === 0;
  }

  const formValidation = (e) => {
    e.preventDefault()
    findErrors()
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-stone-300">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h2 className='h2 py-2 uppercase font-extrabold'> Form Validator</h2>
        {/* put form here */}
        <form onSubmit = {formValidation}>
          <div className="mb-4">
          <input onChange = {e => setEmail(e.target.value)} type="email" name="email" placeholder="Enter your email" className='py-2 px-3 text-right rounded text-stone-900'/>
          </div>
          <div className="mb-4">
          <input onChange = {e => setPassword(e.target.value)} type="password" name="password" placeholder="Enter your password" className='py-2 px-3 text-right rounded text-stone-900' />
          </div>
          <div className="mb-4">
          <input onChange = {e => setConfirmPassword(e.target.value)} type="password" name="confirm-password" placeholder="Confirm Password" className='py-2 px-3 text-right rounded text-stone-900'/>
          </div>
          <button type="submit" className='py-2 px-4 bg-blue-400 hover:bg-blue-700 rounded focus:outline-none focus:shadow-outline'>Submit</button>
        </form>
        {
        errors && 
        <div className='text-amber-700 py-2 mx-0'>
          {errors}
        </div>
        
        }

        {/* make it beautiful using tailwind ;) */}
      </div>
    </main>
  )
}
