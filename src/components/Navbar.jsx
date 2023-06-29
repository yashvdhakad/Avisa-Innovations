import logo from '../assets/svg/avisa.svg'

const Navbar = () => {
  return (
    <nav className='sticky top-0 flex flex-row justify-between items-center py-6 text-zinc-100 z-10'>
      <img className='w-28' src={logo} alt="" />
      <ul className='flex flex-row space-x-10'>
        <li><a href="">About</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Process</a></li>
        <li><a href="">Portfolio</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar