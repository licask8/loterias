import DiaLogo from '../assets/dia.svg'

const results = [
    "00",
    "01",
    "02", 
    "03", 
    "04", 
    "10",
    "20"
]

export function DiaDeSorte() {
    return (
        <div className='flex  bg-gray-200 '>
            <aside className='h-screen w-[613px] pl-14 sticky top-0 bg-sorte flex flex-col justify-between'>

                <button type='button' className='mt-24 w-52 h-11 bg-white rounded-md font-medium text-sm'>DIA DE SORTE</button>
                <div className='h-14 flex flex-row gap-5 items-center'>
                    <img src={DiaLogo} alt="logo mega sena" />
                    <p className='justify-self-center font-bold text-white text-3xl'>DIA DE SORTE</p>
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

