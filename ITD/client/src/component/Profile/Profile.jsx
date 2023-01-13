import useWindowDimensions from '../Car/useWindowDimensions'


export default function Profile (){
    const { height, width } = useWindowDimensions();

    return <>
        <div className='flex flex-col'style={{ height: `calc(${height}px - 3.5rem` }}>
            <div className="flex justify-center items-center mt-5 mb-7">
                <p className="font-medium text-2xl dark:text-tertiary bg-dk-secondary">Profile</p>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-row justify-between items-center rounded-2xl mb-4 p-2 bg-black w-full md:w-1/3">
                    <div className='bg-black'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-white' 
                        height="48" 
                        width="48"
                        viewBox="-12 -12 72 72"                                        
                        >
                            <path d="M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM8 40v-4.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V40Zm3-3h26v-1.7q0-.8-.475-1.525-.475-.725-1.175-1.075-3.2-1.55-5.85-2.125Q26.85 30 24 30t-5.55.575q-2.7.575-5.85 2.125-.7.35-1.15 1.075Q11 34.5 11 35.3Zm13-16.05q1.95 0 3.225-1.275Q28.5 18.4 28.5 16.45q0-1.95-1.275-3.225Q25.95 11.95 24 11.95q-1.95 0-3.225 1.275Q19.5 14.5 19.5 16.45q0 1.95 1.275 3.225Q22.05 20.95 24 20.95Zm0-4.5ZM24 37Z" />
                        </svg>
                    </div>
                <div className="font-medium text-2xl dark:text-tertiary bg-dk-secondary">Account</div>
                <div className='bg-black'></div>
                    
            </div>


        </div>
    </div>
    </>
}