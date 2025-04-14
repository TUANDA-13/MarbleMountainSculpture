export const Button = ({ type, onClick, children, className }) => {
  return (
    <button
      type={type}
      className={`gradient text-white h-10 font-bold cursor-pointer px-4 py-2 rounded-md w-full ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
