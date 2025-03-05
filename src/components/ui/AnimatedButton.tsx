interface AnimatedButtonProps {
  title: string;
}
const AnimatedButton = ({ title }: AnimatedButtonProps) => {
  return (
    <button className="rounded-md border-2 border-black bg-white px-5 py-1.5 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
      {title}
    </button>
  );
};

export default AnimatedButton;
