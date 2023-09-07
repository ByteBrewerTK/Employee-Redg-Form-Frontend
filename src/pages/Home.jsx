import { NavLink } from "react-router-dom"
import ViewEmp from "./ViewEmp"


export default function Home() {

    return(
        <section className="bg-black w-screen h-screen text-white px-8 py-4 flex flex-col overflow-auto">
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-[1.3rem]">Employees</h1>
                    <span className="text-[.8rem] text-gray-300">This is a list of all employees. You can add new employees, edit or delete existing ones.</span>
                </div> 

                <NavLink to={'/addEmployee'}>
                    <button className="bg-indigo-600 p-2 rounded-lg font-bold"
                    >Add Employee</button>
                </NavLink>
            </header>
            <table className="w-full table-fixed h-auto">
                <thead className="bg-gray-800">
                    <tr className="text-left">
                        <th scope="col" className="px-4 py-4">Employee</th>
                        <th scope="col" className="px-4 py-4">Tittle</th>
                        <th scope="col" className="px-4 py-4">Role</th>
                    </tr>
                </thead>
                    
                <ViewEmp/>
                                    
            </table>
        </section>
    )
}
