import { steps } from '../constants';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== steps.length - 1 ? "mb-6" : "mb-0"} feature-card`}>

    <div className='w-[64px] h-[64px] rounded-full flex justify-center items-center bg-pink-100'>
      <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain' />
    </div>

    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-gray-800 text-[18px] leading=[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-gray-500 text-[16px] leading=[24px] mb-1'>
        {content}
      </p>
    </div>

  </div>
)

const Business = () => {
  return (
    <section id='features' className='flex md:flex-row flex-col sm:py-16 py-6'>

      <div className='flex-1 flex justify-center items-start flex-col'>
        <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-gray-800 xs:leading-[76.8px] leading-[66.8px] w-full'>
          HOW <br className='sm:block hidden' />
          IT WORKS
        </h2>

        <p className='font-poppins font-normal text-gray-500 text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tincidunt ex, ut laoreet leo.
          Vivamus euismod condimentum justo, ac mollis ipsum hendrerit nec.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className='flex-1 flex-col flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative'>
        {steps.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>

    </section>
  )
}

export default Business