import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner"
import { FaArrowRight, FaBackward } from "react-icons/fa";

export default function EmpForm() {

    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const baseUrl = process.env.REACT_APP_BASE_URL;

    const onSubmit = async (data)=>{
        
        setLoading(true);
        await fetch(`${baseUrl}/createUser`, 
            {

                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                    body : JSON.stringify({...data})

            }
        ).then(()=>{
            
            console.log(data);
            
        }).catch(error =>{
            console.error(error);
        })
        setLoading(false);
        navigate('/')
        
    }

    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="h-[75%] flex flex-col justify-between w-[60%]">
            
            <div>
                <span 
                className="text-[2.4rem] font-bold flex flex-col">
                Create a Employee
                </span>

                <span 
                onClick={()=>{navigate("/")}}
                className = "text-[1.3rem] mb-4 text-indigo-600 cursor-pointer hover:underline flex items-center gap-2 min-w-max">
                <FaBackward/>
                Back To All Employee List
                </span>
            </div>

            <label className="flex flex-col">
                <span className = " mb-2">Employee Name</span>
                <input type="text"
                placeholder="Enter Your Name"
                name="user"
                id="user"
                {...register('user',{ required: true })}
                maxLength={30}                
                className = "h-[3.5rem] rounded-lg px-2 bg-transparent border"
                />
            </label>

            <label className="flex flex-col">
                <span className = "mb-2">Employee Email Id</span>
                <input type="email"
                placeholder="Enter Your Email"
                name="email"
                id="email"
                {...register('email',{ required: true })}
                className = "h-[3.5rem] rounded-lg px-2 bg-transparent border"
                />
            </label>

            <label className="flex flex-col">
                <span className = "mb-2">Employee Title</span>
                <input type="text"
                placeholder="Enter Your Employee Title"
                name="title"
                id="title"
                maxLength={30}
                {...register('title',{ required: true })}
                className = "h-[3.5rem] rounded-lg px-2 bg-transparent border"
                />
            </label>

            <label className="flex flex-col">
                <span className = "mb-2">Employee Department</span>
                <input type="text" 
                placeholder="Enter Your Employee Department"
                name="department"
                id="department"
                maxLength={30}
                {...register('department', { required: true })}
                className = "h-[3.5rem] rounded-lg px-2 bg-transparent border"
                />
            </label>

            <label className="flex flex-col">
                <span className = "mb-2">Employee Role</span>
                <input type="text"
                placeholder="Enter Your Employee Role"
                name="role"
                id="role"
                maxLength={30}
                {...register('role', { required: true })}
                className = "h-[3.5rem] rounded-lg px-2 bg-transparent border"
                />
            </label>

            <button 
            type="submit" 
            className = "h-[3.5rem] rounded-lg px-2 mt-6 text-[1.3rem] font-bold flex justify-center items-center bg-indigo-600 hover:bg-indigo-500">
                {
                    loading?(<Spinner/>) 
                    :
                    (
                    <span className="flex items-center gap-2">
                        Create Employee
                        <FaArrowRight/>
                    </span>
                    )
                }
                </button>
        </form>
    )
}
