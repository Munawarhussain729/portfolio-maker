import React, { useEffect, useState } from 'react';
import Toggle from '../../Components/Toggle/Toggle';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setIsMenuOpen(true)
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <nav className="bg-white border-gray-200 ">
            <div className="w-full flex flex-wrap items-center justify-between p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">Munawar Hussain</span>
                </a>
                <button
                    onClick={handleMenuToggle}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
                </button>
                <div
                    className={`${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        } transition-all duration-500 ease-in-out overflow-hidden w-full md:block md:w-auto`}
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                        <Link spy={true} to='Navbar' smooth={true} activeClass='text-orange-500'>
                            <li className='hover:text-orange-500'>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                            <li className='hover:text-orange-500'>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true}>
                            <li className='hover:text-orange-500'>Experience</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true}>
                            <li className='hover:text-orange-500'>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Testimonials' smooth={true}>
                            <li className='hover:text-orange-500'>Testimonials</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
