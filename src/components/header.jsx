import Button from "./button";

const Header = () => {
  return (
    <div className="w-100 bg-primary text-white p-4 d-flex justify-content-between align-items-center">
      <h4 className="mb-0">Gadgets reselling app</h4>
      <div>
        <Button type="light">Login</Button>
      </div>
    </div>
  )
}

export default Header;
