import Image from "next/image"
import Link from "next/link"
import { FiMenu} from "react-icons/fi"

const Navbar = () => {
  return (
    <div className='w-full h-20 lg:h-28 border-b-[1px] border-gray-300 text-black bg-transparent'>
      <div className='max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between'>
       <Link href="/" className='text-3xl uppercase font-bold cursor-pointer'>
        <Image 
          src='/cognito.svg'
          alt="logo"
          width={180}
          height={180}
        />
        </Link>
       <ul className='hidden lg:inline-flex gap-8 items-center uppercase font-semibold p-2 text-xl'>
        <Link href="/"><li  className='navbarLi'>Home</li></Link>
        <Link href="/services"><li className='navbarLi'>Services</li></Link>
        <Link href="/work"><li className='navbarLi'>Work</li></Link>
        <Link href="/contact-us"><li className='navbarLi'>Contact Us</li></Link>
       </ul>
       <div className="hidden lg:inline-flex items-center">
        <button className='w-40 h-14 bg-[#0077B6] text-white uppercase text-md font-semibold rounded-md hover:bg-[#660708]'>
          <Link href="/contact-us">
          Get in Touch
          </Link>
          </button>
       </div>
       {/* Mobile Menu */}
       <div className="inline-flex lg:hidden">
        <FiMenu className="text-4xl "/>
       </div>
      </div>
      </div>
  )
}

export default Navbar