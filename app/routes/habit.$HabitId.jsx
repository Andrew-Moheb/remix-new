import Modal from "../components/Modal";
import { Form, redirect, useLoaderData, useParams } from "@remix-run/react";
import { deleteHabit, uniqueHabit, updateHabit } from "../data/habits";

function HabitID() {
  const params = useParams();
  const specificHabit = useLoaderData();

  return (
    <Modal>
      <div className="bg-white h-[15rem] rounded flex flex-col gap-3 justify-center items-center">
        <Form
          method="post"
          action={`/habit/${params.HabitId}`}
          className="flex flex-col items-center justify-center gap-4"
        >
          <h1 className="text-cyan-600 underline text-2xl mt-0">Your Habit</h1>
          <input
            type="text"
            placeholder="habit"
            name="habit"
            className="bg-slate-200 w-[20rem] rounded py-2 px-2 focus:outline-none"
            defaultValue={specificHabit.habit}
          />
          <button
            type="submit"
            className="bg-green-100 w-[20rem] py-2 rounded hover:bg-green-200 flex justify-center items-center"
          >
            Edit
          </button>
        </Form>
        <Form
          method="delete"
          className="bg-green-100 w-[20rem] py-2 rounded hover:bg-green-200 flex justify-center items-center cursor-pointer"
        >
          <button type="submit">Delete</button>
        </Form>
      </div>
    </Modal>
  );
}

export default HabitID;

export async function action({ request, params }) {
  const habitId = params.HabitId;
  if (request.method == "POST") {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    await updateHabit(habitId, data);
    return redirect("/");
  } else if (request.method == "DELETE") {
    console.log(`requesting here =>`, request);
    await deleteHabit(habitId);
    return redirect("/");
  }
}

export async function loader({ params }) {
  const habitId = params.HabitId;
  return await uniqueHabit(habitId);
}

// method="post" action={`/habit/${params.HabitId}`}
// method='delete' action={`/habit/${params.HabitId}`}
