import { Dispatch, FC, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";


interface xmlValue {
  _text: string
}

interface cotizacion {
  nombre: xmlValue
  venta: xmlValue,
  compra: xmlValue
}
interface Data {
  data: {
    dolar: cotizacion,
    blue: cotizacion
  }
}



interface ContextType {
  values: Valores,
  setValues?: Dispatch<SetStateAction<any>>,
  type?: "ars" | "usd",
  setType?: Dispatch<SetStateAction<any>>,
  converted?: any,
  setConverted?: Dispatch<SetStateAction<any>>,
  handleChange?: any
}


const ConverterContext = createContext<ContextType>({
  values: { blue: 0, dolar: 0 },
  setValues: () => { },
})

interface Props extends Data {
  children: ReactNode,
}

interface Valores {
  dolar: number | string,
  blue: number | string,
}

export const ConverterProvider: FC<Props> = ({ data, children }) => {
  const [values, setValues] = useState<Valores>({ dolar: parseFloat(data.dolar.venta._text), blue: parseFloat(data.blue.venta._text) })
  const [type, setType] = useState<"usd" | "ars">("usd")
  // const [converted, setConverted] = useState(0)

  const handleChange = (input: any) => {
    if (type === "usd") {
      if (!input) return setValues({ dolar: parseFloat(data.dolar.venta._text), blue: parseFloat(data.blue.venta._text) })
      if (input) return setValues({ dolar: input * parseFloat(data.dolar.venta._text), blue: input * parseFloat(data.blue.venta._text) })
    }
    if (type === "ars") {
      if (!input) return setValues({ dolar: parseFloat(data.dolar.venta._text), blue: parseFloat(data.blue.venta._text) })
      if (input) return setValues({ dolar: input / parseFloat(data.dolar.venta._text), blue: input / parseFloat(data.blue.venta._text) })

    }
  }


  return (
    <ConverterContext.Provider value={{ handleChange, setValues, values, type, setType }}>
      {children}
    </ConverterContext.Provider>
  )

}

export default ConverterContext