const Tag = ({ children }) => {
  return (
    <div className="px-4 py-2 bg-amber-600 text-white rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 transform hover:bg-amber-500 hover:scale-105">
      {children}
    </div>
  );
};

export default Tag;
