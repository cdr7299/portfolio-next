import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  overrideBgColor?: string;
  overrideBorderColor?: string;
  overrideFontColor?: string;
  textBeforeIcon?: string;
};

function Buttons({
  className,
  children,
  overrideBgColor = "",
  overrideBorderColor = "",
  overrideFontColor = "",
  textBeforeIcon = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      style={{
        borderColor: overrideBorderColor,
        color: overrideFontColor,
      }}
      className={`${className} group relative inline-flex  max-h-[40px] items-center justify-center overflow-hidden rounded-full border-2 border-purple-500/80  px-8 py-6 text-base font-medium text-indigo-600 shadow-md transition duration-300 ease-out md:h-[50px] md:text-lg ${overrideBorderColor} ${overrideFontColor}`}
    >
      <span
        style={{
          backgroundColor: overrideBgColor,
        }}
        className={`ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-purple-500/80 text-white duration-300 group-hover:translate-x-0`}
      >
        {textBeforeIcon && <span className="mr-2">{textBeforeIcon}</span>}
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span
        style={{
          color: overrideFontColor,
        }}
        className={`ease absolute flex h-full w-full transform items-center justify-center text-purple-500/80 transition-all duration-300 group-hover:translate-x-full`}
      >
        {children}
      </span>
      <span className="invisible relative "> {children}</span>
    </button>
  );
}

export default Buttons;
