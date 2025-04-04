const Tag = ({ children, id, name, onClick, selected }) => {
  return (
    <div onClick={() => onClick({ id, name })} className={`px-4 py-2 text-primary rounded-full text-sm border border-primary-600 cursor-pointer ${selected && 'bg-primary-600 text-white'}`}>
      {children}
    </div>
  );
};

export default Tag;
