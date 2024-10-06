import React, { useState } from 'react';
import ScrollIntoView from 'react-scroll-into-view'
import Button from '../../elements/Button';
import CustomModal from '../../elements/CustomModel';
import PersonalInfoSection from '../../elements/PersonalInfo';
import EducationSection from '../../elements/Education';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modelOpen, setModelOpen] = useState(false)
  const [personalInfo, setPersnalInfo] = useState({})
  const [educations, setEducations] = useState([])

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  console.log("Personal information ", personalInfo)
  return (
    <nav className="bg-white sticky border-gray-200 top-0 z-50 shadow-sm">
      <CustomModal
        open={modelOpen}
        title={"Pro User functionality"}
        setOpen={setModelOpen}
      >
        <div className='px-2'>
          <div className='min-h-[100px] flex items-center'>
            <p>For Pro users only</p>
          </div>
          <div className='flex w-full pb-2 gap-x-3 items-center justify-between'>
            <Button variant='fill' text={'Switch To Pro'} />
            <Button text={'On Close'} />
          </div>
        </div>
        {/* <div className='w-[70vh] md:w-[100vh] outline-none'>
          <PersonalInfoSection
            personalInfo={personalInfo}
            setPersonalInfo={setPersnalInfo}
          />
          <EducationSection
            educations={educations}
            setEducations={setEducations}
          />
        </div> */}
      </CustomModal>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            SpotFolio
          </span>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? 'block' : 'hidden'
            } absolute top-full left-0 w-full md:block md:relative md:top-0 md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:mt-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:border-0 md:bg-white">
            <li>
              <ScrollIntoView selector="#welcome" className='cursor-pointer'>
                <p
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                  aria-current="page"
                >
                  Home
                </p>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector="#templates" className='cursor-pointer'>
                <p
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Templates
                </p>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector="#about" className='cursor-pointer'>
                <p
                  className="block py-2 px-3 text-gray-900 cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  About
                </p>
              </ScrollIntoView>
            </li>
            {/* <li>
              <ScrollIntoView selector="#pricing" className='cursor-pointer'>
                <p
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Pricing
                </p>
              </ScrollIntoView>
            </li> */}
            {/* <li>
              <ScrollIntoView selector="#contact" className='cursor-pointer'>
                <p
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Contact
                </p>
              </ScrollIntoView>
            </li> */}
          </ul>
        </div>
        {/* <ScrollIntoView selector='#contact' className='cursor-pointer hidden md:visible'>
          <Button text={'Get In Touch'} variant='fill' />
        </ScrollIntoView> */}
      </div>
    </nav>
  );
};

export default Navbar;
