import { Navbar, Hero, Stats, Business, JobSeeker, Recruiter, Testimonials, Clients, Footer } from "./components"

const App = () => (
  <div className="bg-white w-full overflow-hidden">

    {/* ------------------------ Navbar ------------------------ */}
    <div className="sm:px-16 px-6 flex justify-center items-center">
      <div className="xl:max-w-[720px] w-full">
        <Navbar />
      </div>
    </div>

    {/* --------------------- Hero Section --------------------- */}
    <div className="bg-white flex justify-center items-start">
      <div className="xl:max-w-[1280px] w-full">
        <Hero />
      </div>
    </div>

    {/* -------------------- Other Sections -------------------- */}
    <div className="bg-white sm:px-16 px-6 flex justify-center items-start">
      <div className="xl:max-w-[1280px] w-full">
        <Stats />
        <Business />
        <JobSeeker />
        <Recruiter />
        <Testimonials />
        <Clients />
        <Footer />
      </div>
    </div>

  </div>
);

export default App