import { hire3 } from '../assets';

const JobSeeker = () => (
  <section id='product' className='flex md:flex-row flex-col-reverse sm:py-16 py-6'>
    <div className='flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative'>
      <img src={hire3} alt='hire' className='w-[100%] h-[100%] relative z-[5]' />

      <div className='absolute z-[3] -left-1/2 top-0 w-[150%] h-[150%] rounded-full brown__gradient' />
      <div className='absolute z-[3] -left-1/2 top-0 w-[100%] h-[100%] rounded-full pink__gradient' />
    </div>

    <div className='flex-1 flex justify-center items-start flex-col'>
      <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-gray-800 xs:leading-[76.8px] leading-[66.8px] w-full'>
        Why job seekers <br className='sm:block hidden' />
        love us
      </h2>

      <p className='font-poppins font-normal text-gray-500 text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tincidunt ex, ut laoreet leo.
        Vivamus euismod condimentum justo, ac mollis ipsum hendrerit nec.
      </p>
    </div>
  </section>
)

export default JobSeeker