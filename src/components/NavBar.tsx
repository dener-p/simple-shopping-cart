import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/shoppingCartContext"

export const NavBar = () => {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <div className=" w-full bg-slate-900 overflow-hidden sticky top-0 flex justify-center align-middle  shadow-[0_8px_4px_-5px_rgba(0,0,0,0.3)] shadow-cyan-500/50">
      <div className="gap-6 max-w-5xl w-11/12 flex justify-between">
        <ul className="flex  py-6 ">
          <li className="mr-6">
            <NavLink
              className={({ isActive }) =>
                `   transition-colors  ${
                  isActive
                    ? "text-blue-300  shadow-[0_8px_4px_-5px_rgba(0,0,0,0.3)] shadow-blue-300/50"
                    : "text-blue-500 hover:text-blue-800 "
                }`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="mr-6">
            <NavLink
              className={({ isActive }) =>
                `   ${
                  isActive
                    ? "text-blue-300 shadow-[0_8px_4px_-5px_rgba(0,0,0,0.3)] shadow-blue-300/50"
                    : "text-blue-500 hover:text-blue-800 "
                }`
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="mr-6">
            <NavLink
              className={({ isActive }) =>
                `  ${
                  isActive
                    ? "text-blue-300 shadow-[0_8px_4px_-5px_rgba(0,0,0,0.3)] shadow-blue-300/50"
                    : "text-blue-500 hover:text-blue-800"
                }`
              }
              to="/store"
            >
              Store
            </NavLink>
          </li>
        </ul>
        {cartQuantity > 0 && (
          <button
            onClick={openCart}
            className="w-auto relative rounded-full my-auto border-solid border-blue-500 border-2 p-3 cursor-pointer hover:border-blue-700 group transition-colors"
          >
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="902.86px"
              height="902.86px"
              viewBox="0 0 902.86 902.86"
              className="fill-blue-500 h-5 w-5 my-auto group-hover:fill-blue-700 transition-colors "
            >
              <g>
                <g>
                  <path
                    d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
                M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"
                  />
                  <path
                    d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
                c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
                c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
                C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
                c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
                M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
                S619.162,694.432,619.162,716.897z"
                  />
                </g>
              </g>
            </svg>
            <div className="absolute h-7 w-7 -right-2 -bottom-2 text-slate-100 rounded-full bg-red-600 grid place-content-center">
              {cartQuantity}
            </div>
          </button>
        )}
      </div>
    </div>
  )
}
