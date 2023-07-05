import Image from 'next/image'
import logo from '@/app/assets/img/logo.png'
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className='py-4 flex justify-between items-center'>
            <Image
                src={logo}
                width={150}
                alt='Avisa Innovations'
            />
            <ul className='flex space-x-10'>
                <li><Link href='/pages/about'>About</Link></li>
                <li><Link href='/pages/contact'>Contact</Link></li>
                <li><Link href='/pages/login'>Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav