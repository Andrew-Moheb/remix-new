import SideNav from "../components/SideNav";
import HabitForm from "../components/HabitForm";
import { createHabit } from "../data/habits";
import { redirect } from "@remix-run/node";
import HabitList from "../components/HabitList";
import { useLoaderData } from "react-router";
import Quote from "../components/Quote";

function Home() {
  const [habits, quote] = useLoaderData();

  return (
    <>
      <SideNav />
      <HabitForm />
      <HabitList habits={habits} />
      <Quote quote={quote} />
    </>
  );
}

export default Home;

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  await createHabit(data);
  return redirect("/");
}
