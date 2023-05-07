import Image from 'next/image'
import { Inter } from 'next/font/google'
import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'
import { ChangeEvent, useState } from 'react'
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



export default function Home({ data }: Data) {




  return (
    <ConverterProvider data={data}>
      <main className='w-screen h-screen bg-gradient-to-tr from-sky-500 to-green-500 flex justify-center items-center'>
        <Card />
      </main>
    </ConverterProvider>
  )
}

export const getServerSideProps = async (_req: NextRequest, _res: NextResponse) => {
  const { data } = await axios.get("/api/hello")
  const info = {
    dolar: data.cotizaciones.find((el: cotizacion) => el.nombre._text.toLowerCase() === "oficial"),
    blue: data.cotizaciones.find((el: cotizacion) => el.nombre._text.toLowerCase() === "blue")
  }
  return { props: { data: info } }
}
