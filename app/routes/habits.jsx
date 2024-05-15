import SideNav from "../components/SideNav";

import DailyHabitContainer from "../components/DailyHabitContainer";

function Habits() {
  return (
    <div className="flex">
      <SideNav />
      <DailyHabitContainer />
    </div>
  );
}

export default Habits;
