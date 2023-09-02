
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Hero from '@/components/Hero'
import College from '@/components/College'
import Trending from '@/components/Trending'

export default function Home() {
  return (
    <main>
      <div className="container">
        <Hero />
        <College />
        <Trending />
      </div>
    </main>
  )
}
