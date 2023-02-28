import { useState, useEffect } from 'react';
import DiaLogo from '../assets/dia.svg';
import { Dropdown } from '../components/DropdownButton';
import { api } from '../lib/axios';


const nulls = [
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
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
        <div className='flex  bg-gray-200 '>
            <aside className='h-screen w-[613px] pl-14 sticky top-0 bg-sorte flex flex-col justify-between'>
                <Dropdown title="DIA-DE-SORTE" />
                {/* <button type='button' onClick={getData} className='mt-24 w-52 h-11 bg-white rounded-md font-medium text-sm'>DIA DE SORTE</button> */}
                <div className='h-14 flex flex-row gap-5 items-center'>
                    <img src={DiaLogo} alt="logo mega sena" />
                    <p className='justify-self-center font-bold text-white text-3xl'>DIA DE SORTE</p>
                </div>

                <div className='mb-24'>
                    <p className='text-white font-medium text-sm'>CONCURSO</p>
                    {results.length == 0 ? (
                        <h1 className='font-bold text-xl text-white mt-3'>0000 - 00/00/0000</h1>
                    ) : (
                        <h1 className='font-bold text-xl text-white mt-3'>{results.concurso} - {results.data}</h1>
                    )}
                </div>
                
            </aside>

            <div className='w-screen flex flex-col'>

                <div className='m-auto flex flex-row gap-9'>
                    {dezenas.length == 0 ? (
                        nulls.map((item, i) => {
                            return (
                                <p key={`${item}-${i}`} className='bg-white rounded-full px-6 py-6 text-2xl font-bold'>{item}</p>
                            )
                        })
                    ): (
                        dezenas.map((item, i) => {
                            return (
                                <p key={`${item}-${i}`} className='bg-white rounded-full px-6 py-6 text-2xl font-bold'>{item}</p>
                            )
                        })
                    )}
                    
                </div>

                <p className='mx-auto my-0 mb-24 text-base text-black'>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
            </div>

        </div>
    )
}

