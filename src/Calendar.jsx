import { useEffect, useState } from "react";
import { Events } from "./Data";

export default function Calendar() {
  const [Year,setYear] = useState(2024)
  const currentMonth = new Date();
  const [months,setMonth] = useState(currentMonth.getMonth())
  const [seldate,setSelDate] = useState(currentMonth.getDate())
  console.log(currentMonth.getDate())
  const [dates,setdates] = useState([]);
  useEffect(() => {
  const newDates = []; // Temporary array to store the dates
  const date = new Date(Year, months, 1); // Start of the month
  

  while (date.getMonth() === months || date.getMonth() ===months-1  ) { // Check for the same month
    newDates.push(new Date(date).getDate()); // Add the current date
    date.setDate(date.getDate() + 1); // Move to the next day
  }

  setdates(newDates); // Update state immutably
}, [months, Year]);

  

  const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
    const Weaks = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
    console.log(dates)
    function dec (){
      setYear(prev=>prev-1)
    }
    function inc (){
      setYear(prev=>prev+1)
    }
  
  return (
    <div className="bg-[url('/images/bg4.jpg')] h-screen bg-cover bg-center">
    <div className=" text-white pt-5 text-center text-5xl ">
     Indian Calender
    </div>
    <div className="w-4/5 bg-red-100 flex  mx-auto mt-16 ">
      <div className="w-1/4 bg-gray-900  text-white grid">

      <div className="h-20 flex items-center justify-center text-3xl">
        <svg
          onClick={dec}
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-8 m-3 cursor-pointer"
          viewBox="0 0 320 512"
          fill="white"
          >
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
        </svg>

        {Year} 
        <svg 
          onClick={inc}
          xmlns="http://www.w3.org/2000/svg"  
          fill = "white"
          className="w-10 h-8 m-3 cursor-pointer" 
          viewBox="0 0 320 512">
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
        </svg>
        </div>
      <div className="grid justify-start ml-20 gap-3 text-lg pb-5 ">
      {
        month.map((mon,index) => (
          <div 
           key={index}  
           onClick= { ()=> {setMonth(index); setSelDate(null)}} 
           
           className={`${months == index ? "bg-gray-700": "hover:bg-slate-700"} cursor-pointer px-6 rounded `}>
            {mon}
            </div>
        ))
      }
      </div>
      </div>
      <div className="w-1/2 bg-gray-600  text-white   grid place-items-stretch">
        <div className="h-20 flex  items-center justify-center border-s-orange-400 text-3xl">Calender
        </div>
        <div className="h-full mb-64">
          <div className=" flex text-sm items-center justify-center">
             {
                Weaks.map((mon,index) => (
                  <div key={index} className="hover:bg-slate-700 cursor-pointer px-4  rounded ">
                    {mon}
                    </div>
                ))
              }
           </div>
           <div className=" grid grid-cols-7 grid-rows-5 h-full text-xl place-items-center  justify-center">
             {dates.map((mon, index) => {
              const isSelected = seldate === index + 1 && (months === currentMonth.getMonth());
              const hasEvent = Events.some(
                (event) => event.day == index + 1 && event.month == months && event.year.includes(Year)
              );

              return (
                <div
                  key={index}
                  onClick={() => setSelDate(index + 1)}
                  className={`cursor-pointer px-6 rounded ${
                    isSelected ? "bg-slate-700" : "hover:bg-slate-700"
                  } ${hasEvent ? "underline decoration-yellow-400" : "no-underline"}`}
                >
                  {mon}
                </div>
              );
            })}

           </div>
        </div>
      </div>

      {/* Events started from here  */}

      <div className="w-1/4 bg-gray-800  text-white grid place-items-start">
        <div className="h-20 w-full flex items-center justify-center text-3xl">Events</div>
        <div id="listofevents " className="w-full grid overflow-y-auto h-[calc(75vh-5rem)]">
          {Events.map((obj,index) => (

            
          <div 
          key = {index}
          className={`m-2 h-1/5 flex cursor-pointer  border-solid border-violet-500 border-4 ${(obj.day == (seldate))&&(obj.month == (months))&&(obj.year.includes(Year)) ? "block":"hidden"}`}>
            <div className="w-1/2 ">
              <img className = "w-full h-full " src= {obj.image} alt={obj.name} />
            </div>
            <div className="grid place-items-start p-2">
              
              <p className="font-bold">{obj.name}</p>
              <p><b>Starts : </b> {obj.start}</p>
              <p><b>Ends : </b> {obj.end}</p>


            </div>
          </div>  
          ))
          }
          </div>
      </div>
    </div>
    </div>

)
}


