import { cn } from '@/utils/tailwind-merge.until';

export const GradientTypo = ({ text, className }) => {
  return (
    <p
      className={cn(
        'bg-gradient-from-bl bg-gradient-to-tr from-[#000] via-[#4a1d16] to-[#833731] text-transparent bg-clip-text',
        className
      )}
    >
      {text}
    </p>
  );
};
