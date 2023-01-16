






export default function Button({children, className, hoverable = true, variant = "purple", ...rest}) {
  
  const variants = {
     purple: `text-white bg-indigo-600 ${hoverable && "hover:bg-indigo-700"}`,
     green: `text-green-700 bg-green-200 ${hoverable && "hover:bg-green-220"}`,
     red: `text-red-700 bg-red-200 ${hoverable && "hover:bg-red-220"}`
  }
  
    return (
      <button
        {...rest}
        className={`disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 border rounded-md text-base font-medium ${className} ${variants[variant]}`}>
        {children}
      </button>
    )
  }