import { useAuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const MainLayout = ({children}) => {
    const {user} = useAuthContext();
    const router = useRouter();
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
            if(user === null){
                router.replace("/login");
            }else{
                setLoading(false);
            }
    },[router,user])

        if(loading){
            return <div>loading...</div>
        }

  return (
    <div>{children}</div>
  )
}

export default MainLayout