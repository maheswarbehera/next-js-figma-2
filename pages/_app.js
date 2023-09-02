import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { AuthProvider } from '@/context/AuthContext'
import '@/styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@/styles/maheswar.module.css'
export default function App({ Component, pageProps }) {
  return <>
  <AuthProvider>
      <div className="">
        <Nav logo='iMeet' nav='Home'/>
        
      <div className="min-h-screen">
      <Component {...pageProps} />

      </div>
      <Footer />
      </div>
      </AuthProvider>
  </>
}
