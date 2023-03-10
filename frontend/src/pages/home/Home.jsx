import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured type='movie' />
    </div>
  )
}

export default Home
