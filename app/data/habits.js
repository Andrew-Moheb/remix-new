import prisma from "./database.server";

export async function createHabit(data) {
  try {
    const newHabit = await prisma.habit.create({ data });
    return newHabit;
  } catch (error) {
    console.error(error);
    throw new Response("failure in adding habit to dataBase 🙁");
  }
}

export async function getHabits() {
  try {
    const habits = await prisma.habit.findMany();
    return habits;
  } catch (error) {
    console.error(error);
    throw new Response("we couldn't find the habits", { status: 403 });
  }
}

export async function deleteHabit(id) {
  try {
    return await prisma.habit.delete({
      where: { id },
    });
  } catch (error) {
    console.error("Error deleting habit:", error);
    throw new Response("we couldn't delete the habit", { status: 409 });
  }
}

export async function updateHabit(id, data) {
  try {
    const updatedHabit = await prisma.habit.update({
      where: { id },
      data,
    });
    return updatedHabit;
  } catch (error) {
    console.error("Error deleting habit:", error);
    throw new Response("'we couldn't update the habit", { status: 408 });
  }
}

export async function uniqueHabit(id) {
  try {
    const specificHabit = await prisma.habit.findUnique({
      where: { id: id },
    });
    return specificHabit;
  } catch (error) {
    console.error("we is the error");
    throw new Error(`we couldn't find the habit`, { status: 403 });
  }
}
