export const Input = ({ type, name, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      className="w-full p-4 text-sm text-gray-900 border outline-none border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-black"
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
};
