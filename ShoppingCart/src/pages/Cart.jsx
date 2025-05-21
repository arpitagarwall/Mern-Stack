import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() =>{
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  },[cart])

  return (
    <div>
    {
      cart.length > 0 ? 
      (<div className="flex max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] gap-10">
        <div>
          {
            cart.map((item, index)=>{
              return <CartItem key={item.id} item={item} itemIndex={index}></CartItem>
            })
          }
        </div>

        <div className="flex flex-col justify-between">

          <div className="">
            <div className="text-green-700 font-bold">YOUR CART</div>
            <div className="text-green-700 font-bold text-5xl">SUMMARY</div>
            <p className="text-gray-700 font-semibold mt-2">Total Items:<span className="text-black font-semibold ml-1">{cart.length}</span></p>
          </div>

          <div className="sticky bottom-5">
            <p className="text-gray-700 font-semibold mb-2">Total amount:<span className="text-black font-semibold ml-1">${totalAmount.toFixed(2)}</span></p>
            <button className="bg-green-700 text-white font-bold px-5 py-1 w-[360px] rounded-md outline">Checkout Now</button>
          </div>
        </div>
      </div>) 
      : 
      (<div>
      <h1>Cart Empty</h1>
      <Link to={"/"}><button>Shop now</button></Link>
      </div>)
    }

    </div>
  );
};

export default Cart;
