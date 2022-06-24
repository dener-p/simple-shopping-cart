import { useShoppingCart } from "../context/shoppingCartContext"
import storeItems from "../data/itens.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
  id: number
  quantity: number
}

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find((i) => i.id === id)

  if (item == null) return null

  return (
    <div className="flex w-full justify-between gap-4">
      <div className="flex gap-4 ">
        <img
          src={item.img}
          alt={item.name}
          title={item.name}
          className="object-cover max-w-xs"
        />
        <div className="flex items-start justify-center flex-col h-full">
          <span className="text-white font-bold">
            {item.name} x {quantity}
          </span>
          <span className="text-slate-300">{formatCurrency(item.price)}</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <span className="text-white font-bold">
          {formatCurrency(item.price * quantity)}
        </span>
        <button
          onClick={() => removeFromCart(id)}
          className="border-solid border-2 grid place-content-center border-red-500 h-8 w-8"
        >
          X
        </button>
      </div>
    </div>
  )
}
