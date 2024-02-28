import React from 'react'
import { Form, useActionData } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../api';

export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  try {
    const data = await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
        console.log(user)
      })
  } catch (err) {
    return err.message
  }
}

export default function Signin() {
  const errorMessage = useActionData()
  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {errorMessage && <div className='red'>{errorMessage}</div>}

      <Form
        method="post"
        className="login-form"
        replace
      >
        <input
          name="email"
          type="email"
          placeholder="Email address"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
        />
        <button
          disabled={navigation.state === "submitting"}
        >
          {navigation.state === "submitting"
            ? "Logging in..."
            : "Log in"
          }
        </button>
      </Form>
    </div>
  )
}

