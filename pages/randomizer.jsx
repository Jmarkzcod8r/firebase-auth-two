import React, { useState, useEffect } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [wheelSlices, setWheelSlices] = useState([]);
  const [isRotating, setIsRotating] = useState(false);
  const [randomResult, setRandomResult] = useState('');

  useEffect(() => {
    const storedSlices = localStorage.getItem('wheelSlices');
    if (storedSlices) {
      setWheelSlices(JSON.parse(storedSlices));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wheelSlices', JSON.stringify(wheelSlices));
  }, [wheelSlices]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      const newSlice = {
        id: String(Date.now()),
        content: inputValue,
      };
      setWheelSlices((prevSlices) => [...prevSlices, newSlice]);
      setInputValue('');
    }
  };

  const handleReset = () => {
    setWheelSlices([]);
    setRandomResult('');
  };

  const calculateSliceAngle = () => {
    const totalSlices = wheelSlices.length;
    return totalSlices > 0 ? 360 / totalSlices : 0;
  };

  const rotateChart = () => {
    setIsRotating(true);
    setRandomResult('');

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * wheelSlices.length);
      setRandomResult(wheelSlices[randomIndex].content);
    }, 3000);

    setTimeout(() => {
      setIsRotating(false);
    }, 4000);
  };

  return (
    <main className="flex flex-col items-center justify-between p-4 md:p-24">

      <h1 className="text-2xl font-serif mb-4">Randomizer</h1>

      <form onSubmit={handleFormSubmit} className="mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add an item"
          className="inline-block mr-2 p-2 w-[9em] sm:w-[20em] border border-gray-300"
        />
        <button type="submit" className="inline-block p-2 bg-blue-500 text-white">
          Add
        </button>
      </form>
      <div className="h-10">
        {randomResult && (
          <h2 className="text-xl font-bold mt-2">{` ${randomResult} `}</h2>
        )}
      </div>
      <div>
        {wheelSlices.length > -1 && (
          <div className="relative">
            <svg
              viewBox="0 0 400 400"
              className={`min-w-[12em] sm:min-h-[12em] sm:w-[40em] h-auto ${isRotating ? 'animate-spin' : ''}`}
            >
              <circle cx="200" cy="200" r="180" fill="#eaeaea" />
              {wheelSlices.map((slice, index) => {
                const startAngle = calculateSliceAngle() * index;
                const endAngle = startAngle + calculateSliceAngle();
                const largeArcFlag = calculateSliceAngle() > 180 ? 1 : 0;
                const x1 = 200 + 180 * Math.cos((startAngle * Math.PI) / 180);
                const y1 = 200 + 180 * Math.sin((startAngle * Math.PI) / 180);
                const x2 = 200 + 180 * Math.cos((endAngle * Math.PI) / 180);
                const y2 = 200 + 180 * Math.sin((endAngle * Math.PI) / 180);
                const pathData = `M 200 200 L ${x1} ${y1} A 180 180 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

                const textAngle = (startAngle + endAngle) / 2;
                const textX = 200 + 140 * Math.cos((textAngle * Math.PI) / 180);
                const textY = 200 + 140 * Math.sin((textAngle * Math.PI) / 180);

                return (
                  <g key={slice.id}>
                    <path
                      d={pathData}
                      fill={`hsl(${(360 / wheelSlices.length) * index}, 50%, 70%)`}
                    />
                    <text
                      x={textX}
                      y={textY}
                      fontSize="14"
                      fill="#000"
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      {slice.content}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        )}
      </div>
      {wheelSlices.length > -1 && (
        <div className="flex">
          <button className="mt-4 mr-2 p-2 bg-red-500 text-white" onClick={handleReset}>
            Reset
          </button>
          <button className="mt-4 p-2 bg-green-500 text-white" onClick={rotateChart}>
            Rotate Chart
          </button>
        </div>
      )}
    </main>
  );
}
