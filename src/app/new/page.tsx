import Link from "next/link"
import { prisma } from "@/db"
import {redirect} from "next/navigation"

async function createTodo(data: FormData){
    "use server"
    const title = data.get('title')?.valueOf()
    if(typeof title !== 'string' || title.length === 0){
        throw new Error(`Invalid title`)
    }

    await prisma.todo.create({data: {title, complete: false}})
    redirect("/cdatabase")
}

export default function Page(){
    return(
            <>
                <header><h1>New</h1></header>
                <form action={createTodo}>
                    <input type="text" name="title" className="border-solid border-2 border-sky-500 m-4"/>
                    <div>
                        <Link className="border-solid border-2 border-red-500 m-4 p-2" href="..">Cancel</Link>
                        <button className="border-solid border-2 border-green-500 m-4 p-2" type="submit">Create</button>
                    </div>
                </form>

            </>
        )
}