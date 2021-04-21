const Logo = ({ className = '', ...props }) => (
  <img
    width="32"
    height="32"
    className={className}
    src="/icon.png"
    {...props}
  />
)

export default Logo
