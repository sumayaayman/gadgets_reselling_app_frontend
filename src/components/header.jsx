import { useNavigate } from "react-router-dom";
import Search from "./search";


const Header = () => {
  const navigate = useNavigate();

  const onClickMenus = (routeUrl) => {
    navigate(routeUrl);
  }

  return (
    <div className="bg-white w-100 px-6 py-4 flex justify-between items-center shadow-lg sticky top-0 z-10">
      <h5 className="font-bold text-xl mb-0">Gadgets reselling app</h5>
      <Search />
      <div>
        <div className="flex gap-8 appearances-none cursor-pointer">
          <div className="hover:text-indigo-600 cursor-pointer" onClick={() => onClickMenus("/")}>Home</div>
          <div className="hover:text-indigo-600 cursor-pointer" onClick={() => onClickMenus("/sell")}>Sell</div>
          <div className="hover:text-indigo-600 cursor-pointer" onClick={() => onClickMenus("/chat")}>Chat</div>
          <div className="hover:text-indigo-600 cursor-pointer" onClick={() => onClickMenus("/account")}>Account</div>
        </div>
      </div>
    </div>
  )
}

export default Header;
