import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import {add, remove} from "../redux/Slices/CartSlice";
import {toast} from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed")
  }
  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <div className="h-[180px]">
          <img src={item.image} className="h-full w-full"></img>
        </div>
        <div className="flex flex-col space-y-2 space-x-10 -mt-10">
          <p className="text-gray-700 font-semibold text-lg ml-10 max-w-[360px]">{item.title}</p>
          <p className="max-w-[320px] text-sm ml-10">{item.description.split(" ").slice(0,15).join(" ") + "..."}</p>
          <div className="flex justify-between">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div onClick={removeFromCart} className="flex rounded-full bg-red-300 h-8 w-8 justify-center items-center cursor-pointer">
              <FcDeleteDatabase></FcDeleteDatabase>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-black mt-6"></div>
    </div>
  );
};

export default CartItem;
