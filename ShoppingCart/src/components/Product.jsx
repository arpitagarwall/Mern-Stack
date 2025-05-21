import { useDispatch, useSelector } from "react-redux";
import {add, remove} from "../redux/Slices/CartSlice";
import {toast} from "react-hot-toast";

const Product = ({item}) => {

  const {cart} = useSelector((state) => state);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Item added to cart");
  }

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed");
  }

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in
    hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] gap-3 p-4 mt-10 ml-5 rounded-xl outline outline-white shadow-xl">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={item.image} className="h-full w-full"></img>
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${item.price}</p>
        </div>
        <button>
          {
            cart.some((p) => p.id === item.id) ? 
            (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
            text-[12px] p-1 px-3 hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={removeFromCart}>REMOVE ITEM</button>) 
            : 
            (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
            text-[12px] p-1 px-3 hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={addToCart}>ADD TO CART</button>)
          }
        </button>
      </div>
      
    </div>
  );
};

export default Product;
