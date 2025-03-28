export const GradientTypo = ({ text }) => {
  return (
    <div className="text-lg font-bold bg-gradient-from-bl bg-gradient-to-tr from-[#000] via-[#4a1d16] to-[#833731] text-transparent bg-clip-text">
      {text}
    </div>
  );
};
