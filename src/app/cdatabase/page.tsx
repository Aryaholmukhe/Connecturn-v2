import Link from "next/link"
import { prisma } from "@/db"
import { Item } from "../../components/Item"

function getItem() {
  return prisma.todo.findMany()
}

async function toggleItem(id: string, complete: boolean) {
  "use server"

  await prisma.todo.update({ where: { id }, data: { complete } })
}

export default async function Page() {

  const items = await getItem()
  // await prisma.todo.create({data: {title: "test", complete: false}})
  //  await prisma.todo.deleteMany({}) //delete all items
  return (
    <>
      <header>
        {/* <Link href="/new"> New </Link> */}
      </header>
      <ul className="pl-4 grid gap-7 lg:grid-cols-3 ">
        {items.map(item => (
          <Item key={item.id} {...item} toggleItem={toggleItem} />
        ))}
      </ul>
    </>

  )
}


