
import { useContext } from 'react';
import ConverterContext from 'src/context/Context';


interface ContextType {
  handleChange: any,
  setType: any,
  values: any
}

const useInfo = () => {
  return useContext(ConverterContext) as ContextType
}

export default useInfo