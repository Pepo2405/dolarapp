import { ChangeEvent, useState } from "react"
import useInfo from "src/hooks/useInfo"

export default function Input() {

  const { handleChange, setType } = useInfo()
  const [value, setValue] = useState("")

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value)
    handleChange(target.value)
  }

  const changeType = (e) => {
    setValue("")
    handleChange(0)
    setType(e.target.value)
  }

  return (
    <div>
      <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
        Monto
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          onChange={onChange}
          value={value || ""}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6 outline-none"
          placeholder="0.00"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-0 outline-none bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-rose-700 sm:text-sm"
            onChange={changeType}
          >
            <option value={"usd"}>USD</option>
            <option value={"ars"}>ARS</option>
            {/* <option>EUR</option> */}
          </select>
        </div>
      </div>
    </div>
  )
}