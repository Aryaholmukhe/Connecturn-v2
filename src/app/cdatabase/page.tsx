import Link from "next/link"
import {prisma} from "@/db"
import {TodoItem} from "../../components/TodoItem"

  function getTodos(){
    return prisma.todo.findMany()
  }

  async function toggleTodo(id: string, complete: boolean){
    "use server"

    await prisma.todo.update({where: {id}, data: {complete}})
  }

export default async function Page() {

  const todos = await getTodos()
  // await prisma.todo.create({data: {title: "test", complete: false}})

  return (
    <>
      <header>
        <h1>To do</h1>
        <Link href="/new"> New </Link>
      </header>
      <ul className="pl-4">
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>

  )
}