import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("Enter your text here");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {/* <h1 className="text-4xl font-bold mb-6">Image Text Overlay</h1> */}

        <div className="relative w-3/4">
          <img
            className="w-full h-full object-cover"
            src="/image.png"
            alt="Sample Image"
          />
          <div className="absolute top-1/2 left-[-10%]">
            {/* <p className="text-3xl font-bold text-white">Performance</p>
            <p className="text-3xl font-bold text-white">Higher is Better</p> */}
            <input
              id="text"
              type="text"
              className="bg-black bg-opacity-0 text-2xl font-bold text-gray-500 text-right "
              placeholder="Left Axis Label"
              onChange={handleTextChange}
            />
          </div>
          <div className="absolute bottom-7 left-[40%]">
            <input
              id="text"
              type="text"
              className="bg-black bg-opacity-0 text-2xl font-bold text-gray-500 w-full text-center"
              placeholder="Bottom Axis label"
              onChange={handleTextChange}
            />
          </div>
          <div className="absolute top-0 left-[40%] mb-10">
            {/* <p className="text-4xl font-bold text-white">Chart Title</p> */}

            <input
              id="text"
              type="text"
              className="bg-black mt-10 text-4xl font-bold text-center"
              placeholder="Chart Title"
              onChange={handleTextChange}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
