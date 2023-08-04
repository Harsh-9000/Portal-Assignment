import { hire } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
  <section id='home' className='flex md:flex-row flex-col sm:py-16 py-6'>

    <div className='flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6'>

      <div className='flex flex-row justify-between items-center w-full'>

        <h1 className='flex-1 font-poppins font-semibold ss:text-[62px] text-[42px] text-gray-800 ss:leading-[100px] leading-75px'>
          Connecting Talent with<br className='sm:block hidden' /> {" "}
          <span className='text-gradient'>Opportunities,</span> {" "}
        </h1>

        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>

      </div>

      <h1 className='font-poppins font-semibold ss:text-[58px] text-[42px] text-gray-800 ss:leading-[100px] leading-75px w-full'>
        Your Path to Success!
      </h1>

      <p className='font-poppins font-normal text-gray-500 text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tincidunt ex, ut laoreet leo.
        Vivamus euismod condimentum justo, ac mollis ipsum hendrerit nec.
      </p>
    </div>

    <div className='fle-1 flex md:my-0 my-10 relative flex justify-center items-center'>
      <img src={hire} alt='billing' className='w-[100%] h-[100%] relative z-[5]' />

      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 pink2__gradient' />
    </div>

    <div className='ss:hidden flex justify-center items-center'>
      <GetStarted />
    </div>
  </section>
)

export default Hero