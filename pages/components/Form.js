import React, { useRef } from 'react'
import Link from 'next/link'
const Form = ({signin,submitted,error}) => {

  const emailRef=useRef()
const passwordRef=useRef()

  const formSubmit=(e)=>{
    e.preventDefault()
    const email=emailRef.current.value;
    const password=passwordRef.current.value;
    submitted(email,password)

    emailRef.current.value='';
    passwordRef.current.value='';

  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {signin ? "SignIn " : "SignUp "}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={formSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email 
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  ref={emailRef}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2 focus:ring-sky-600 focus-visible:outline-sky-600  sm:text-sm sm:leading-6"
                />
              </div>
            <div>{error==='user already exit'&& <p className='text-red-500'>{error}</p>}</div>
            <div>{error==='user not found'&& <p className='text-red-500'>{error}</p>}</div>

            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  ref={passwordRef}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2 focus:ring-sky-600 focus-visible:outline-sky-600 sm:text-sm sm:leading-6"
                />
              </div>
            <div>{error==='wrong password'&& <p className='text-red-500'>{error}</p>}</div>
              
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
              
                <Link
                  href={signin ? "/account/signup" : "/account/login"}
                  className="font-semibold text-sky-600  hover:text-sky-500"
                >
        
                  {signin
                    ? "Do not have an account? Signup"
                    : "Already have an account? Sign in"}
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"

                className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 "
              >
                {signin ? "Sign in" : "Sign up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form
