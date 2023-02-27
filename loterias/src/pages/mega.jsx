import { useEffect, useState } from 'react'
import MegaLogo from  '../assets/sena.svg'
import {api} from '../lib/axios'


const results = [
    "10",
    "20",
    "30",
    "40",
    "50",
    "60",
]

export function Mega() {
    const [isLoading, setIsLoading] = useState(false);
    const [dezenas, Setdezenas] = useState([])
    const [concurso, setConcurso] = useState()
    const [data, setData] = useState()

    async function FechData() {
       try {
        setIsLoading(true)
        const response = await api.get("/mega-sena/latest")

        const results = response.data.dezenas
        const concurso = response.data.concurso
        const date = response.data.data
      
        
        console.log(results)
        console.log(concurso)
        console.log(date)

       } catch (error) {
        setIsLoading(false)
        console(error)
       }

    }

    useEffect(() => {
        FechData()
        console.log("passou aki")

    },[])

    return (
        <div className='flex  bg-gray-200 '>
            <aside className='h-screen w-[613px] pl-14 sticky top-0 bg-mega flex flex-col justify-between'>
                <button onClick={FechData} type='button' className='mt-24 w-52 h-11 bg-white rounded-md font-medium text-sm'>MEGA-SENA</button>

                <div className='h-14 flex flex-row gap-5 items-center'>
                    <img src={MegaLogo} alt="logo mega sena" />
                    <p className='justify-self-center font-bold text-white text-3xl'>MEGA-SENA</p>
                </div>

                <div className='mb-24'>
                    <p className='text-white font-medium text-sm'>CONCURSO</p>
                    <h1 className='font-bold text-xl text-white mt-3'>4531 - 07/04/2020</h1>
                </div>
                
            </aside>

            <div className='w-screen flex flex-col'>

                <div className='m-auto flex flex-row gap-9'>
                    {results.map((item) => {
                        return (
                            <p key={item} className='bg-white rounded-full px-6 py-6 text-2xl font-bold'>{item}</p>
                        )
                    })}   
                    
                </div>

                <p className='mx-auto my-0 mb-24 text-base text-black'>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
            </div>

        </div>
    )
}