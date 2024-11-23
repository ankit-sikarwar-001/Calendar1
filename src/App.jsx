import { useEffect, useState } from "react"

export default function App() {
  const [Year,setYear] = useState(2024)
  const currentMonth = new Date();
  const [months,setMonth] = useState(currentMonth.getMonth())
  const [seldate,setSelDate] = useState(currentMonth.getDate())
  console.log(currentMonth.getDate())
  const [dates,setdates] = useState([]);
  useEffect(() => {
  const newDates = []; // Temporary array to store the dates
  // let pre ;
  // const leap = new Date(Year,1,29)
  // if(months === 2||months === 6||months === 4||months === 7||months === 9||months === 11){
  //   pre = -3;
  // } else if(months === 1 && leap) {pre = -5;}
  // else if(months === 1 && !leap) {pre = -6;}
  // else if (months === 0) pre = 1
  // else {
  //   pre  = -4
  // }
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
        <svg onClick={dec} xmlns="http://www.w3.org/2000/svg" className="w-10 h-8 m-3" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        {Year} 
        <svg xmlns="http://www.w3.org/2000/svg" onClick={inc} className="w-10 h-8 m-3" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
        </div>
      <div className="grid justify-start ml-20 gap-3 text-lg pb-5 ">
      {
        month.map((mon,index) => (
          <div 
           key={index}  
           onClick= { ()=> setMonth(index)} 
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
             {
                dates.map((mon,index) => (
                  <div
                   key={index}
                   onClick= { ()=> setSelDate(index+1)} 
                   className={`${seldate === (index+1) ? "bg-slate-700": "hover:bg-slate-700"} cursor-pointer px-6 rounded `}>
                    {mon}
                    </div>
                ))
              }
           </div>
        </div>
      </div>
      <div className="w-1/4 bg-gray-800  text-white grid place-items-start">
        <div className=" w-full flex items-center justify-center text-3xl">Events</div>
        <div className=" h-3/4">
          hello
        </div>
      </div>
    </div>
    </div>
  )
}
