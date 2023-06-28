import React, { useEffect, useState } from 'react';


const Login = ({ Junedays }) => {
  const January = [3, 5, 7, 9, 12, 14, 17, 22, 24, 27];
  const February = [1, 4, 6, 8, 9, 22];
  const March = [3, 6, 7, 9, 16, 18, 22, 27];
  const Jun = Junedays
  const def = [0];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [hoveredDay, setHoveredDay] = useState(null);


  const getNumberOfDays = (month, year) => {
    const numberOfDays = new Date(year, month, 0).getDate();
    // let colorArr = []
    const colorArray = month === 1 ? January : month === 2 ? February : month === 3 ? March  : month === 6 ? Jun : def  ;
    // const colorArr = Object.values(colorArray);
    console.log(Array.isArray(colorArray));
    // console.log('colorArr', colorArr)
    // console.log(`Typeof colorArr`, typeof colorArr);

    function checkNumberInArray(number, array) {

      return array.includes(number);
    }

    return Array.from({ length: numberOfDays }, (_, dayIndex) => {
      const day = dayIndex + 1;
      // console.log('day',day)
      let isColored = false ;
      try {
        isColored = checkNumberInArray(day, colorArray);
      } catch (error) {
        console.log("There's an error:", error);
        // Handle the error or perform any necessary actions
        // You can also assign a default value to isColored if needed
        isColored = false; // Default value when an error occurs
      }

      // console.log('isColored', isColored)

      const handleMouseEnter = () => {
        setHoveredDay(day);
      };

      const handleMouseLeave = () => {
        setHoveredDay(null);
      };

      return (
        <div
          key={dayIndex}
          className={`h-1 w-1 m-0.5 md:h-3 md:w-3 md:m-1 inline-block bg-violet-500`}
          style={{
            backgroundColor: isColored ? 'green' : 'white',
            color: isColored ? 'white' : 'black',
            position: 'relative',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredDay === day && (
            <div
              className="absolute text-xs bg-pink-500 rounded p-1 -top-4 left-0 right-0 text-center w-[20px]"
              style={{ zIndex: 1 }}
            >
              {day}
            </div>
          )}
        </div>
      );
    });
  };

  const handlePreviousMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 1 ? 12 : prevMonth - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 12 ? 1 : prevMonth + 1));
  };

  // useEffect (() => {
  //   console.log('this June,', Jun)
  // } )
  console.log('Junedays', [Junedays])

  return (
    <div className="w-screen justify-center">
      <div className="flex overflow-x-scroll md:overflow-x-auto justify-center">
        <div className="w-[70em] h-auto m-2 justify-center text-center">
          <div>{months[currentMonth - 1]} </div>
          <div className="justify-around block">{getNumberOfDays(currentMonth, 2023)}</div>
          <button className="mr-2 bg-gray-200 p-1 rounded-md hover:scale-110" onClick={handlePreviousMonth}>
            Previous
          </button>
          <button className="mr-2 bg-gray-300 pt-1 pb-1 px-2 rounded-md hover:scale-110" onClick={handleNextMonth}>Next</button>
        </div>
      </div>
      <div className="flex justify-center mt-4"></div>
    </div>
  );
};

export default Login;
