const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-4 px-6 bg-pink-gradient font-poppins font-medium text-[18px] text-white outline-none rounded-[10px] ${styles}`}>
      Get Started
    </button>
  )
}

export default Button