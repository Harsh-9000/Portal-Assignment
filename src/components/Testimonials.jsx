import { testimonial } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className='sm:py-16 py-6 flex justify-center items-center flex-col relative'>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full pink2__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-gray-800 xs:leading-[76.8px] leading-[66.8px] w-full'>
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {testimonial.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials