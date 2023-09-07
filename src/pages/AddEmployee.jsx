import EmpForm from "../components/EmpForm";

export default function AddEmployee() {
    return (
        <section className = "w-screen h-screen flex overflow-hidden">
            <div className='w-[50%] h-full grid place-items-center relative'>
                <div className="w-full h-full absolute -z-10 ">

                    <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" 
                    className="absolute object-center object-cover h-full w-full -z-20"
                    />

                    <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-black"></div>
                    
                </div>
                <div className='w-[60%] h-[75%] flex flex-col justify-end'>
                    <p className='text-[2.5rem] font-bold text-white'>Empower your business with our employee creation!</p>
                </div>
            </div>

            <div className='w-[50%] grid place-items-center bg-black text-white'>
                <EmpForm/>
            </div>
        </section>
    )
}
