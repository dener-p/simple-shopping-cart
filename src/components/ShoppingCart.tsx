import React, { useRef } from "react"
import { useClickAway } from "react-use"
import { useShoppingCart } from "../context/shoppingCartContext"
import storeItems from "../data/itens.json"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItem"

type ShoppingCartProps = {
  isOpen: boolean
}

export const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { closeCart, cartItems } = useShoppingCart()
  useClickAway(ref, () => {
    closeCart()
  })
  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    e.currentTarget.classList.toggle("hidden", !isOpen)
  }

  return (
    <>
      <div
        className={`fixed top-0 bottom-0 right-0 left-1/3 origin-right  z-50  ${
          isOpen ? "animate-fadeIn slideFromRight" : "animate-fadeOut "
        }`}
        onAnimationEnd={handleAnimationEnd}
      >
        <div
          ref={ref}
          className={`flex p-8 flex-col ml-auto  bg-slate-500  h-full  transition-transform duration-300  ${
            !isOpen && "translate-x-full"
          }`}
        >
          <div className="flex justify-between align-middle ">
            <span className="font-bold text-lg">Cart</span>
            <button onClick={closeCart} className="font-bold text-xl">
              X
            </button>
          </div>
          <div className="flex flex-col mt-8 gap-6">
            {cartItems.map((i) => (
              <CartItem {...i} key={i.id} />
            ))}
            <div className="flex justify-end text-xl text-bold text-white">
              Total{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id)
                  return total + (item?.price || 0) * cartItem.quantity
                }, 0)
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed opacity-0 inset-0 pointer-events-none transition-opacity duration-300 bg-black/30 ${
          isOpen && "pointer-events-auto opacity-100"
        }`}
      ></div>
    </>
  )
}
