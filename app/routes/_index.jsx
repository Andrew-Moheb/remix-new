import { getHabits } from "~/data/habits";
import Home from "./home";
import { getQuote } from "~/data/fetch";

export default function Main() {
  return (
    <div>
      <Home />
    </div>
  );
}

export async function loader() {
  const habits = await getHabits();
  const quote = await getQuote();
  return [habits, quote];
}
