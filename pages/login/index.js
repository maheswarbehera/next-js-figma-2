import AuthLayout from '@/Layout/AuthLayout'
import { auth } from '@/firebase/config';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const Login = () => {
  const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const router = useRouter();

    const HandleOnSubmit =async()=>{
        if(email!=='' || password !==''){

  
        try {
              const user = await signInWithEmailAndPassword(auth,email,password);
                console.log("user",user)
              router.push("/dashboard");
        } catch (error) {
                    console.log(error.message);
        }
    }else{
        alert("All feilds are required");
    }
    }
    const LoginWithGoogle = async () => {
      const Provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, Provider);
        router.push("/dashboard");
      } catch (error) {
        console.log(`error: ${error.message}`)
      }
    }

  return (
    <>

<AuthLayout>
<div className="w-25 mx-auto py-5">
    <div className='login_card'>
      <h1 className='login-title'>Login</h1>
      <form className="text-start">
        <div className="mb-3">
          <input type="email" className="input-border form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email/Username' />
        </div>
        <div className="mb-3">
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input-border form-control" placeholder='Enter Password' />
        </div>
        <button onClick={HandleOnSubmit} className="btn btn-primary w-100 mb-2 submit">Submit &rarr;</button>
        <button onClick={LoginWithGoogle}  className="btn google btn-primary w-100 gap-2 d-flex justify-content-center">
          Continue With Google &rarr;
        </button>
        <Link className="nav-link active text-center py-3" aria-current="page" href={'/signup'}>Don’t Have An Account ? <strong>Sign Up</strong> &rarr;</Link>

        <p className='forgot'>Forget Password</p>
      </form>
    </div>
  </div>     
</AuthLayout>
</>

  )
}

export default Login