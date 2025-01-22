import { useNavigate } from "react-router-dom";
import Search from "./search";


const Header = () => {
  const navigate = useNavigate();

  const onClickMenus = (routeUrl) => {
    navigate(routeUrl);
  }

  return (
    <div className="w-100 px-6 py-4 flex justify-between items-center bg-white shadow-lg sticky top-0 z-10">
      <h5 className="font-bold text-xl mb-0">Gadgets reselling app</h5>
      <Search />
      <div>
        <div className="flex gap-8 appearances-none cursor-pointer">
          <div className="hover:text-amber-600" onClick={() => onClickMenus("/")}>Home</div>
          <div className="hover:text-amber-600" onClick={() => onClickMenus("/sell")}>Sell</div>
          <div className="hover:text-amber-600" onClick={() => onClickMenus("/chat")}>Chat</div>
          <div className="hover:text-amber-600" onClick={() => onClickMenus("/account")}>Account</div>
        </div>
      </div>
    </div>
  )
}

export default Header;
