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
      <main className='w-screen min-h-screen bg-rose-700 flex justify-center items-center'>
        <Card values={{ dolar: 23, blue: 50 }} />
      </main>
    </ConverterProvider>
  )
}

export const getServerSideProps = async (req: NextRequest, res: NextResponse) => {
  const { data } = await axios.get("http://localhost:3000/api/hello")
  // console.log(data.cotizaciones[0])
  const info = {
    dolar: data.cotizaciones.find((el: cotizacion) => el.nombre._text.toLowerCase() === "oficial"),
    blue: data.cotizaciones.find((el: cotizacion) => el.nombre._text.toLowerCase() === "blue")
  }
  console.log(info)
  return { props: { data: info } }
}
