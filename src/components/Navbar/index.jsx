import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='shadow-lg py-3 mb-5 flex justify-between px-5'>
      <nav>
        <Link className='text-xl font-bold'><span className='text-violet-600'>My</span>Notes</Link>
      </nav>
     
    </div>
  )
}

export default Navbar
