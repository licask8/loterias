import {api} from '../lib/axios';
import MegaLogo from  '../assets/sena.svg';
import { useEffect, useState } from 'react';
import { Dropdown } from '../components/DropdownButton';


const results = [
    "00",
    "00",
    "00",
    "00",
    "00",
    "00",
]

export function Mega() {
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState([]);
    const [dezenas, setDezenas] = useState([])


    async function getData() {
       try {
        setIsLoading(true)

        const response = await api.get("/mega-sena/latest")
        const data = response.data
        const dezenasResult = data.dezenas
        setResult(data)
        setDezenas(dezenasResult)
      


       } catch (error) {
        setIsLoading(false)
        console.error("ops! ocorreu um erro" + err);
       }

    }

    useEffect(() => {
        getData()
        

    },[result, dezenas])
  
    return (
        <div className='flex w-screen h-screen bg-gray-200 flex-col md:flex-row'>
            <aside className='h-2/4 md:h-full md:w-[613px] md:justify-between  w-full sticky bg-mega flex flex-col  items-center justify-between'>
                                
                {/* <button onClick={getData} type='button' className='mt-24 w-52 h-11 bg-white rounded-md font-medium text-sm'>MEGA-SENA</button> */}
                <div className='mt-4 md:mt-10'>
                    <Dropdown title="MEGA-SENA" />
                </div>
                
                <div className='h-14 flex flex-col md:flex-row gap-5 items-center'>
                    <img className='h-14 md:h-14' src={MegaLogo} alt="logo mega sena" />
                    <p className='justify-self-center font-bold text-white text-3xl'>MEGA-SENA</p>
                </div>

                <div className='flex gap-2 md:flex-col flex-row mb-3 md:mb-20 mt-16'>
                    <p className='text-white font-medium text-sm mt-1'>CONCURSO </p>
                    {result.length == 0 ? (
                        <h1 className='font-bold text-xl text-white mt-3'>0000 - 00/00/0000</h1>
                    ) : (
                        <h1 className='font-bold text-xl text-white md:text-xl mb-2 md:mb-0'>{result.concurso} - {result.data}</h1>
                    )}
                </div>
                
            </aside>

            <div className='w-screen flex flex-col justify-center flex-shrink sm:h-full'>

                <div className='mx-auto flex flex-row gap-9 md:m-auto mt-8 flex-wrap justify-center px-3 '>
                    {dezenas.length == 0 ? (
                       results.map((item, i) => {
                        return (
                            <p key={`${item}-${i}`} className='bg-white rounded-full px-3 py-3 text-2xl font-bold md:px-6 md:py-6'>{item}</p>
                        )
                       })
                        ) : (
                        dezenas.map((item, i) => {
                            return (
                                <p key={`${item}-${i}`} className='bg-white rounded-full px-3 py-3 text-2xl font-bold md:px-6 md:py-6'>{item}</p>
                            )
                        })
                        )}
                    
                    <p className='mx-3 md:mx-auto  mb-8 text-sm text-black md:text-base mt-6'>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
                </div>

            </div>

        </div>
    )
}