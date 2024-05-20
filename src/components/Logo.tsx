import logo from "../assets/images/logo.png"

const Logo: React.FC = () => {
  return (
    <img 
      src={logo} 
      alt="Overwatch 2" 
      className="h-8 w-auto" />
  )
}

export default Logo