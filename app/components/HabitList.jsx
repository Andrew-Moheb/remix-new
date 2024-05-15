import HabitCardItem from "../components/HabitCardItem";

// eslint-disable-next-line react/prop-types
function HabitList({ habits }) {
  return (
    <div className="w-[40%] bg-cyan-900 drop-shadow h-[25rem] mt-3 rounded-md flex flex-col justify-start items-center overflow-scroll no no-scrollbar absolute top-1 left-[50rem]">
      <h1 className="underline text-white text-xl flex justify-center mt-2">
        Your Habit List
      </h1>
      {/* here we should have the habit card item*/}
      {habits?.map((habit) => (
        <HabitCardItem key={habit.id} habit={habit.habit} id={habit.id} />
      ))}
    </div>
  );
}

export default HabitList;
