import { HTMLAttributes, PropsWithChildren } from "react";

const ButtonRotatingBackgroundGradient = ({
  className,
  children = "",
}: PropsWithChildren & {
  className?: HTMLAttributes<HTMLButtonElement> | undefined;
}) => {
  return (
    <button className="cta inline-flex h-14 overflow-hidden rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-800 text-gray-300 px-8 py-6 text-md font-extrabold backdrop-blur-3xl">
        {children}
      </span>
    </button>
  );
};

export default ButtonRotatingBackgroundGradient;
