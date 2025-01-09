import Drone from "../assets/drone.jpeg";

const Product = ({ url, name, price, description, location, datePosted }) => {
  return (
    <div className="border rounded min-w-[10rem] max-w-[15rem] shadow-sm overflow-hidden">
      <div>
        <img className="w-full" src={Drone} alt="product-image" />
      </div>
      <div className="p-4">
        <h5 className="text-lg font-semibold">&#8377;{price}</h5>
        <p className="text-slate-600 py-1">{name}</p>
        <p className="text-slate-600 text-sm">{description}</p>
        <div className="text-slate-600 text-xs flex justify-between items-center py-2">
          <p>{location}</p>
          <p>{datePosted}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
