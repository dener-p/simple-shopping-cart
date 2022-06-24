import { useShoppingCart } from "../context/shoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  img: string;
};

export const StoreItem = ({ id, name, price, img }: StoreItemProps) => {
  const {
    getItenQuantity,
    increaseCartQuantity,
    removeFromCart,
    decreaseCartQuantity,
  } = useShoppingCart();
  const quantity = getItenQuantity(id);
  return (
    <div className="bg-slate-600 rounded h-full pb-4">
      <img
        src={img}
        alt={name}
        title={name}
        className="h-48  w-full object-cover "
      />
      <div>
        <div className="flex justify-between px-3 py-2 text-white font-bold">
          <span>{name}</span>
          <span className="font-normal text-slate-300">
            {formatCurrency(price)}
          </span>
        </div>
        <div className="mt-auto flex justify-center align-middle w-full   ">
          {quantity === 0 ? (
            <button
              onClick={() => increaseCartQuantity(id)}
              className="bg-blue-500 hover:bg-blue-700 transition-colors py-2 rounded text-white font-semibold w-full  "
            >
              Add To Cart
            </button>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex gap-2 align-middle justify-center ">
                <button
                  onClick={() => decreaseCartQuantity(id)}
                  className="flex items-center rounded justify-center bg-blue-500 w-8 h-8 hover:bg-blue-700 transition-colors"
                >
                  -
                </button>
                <div className="text-white">
                  <span className="font-semibold">{quantity} </span>
                  in cart
                </div>
                <button
                  onClick={() => increaseCartQuantity(id)}
                  className="flex items-center rounded justify-center bg-blue-500 w-8 h-8 hover:bg-blue-700 transition-colors"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(id)}
                className="bg-red-500 hover:bg-red-600 transition-colors w-min  text-white px-4 py-1 rounded"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
