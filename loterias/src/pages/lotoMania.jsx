import { api } from '../lib/axios';
import { useState, useEffect } from 'react';
import ManiaLogo from '../assets/mania.svg';
import { Dropdown } from '../components/DropdownButton';


const nulls = [
    "00",
    "00",
    "00",
    "00",
    "00",
    "00",
    "00",
    "00",
    "00",
    "00",
    "00",
    "00",
    "00",
    "00",
    "00",
    "00",
    "00",
    "00",
    "00",
    "00",
    "00",   
]

export function LotoMania() {
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [dezenas, setDezenas] = useState([]);

    async function getData() {
        try {
            setIsLoading(true)

            const response = await api.get("/lotomania/latest")
            const data = response.data
            const dezenas = response.data.dezenas 

            setResults(data)
            setDezenas(dezenas)
            
        } catch (error) {
            setIsLoading(false)
            console.error("ops! ocorreu um erro" + err);
        }
    }

    useEffect(() => {
        getData()
        

    },[results, dezenas])


    return (
        <div className='flex w-screen h-screen bg-gray-200 flex-col md:flex-row'>
            <aside className='h-2/4 md:h-full md:w-[613px] md:justify-between  w-full sticky bg-lotomania flex flex-col  items-center justify-between'>
                {/* <button type='button' onClick={getData} className='mt-24 w-52 h-11 bg-white rounded-md font-medium text-sm'>LOTOMANIA</button> */}
                <div className='mt-4 md:mt-10'>
                    <Dropdown title="LOTO-MANIA" />
                </div>
                <div className='h-14 flex flex-col md:flex-row gap-5 items-center'>
                    <img src={ManiaLogo} alt="logo mega sena" className='h-14 md:h-14' />
                    <p className='justify-self-center font-bold text-white text-3xl'>LOTOMANIA</p>
                </div>

                <div className='flex gap-2 md:flex-col flex-row mb-3 md:mb-20 mt-16'>
                    <p className='text-white font-medium text-sm mt-1'>CONCURSO</p>
                    {results.length == 0 ? (
                        <h1 className='font-bold text-xl text-white mt-3'>0000 - 00/00/0000</h1>
                    ) : (
                        <h1 className='font-bold text-xl text-white md:text-xl mb-2 md:mb-0'>{results.concurso} - {results.data}</h1>
                    )}
                </div>
                
            </aside>

            <div className='w-screen flex flex-col justify-center flex-shrink'>

                <div className='mx-auto flex flex-row gap-9 md:m-auto mt-8 flex-wrap justify-center px-3'>
                    {dezenas.length == 0 ? (
                        nulls.map((item, i) => {
                            return (
                                <p key={`${item}-${i}`} className='bg-white rounded-full px-3 py-3 text-2xl font-bold md:px-6 md:py-6'>{item}</p>
                            )
                        })
                    ) : (
                        dezenas.map((item, i) => {
                            return (
                                <p key={`${item}-${i}`} className='bg-white rounded-full px-2 py-2 text-2xl font-bold md:px-5 md:py-5'>{item}</p>
                            )
                        })
                    )}   
                    <p className='mx-3 md:mx-auto text-sm text-black md:text-base mt-6'>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
                </div>

            </div>

        </div>
    )
}