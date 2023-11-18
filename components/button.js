// Button.js
export default function Button({ children, color, onClick }) {
  return (
    <button onClick={onClick} className={`px-6  py-3 rounded-[13px] border justify-center  items-center gap-2 flex  transition-all whitespace-nowrap duration-200 ease-in-out ${color === 'orange' ? 'bg-orange-600 hover:bg-orange-700 border-white' : 'bg-white hover:bg-gray-100 border-orange-600'} text-${color === 'orange' ? 'white' : 'black'} text-base font-normal font-['Poppins'] leading-normal hover:transform hover:scale-110`}>
      {children}
    </button>
  );
}
