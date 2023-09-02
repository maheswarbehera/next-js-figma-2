import AuthLayout from '@/Layout/AuthLayout'
import { auth } from '@/firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const Register = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const router = useRouter();

    const HandleOnSubmit =async()=>{
        if(email!=='' || password !==''){

  
        try {
              const user = await createUserWithEmailAndPassword(auth,email,password);
                console.log("user",user)
              router.push("/dashboard");
        } catch (error) {
                    console.log(error.message);
        }
    }else{
        alert("All feilds are required");
    }
    }


  return (
    <>


<AuthLayout>
    <div>
       <div className="w-25 mx-auto py-5">
        <div className='signup_card'>
        <h1 className='signup-title'>Register</h1>

          <form className="text-start">
            <div className="mb-3">
                <input type="email" className="input-border form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email/Username'/>
            </div>
            <div className="mb-3">
                <input type="password" className="input-border form-control" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/>
            </div>
            
            <button onClick={HandleOnSubmit} className="btn btn-primary w-100 mb-2 submit">Submit &rarr;</button>
                <button  className="btn google btn-primary w-100 gap-2 d-flex justify-content-center">
                  Continue With Google &rarr;
                </button>
            <Link className="nav-link active text-center py-2" aria-current="page" href={'/login'}>Already Have An Account ?<strong> Sign In</strong> &rarr;</Link>
            <p className="tc"> By continuing, you agree to our Terms of Service and Privacy Policy </p>
            <p className="support">Unable to Login? We are here - imeet.mathura@gmail.com</p>
        </form>
      </div>
      </div>
    </div>
    </AuthLayout>
    </>
  )
}

export default Register