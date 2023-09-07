import {React, useEffect, useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import Spinner from '../components/Spinner'

export default function ViewEmp() {

  const [empData, setEmpData] = useState();
  const [loading, setLoading] = useState(false);

  const getAllData = async ()=>{
      try{
          setLoading(true);
          const getEmp = await fetch(
              `${process.env.REACT_APP_BASE_URL}/getAllUsers`,
              {
                  method : "GET",
                  headers : {
                      "Content-Type" : "application/json"
                  }
              }
          )
          const response = await getEmp.json();
          setEmpData(response.data);
          setLoading(false);
      }
      catch(error){
          console.log(error);
      }
  }

  const deleteHandeler = async(id)=>{

    await fetch(`${process.env.REACT_APP_BASE_URL}/deleteUser/${id}`,{
      method : "DELETE",
      headers : {
        "Content-Type" : "application-json"
      }
    }).then(response =>{
      if(!response.ok){
        throw new Error("Network response is not ok");
      }
      return response.json()
    }).catch(error=>{
      console.error('There was a problem deleting the data', error);
    })
    const updatedData = empData.filter(element => element._id !== id);
    setEmpData(updatedData);
  }

  useEffect(()=>{
      getAllData();
  },[])
 

  return (
    <>
        {
          loading ? (
            <tbody>
              <tr className='w-full relative top-[20rem]'>
                <td colSpan="3" className="text-center">
                  <div className="m-auto">
                      <Spinner/>
                    </div>
                </td>
              </tr>
            </tbody>
          ):
          (
            <tbody className="bg-gray-900 divide-y divide-gray-700 min-h-16">
              {
              empData ? empData.map(element =>(

                <tr key= {element._id} className='h-16'>

                  <td className="px-4 py-4 flex">
                    <img src={`https://api.dicebear.com/7.x/initials/svg/seed=${element.user}`} className="h-10 w-10 object-cover objectrounded-full border rounded-full"alt="" />
                    <div className="flex flex-col pl-4">
                      <span>{element.user}</span>
                      <span className="text-[.8rem] text-gray-400">{element.email}</span>
                    </div>
                  </td>

                  <td className="px-4 py-4 h-16">
                    <div className='flex flex-col'>
                      <span>{element.title}</span>
                      <span>{element.department}</span>
                    </div>
                  </td>

                  <td className="px-4 py-4 flex items-center justify-between h-16">
                    {element.role}
                    <div className="flex items-center gap-4">

                      <span className="cursor-pointer hover:text-red-500" 
                      onClick={()=>{deleteHandeler(element._id)}} 
                      >
                      <FaRegTrashAlt/>
                      </span>
                          
                    </div>
                  </td>
                </tr>
                )):null
                }
            </tbody>
          )
        }
    </>
  )
}
