import Link from "next/link"
import { prisma } from "@/db"
import {redirect} from "next/navigation"

async function createTodo(data: FormData) {
    "use server"
  // Assuming databaseKeys is an array of valid keys
  const databaseKeys = ['name', 'description', 'link', 'type', 'location', 'cost', 'age', 'dueDate', 'connecturn'];

  const todoData: any = {}; // Create a new object to hold the data

  for (let i = 0; i < databaseKeys.length; i++) {
    const value = data.get(databaseKeys[i])?.valueOf();
    if (typeof value !== 'string' || value.length === 0) {
      throw new Error(`Invalid: ${databaseKeys[i]}`);
    }

    todoData[databaseKeys[i]] = value; // Use computed property name to dynamically create properties
  }

  todoData.complete = false; // Add the 'complete' property separately

  await prisma.todo.create({ data: todoData });

  redirect("/cdatabase");
}


export default function Page(){
    return(
            <>
                <header><h1>New</h1></header>
                <form action={createTodo}>
                    <label>Name:</label>
                    <input type="text" name="name" className="border-solid border-2 border-sky-500 m-4"/>
                    <label>desc:</label>
                    <input type="text" name="description" className="border-solid border-2 border-sky-500 m-4"/>
                    <label>link:</label>
                    <input type="text" name="link" className="border-solid border-2 border-sky-500 m-4"/>
                    <label>type:</label>
                    <input type="text" name="type" className="border-solid border-2 border-sky-500 m-4"/>
                    <label>location:</label>
                    <input type="text" name="location" className="border-solid border-2 border-sky-500 m-4"/>
                    <label>cost:</label>
                    <input type="text" name="cost" className="border-solid border-2 border-sky-500 m-4"/>
                    <label>age:</label>
                    <input type="text" name="age" className="border-solid border-2 border-sky-500 m-4"/>
                    <label>due:</label>
                    <input type="text" name="dueDate" className="border-solid border-2 border-sky-500 m-4"/>
                    <label>connecturn:</label>
                    <input type="text" name="connecturn" className="border-solid border-2 border-sky-500 m-4"/>
                    <div>
                        <Link className="border-solid border-2 border-red-500 m-4 p-2" href="..">Cancel</Link>
                        <button className="border-solid border-2 border-green-500 m-4 p-2" type="submit">Create</button>
                    </div>
                </form>

            </>
        )
}
