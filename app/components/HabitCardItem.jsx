import { Form, Link } from "@remix-run/react";
import { CiEdit } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

// eslint-disable-next-line react/prop-types
function HabitCardItem({ habit, id }) {
  return (
    <Link
      to={`/habit/${id}`}
      className="flex justify-between py-2 px-5 bg-white text-black mt-5 w-[90%] rounded-md"
    >
      <h1 className="text-cyan-800 underline text-lg">{habit}</h1>
      <div to="habit/id" className="flex gap-5">
        <button className="bg-cyan-500 h-7 w-7  rounded-full flex justify-center items-center  hover:bg-cyan-400 hover:text-white">
          <CiEdit />
        </button>
        <Form
          method="delete"
          action="/home"
          className="bg-cyan-500 h-7 w-7 flex justify-center items-center rounded-full hover:text-white hover:bg-cyan-400"
        >
          <IoMdClose />
        </Form>
      </div>
    </Link>
  );
}

export default HabitCardItem;
