import React from "react"
import {
  useLoaderData,
  useNavigation,
  Form,
  redirect,
  useActionData
} from "react-router-dom"
import { loginUser } from "../api"
import { auth } from "../api"
import { signInWithEmailAndPassword } from "firebase/auth";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  const pathname = new URL(request.url)
    .searchParams.get("redirectTo") || "/host"


  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    });
  return null
  // try {
  //   const data = await loginUser({ email, password })
  //   localStorage.setItem("loggedin", true)
  //   return redirect(pathname)
  // } catch (err) {
  //   return err.message
  // }
}

export default function Login() {
  const errorMessage = useActionData()
  const message = useLoaderData()
  const navigation = useNavigation()

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      {errorMessage && <h3 className="red">{errorMessage}</h3>}

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
