import { Form } from "@remix-run/react";

function HabitForm() {
  return (
    <Form
      method="post"
      action="/home"
      className="flex flex-col items-center justify-start gap-5 drop-shadow w-[30%] bg-white mt-3 rounded-md h-[25rem] absolute top-1 left-[18rem]"
    >
      <img
        src="https://images-platform.99static.com/amnTYMN8gJNacRpB8gqwRYQb6fU=/100x100:900x900/500x500/top/smart/99designs-contests-attachments/87/87541/attachment_87541903"
        alt="habitlogo"
        className="w-[8rem] h-[8rem]"
      />
      <h1 className="text-2xl">Add Habit</h1>
      <div className="h-1 bg-cyan-500 w-[20rem] rounded-full"></div>
      <input
        type="text"
        name="habit"
        className="outline-none bg-slate-100 w-[20rem] rounded py-3 px-5"
        placeholder="Add your habit"
      />
      <button
        type="submit"
        className="bg-cyan-500 w-[20rem] rounded py-3 px-2 text-white text-lg font-semibold"
      >
        Add
      </button>
    </Form>
  );
}

export default HabitForm;
