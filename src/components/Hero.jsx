import React from 'react'
import styles from '../style';
import {discount, robot} from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt='discount' className='w-[32px] h-[32px]'/>
          <p className= {`${styles.paragraph} ml-2`}>
            <span className='text-white'>20%</span> Discount For {" "}
            <span className='text-white'>1 Month</span> Acount
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] text-gradient-purple'>
            Imagine <br className='sm:block hidden ' /> {" "}
            <span className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>With</span> {" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted/>
          </div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full text-gradient-purple'>
          Serandipity
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Discover a vibrant community of creators on Serendipity! Connect with thousands of like-minded individuals on Discord or the web and 
        unleash your imagination through collaborative storytelling. From vivid worlds to unforgettable characters, bring your short text 
        descriptions to life in new and exciting ways. Join Serendipity today and embark on a journey of endless creativity!
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src="src/assets/hand.png" alt='billing' className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient animate-gradient'></div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40 animate-gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient animate-gradient" />
</div>


      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )


export default Hero
