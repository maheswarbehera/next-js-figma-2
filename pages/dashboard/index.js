import MainLayout from '@/Layout/MainLayout'
import { useAuthContext } from '@/context/AuthContext'
import React from 'react'

const Index = () => {
const {user} = useAuthContext();
  
  return (
    <MainLayout>
          <div className="card shadow-2xl space-y-6 text-black bg-white py-10 px-12 w-1/2 m-auto rounded-md">
              <p className='text-2xl text-center font-bold '>{user && user.uid}</p>
             <p className='text-2xl text-center font-bold '> {user && user.email}</p>
          </div>
    </MainLayout>
  )
}

export default Index
