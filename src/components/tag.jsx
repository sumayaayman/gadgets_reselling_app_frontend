const Tag = ({ children }) => {
  return (
    <div className="px-4 py-2 text-primary rounded-full text-sm border border-primary-600 cursor-pointer">
      {children}
    </div>
  );
};

export default Tag;
