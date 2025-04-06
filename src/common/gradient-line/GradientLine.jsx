import { cn } from '@/utils/tailwind-merge.until';

export const GradientLine = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        `w-24 h-[3px] mt-2 bg-gradient-to-tr from-[#000] via-[#4a1d16] to-[#833731] rounded-full ${className}`
      )}
      {...props}
    />
  );
};
