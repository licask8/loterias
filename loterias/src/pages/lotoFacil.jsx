import { useState, useEffect } from 'react';
import { api } from '../lib/axios';
import FacilLogo from '../assets/facil.svg';
import { Dropdown } from '../components/DropdownButton';


const nulls = [
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
]

export function LotoFacil() {
    const [isLoading, setIsLoaging] = useState(false);
    const [result, setResult] = useState([]);
    const [dezenas, setDezenas] = useState([]);


    async function getData() {
        try {
            setIsLoaging(true)

            const response = await api.get("/lotofacil/latest")
            const data = response.data;
            const dezena = response.data.dezenas;

            setDezenas(dezena)
            setResult(data)

            
        } catch (error) {
            setIsLoaging(false)
            console.error("ops! ocorreu um erro" + err);
        }
    }

    useEffect(() => {
        getData()
        

    },[result, dezenas])

    return (
        <div className='flex  bg-gray-200 '>
            <aside className='h-screen w-[613px] pl-14 sticky top-0 bg-lotofacil flex flex-col justify-between'>
                {/* <button type='button' onClick={getData} className='mt-24 w-52 h-11 bg-white rounded-md font-medium text-sm'>LOTO FÁCIL</button> */}
                  <Dropdown title="LOTO-FÁCIL" />
                <div className='h-14 flex flex-row gap-5 items-center'>
                    <img src={FacilLogo} alt="logo mega sena" />
                    <p className='justify-self-center font-bold text-white text-3xl'>LOTOFÁCIL</p>
                </div>

                <div className='mb-24'>
                    <p className='text-white font-medium text-sm'>CONCURSO</p>
                    {result.length == 0 ? (
                        <h1 className='font-bold text-xl text-white mt-3'>0000 - 00/00/00</h1>
                    ) : (
                        <h1 className='font-bold text-xl text-white mt-3'>{result.concurso} - {result.data}</h1>
                    )}
                </div>
                
            </aside>

            <div className='ml-7 w-screen flex flex-col '>

                <div className='m-auto flex flex-row gap-9 flex-wrap'>
                    {dezenas.length == 0 ? (
                     nulls.map((item, i) => {
                        return (
                            <p key={`${item}-${i}`} className='bg-white mr-1 rounded-full px-6 py-6 text-2xl font-bold'>{item}</p>
                        )
                     })
                    ) : (
                      dezenas.map((dezena, i) => {
                        return (
                            <p key={`${dezena}-${i}`} className='bg-white rounded-full px-6 py-6 text-2xl font-bold'>{dezena}</p>
                        )
                      })  
                    )}   
                    
                </div>

                <p className='mx-auto my-0 mb-24 text-base text-black'>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
            </div>

        </div>
    )
}