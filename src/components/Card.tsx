import React from 'react'
import Input from './Input'
import useInfo from 'src/hooks/useInfo'


export const parseCurrency = (num: number): string => num.toLocaleString("es-ar", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

interface Values {
  dolar: number,
  blue: number
}

const Card = () => {
  const { values } = useInfo()
  const { dolar, blue }: Values = values

  return (
    <div>
      <div className="fixed top-16  md:top-24 left-1/2 z-10 h-[min(100%,22rem)] max-h-[22rem]   flex w-screen max-w-max -translate-x-1/2  px-4">
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4 flex flex-col gap-5 justify-around">
            <div className="group relative flex gap-x-6 rounded-lg text-green-500 bg-green-100  p-4 hover:bg-green-200">
              <div className="mt-1 flex text-2xl h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                {/* <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" /> */}
                $
              </div>
              <div className='overflow-hidden'>
                <div className="font-semibold text-gray-900">
                  Dolar Oficial
                  <span className="absolute inset-0" />
                </div>
                <p className="mt-1 text-gray-600 overflow-x-hidden">
                  {parseCurrency(dolar)}

                </p>
              </div>
            </div>
            <div className="group relative flex gap-x-6 rounded-lg p-4 bg-sky-100 hover:bg-sky-200">
              <div className="mt-1 text-2xl flex h-11 w-11 flex-none items-center justify-center rounded-lg text-sky-800 bg-gray-50  ">
                {/* <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" /> */}
                $
              </div>
              <div className='overflow-hidden'>
                <div className="font-semibold text-gray-900">
                  Dolar Blue
                  <span className="absolute inset-0" />
                </div>
                <p className="mt-1 text-gray-600  overflow-x-hidden">
                  {parseCurrency(blue)}
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 px-3 py-3 pb-8 divide-x divide-gray-900/5 bg-gray-50">
            <Input />
            {/* {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {item.name}
                </a>
              ))} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card