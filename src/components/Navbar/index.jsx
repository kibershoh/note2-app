import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='shadow-lg py-3 mb-5 flex justify-between px-5'>
      <nav>
        <Link className='text-xl font-bold'><span className='text-violet-600'>My</span>Notes</Link>
      </nav>
      <div>
        <button className='bg-violet-600 rounded text-white font-semibold text-lg px-1'>
        Login
        </button>
      </div>
    </div>
  )
}

export default Navbar
