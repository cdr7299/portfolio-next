export default function Footer() {
  return (
    <div className="absolute w-full border-t border-gray-100 py-5 text-center dark:border-gray-700">
      <p className="font-bold text-gray-500">
        Made with NextJS 13
        <a
          className="font-medium text-gray-800 underline transition-colors"
          href="https://twitter.com/steventey"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </p>
    </div>
  );
}
