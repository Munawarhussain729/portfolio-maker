import React from 'react';
import image1 from '../../images/landing-page-1.png';
import image2 from '../../images/landing-page-2.png';
import image3 from '../../images/landing-page-3.png';
import ScrollIntoView from 'react-scroll-into-view'
import Button from '../../elements/Button';

const Welcome = () => {
  return (
    <div id='welcome' className="bg-gray-100 py-20 px-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-x-3 md:grid-cols-2   items-center justify-between">
        <div className="w-full ">
          <h2 className="text-3xl font-bold mb-6">Unleash your potential with a custom Portfolio</h2>
          <p className="mb-6">
            Transform your ideas and projects into a stunning portfolio that showcases your creativity
            and hard work with elegance.
          </p>
          <div className="flex w-full flex-col justify-start md:flex-row items-start ">
          <ScrollIntoView selector="#templates" className='cursor-pointer w-full mr-2 md:w-auto'>
            <Button
              text='Get Started'
              variant='fill'
              className='w-full my-1 '
            />
          </ScrollIntoView>
          <ScrollIntoView selector="#templates" className='cursor-pointer w-full md:w-auto'>
            <Button
              text='Explore Templates'
              variant='default'
              className='w-full my-1'
            />
          </ScrollIntoView>
          </div>
        </div>

        <div className="w-full h-full mt-5 md:h-[400px] md:mt-0 grid grid-cols-1 md:grid-cols-2  gap-x-2 gap-y-2 md:gap-y-0 ">
          <div>
            <img
              src={image1}
              alt="Portfolio Example 1"
              className="rounded-lg "
            />
            <img
              src={image2}
              alt="Portfolio Example 2"
              className="rounded-lg mt-2 "
            />
          </div>
          <div>
            <img
              src={image3}
              alt="Portfolio Example 3"
              className="rounded-lg w-full max-h-[400px]"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Welcome;
