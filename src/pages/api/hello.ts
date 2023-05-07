// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const convert = require('xml-js')
const axios = require('axios')


const getInfoDolar = async (res: any) => {
  try {
    const dataDolar = await axios.get("https://www.dolarsi.com/api/dolarSiInfo.xml")
    const json = convert.xml2json(dataDolar.data, { compact: true, spaces: 4 });
    const jsonParsed = JSON.parse(json);
    return Object.values(jsonParsed.cotiza.Dolar)
  } catch (e) {
    res.sendStatus(500)
  }
}



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cotizaciones: any = await getInfoDolar(res)
  res.status(200).json({ cotizaciones })
}
