import Image from 'next/image'
import { Inter } from 'next/font/google'
import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'
import { ChangeEvent, useEffect, useState } from 'react'
import Input from 'src/components/Input'
import Card from 'src/components/Card'
import { ConverterProvider } from 'src/context/Context'

const inter = Inter({ subsets: ['latin'] })

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

const initialData = {
  dolar: {
    nombre: { _text: "oficial" },
    compra: { _text: "0" },
    venta: { _text: "0" },
  },
  blue: {
    nombre: { _text: "blue" },
    compra: { _text: "0" },
    venta: { _text: "0" },
  }

}


export default function Home() {

  const [data, setData] = useState<any>(initialData)
  const fetchValues = async () => {
    try {
      const { data } = await axios.get("/api/hello")
      setData({
        dolar: data.cotizaciones.find((el: cotizacion) => el.nombre._text.toLowerCase() === "oficial"),
        blue: data.cotizaciones.find((el: cotizacion) => el.nombre._text.toLowerCase() === "blue")
      })
    } catch (error) {
      console.log("No se pudo traer los valores")
    }
  }

  useEffect(() => {
    (async function () {
      await fetchValues()

    })()
  }, [])



  return (
    <ConverterProvider data={data}>
      <main className='w-screen h-screen bg-gradient-to-tr from-sky-500 to-green-500 flex justify-center items-center'>
        <Card />
      </main>
    </ConverterProvider>
  )
}

