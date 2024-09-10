import React from 'react';
import image1 from '../../images/landing-page-1.png';
import image2 from '../../images/landing-page-2.png';
import image3 from '../../images/landing-page-3.png';
import { Grid } from '@mui/material';
import Button from '../../../Elements/Buttons/Button';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Welcome = () => {
  return (
    <div className="bg-gray-100 ">
      <div className='container mx-auto '>
        <Grid container columnSpacing={5} rowSpacing={5} className='p-5'>
          <Grid item xs={12} md={6} className='flex items-center'>
            <div >
              <h1 className='font-semibold '>Unleash your potential with a
                custom Portfolio</h1>
              <p>Transform your ideas and projects into  a stunning
                portfolio that showcase your creativity  and hard work
                with elegance </p>
              <div className='flex'>
                <Button type='get_started' text={"Getting Started"} icon={<FaLongArrowAltRight className='ml-3' />} />
                <Button type='transparent' text={"Explore Our Templates"} />
              </div>
            </div>

          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container columnSpacing={2}>
              <Grid item xs={6} className='flex items-center'>
                <div>
                  <img src={image1} alt="Portfolio Example 1" />
                  <img src={image2} alt="Portfolio Example 2" />
                </div>
              </Grid>
              <Grid item xs={6} className='flex items-center'>
                <img src={image3} alt="Portfolio Example 3" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Welcome;
