/* eslint-disable @next/next/no-img-element */
import React from "react"

type Props = {
  children: React.ReactNode
}

export const CheckoutLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
        <div className="flex flex-col justify-start items-start w-full space-y-9">
          <div className="flex justify-start flex-col items-start space-y-2">
            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Checkout</p>
            <p className="text-base leading-normal sm:leading-4 text-gray-600">
              Home {">"} Electronics {">"} Headphones {">"} Cart {">"} Checkout
            </p>
          </div>

          <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
            <div className="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
              <div className="flex flex-col justify-start items-start w-full space-y-4">
                <p className="text-xl md:text-2xl leading-normal text-gray-800">Logitech K251</p>
                <p className="text-base font-semibold leading-none text-gray-600">R$520,00</p>
              </div>
              <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                <img src="https://i.ibb.co/0GFzTP4/Rectangle-131.png" alt="headphones" />
              </div>
            </div>

            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
