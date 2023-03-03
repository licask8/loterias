import { api } from '../lib/axios';
import DiaLogo from '../assets/dia.svg';
import { useState, useEffect } from 'react';
import { Dropdown } from '../components/DropdownButton';


const nulls = [
    "00",
    "00",
    "00",
    "00",
    "00",
    "00",
    "00",
]

export function DiaDeSorte() {
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [dezenas, setDezenas] = useState([]);


    async function getData() {
        try {
            setIsLoading(true)

            const response = await api.get("/dia-de-sorte/latest")
            const data = response.data
            const dezena = response.data.dezenas 


            setResults(data)
            setDezenas(dezena)
            
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
            <aside className='h-2/4 md:h-full md:w-[613px] md:justify-between  w-full sticky bg-sorte flex flex-col  items-center justify-between'>
                <div className='mt-4 md:mt-10'>
                    <Dropdown title="DIA-DE-SORTE" />
                </div>
                {/* <button type='button' onClick={getData} className='mt-24 w-52 h-11 bg-white rounded-md font-medium text-sm'>DIA DE SORTE</button> */}
                <div className='h-14 flex flex-col md:flex-row gap-5 items-center'>
                    <img src={DiaLogo} alt="logo mega sena" className='h-14 md:h-14' />
                    <p className='justify-self-center font-bold text-white text-3xl'>DIA DE SORTE</p>
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
                    ): (
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

