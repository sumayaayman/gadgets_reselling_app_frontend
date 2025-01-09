
const Header = () => {
  return (
    <div className="w-100 p-6 flex justify-between items-center bg-white shadow-lg sticky top-0 z-10">
      <h5 className="font-bold text-xl mb-0">Gadgets reselling app</h5>
      <div>
        <div className="flex gap-8 appearances-none cursor-pointer">
          <div className="hover:text-amber-600">Home</div>
          <div className="hover:text-amber-600">Sell</div>
          <div className="hover:text-amber-600">Buy</div>
          <div className="hover:text-amber-600">Account</div>
        </div>
      </div>
    </div>
  )
}

export default Header;
