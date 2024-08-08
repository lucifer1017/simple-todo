import { useRef, useState } from "react";
import Tasks from "./components/Tasks";
import todoicon from './assets/todo_icon.png'
import { BG_VIDEO } from "./utils/constants";


function App() {

  const [text, setText] = useState([]);

  const handleClick = () => {

    if (textbox.current.value) {
      const newText = {
        id: Date.now(),
        text: textbox.current.value.trim(),
        isComplete: false
      }
      setText((prev) => [...prev, newText]);
      textbox.current.value = '';
    }
  }
  const deleteText = (id) => {
    setText((prevText) => {
      return prevText.filter((item) => item.id !== id);
    })
  }

  const textbox = useRef(null);

  return (
    <div className="text-center justify-center">
      <video autoPlay muted loop className="w-screen h-screen object-cover absolute top-0 left-0 z-0">
        <source src={BG_VIDEO} />
      </video>
      <div className="relative z-10 flex items-center mt-7  ">
        <img className="w-8 ml-[25%] md:ml-[40%]" src={todoicon} alt="todoicon" />
        <h1 className="mr-[55%] sm:mr-[65%] md:mr-[60%] items-center p-1 m-1 md:p-6 md:m-6 font-neucha text-black font-bold text-5xl">UpTask</h1>

      </div>
      <div className="relative z-10">
        <input
          type="text"

          ref={textbox}
          className=" shadow-lg p-3 m-3 mx-auto rounded-lg w-[50%] "
          placeholder="Enter task" />
        <button
          onClick={handleClick}
          className="bg-blue-600 p-3 m-2 rounded-lg text-white font-neucha transition-transform duration-200 ease-in-out transform hover:scale-95">Add

        </button>
      </div>
      <div className="relative z-10 p-4 m-4">
        <h1 className="text-gray-800 font-neucha text-lg p-2  mx-auto font-bold">Tasks</h1>
        {text.length !== 0 && (
          text.map((item, index) => <Tasks key={item.id}
            id={item.id} text={item.text} isComplete={item.isComplete}
            deleteText={deleteText} />)
        )}
      </div>


    </div>
  );
}
//
///bg-blue-600 p-3 m-2 rounded-lg text-white font-neucha
export default App;
//