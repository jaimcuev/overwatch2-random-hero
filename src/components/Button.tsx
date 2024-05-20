interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  kind: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, kind, ...props }) => {
  const buttonKind = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
  }

  return (
    <button 
      className={`${buttonKind[kind]} px-5 py-2 sm:px-10 sm:py-5 hover:opacity-80 rounded-sm uppercase`} 
      {...props}>
      {children}
    </button>
  )
}

export default Button;