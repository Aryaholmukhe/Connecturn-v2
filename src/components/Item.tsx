"use client"

type ItemProps = {
    id: string,
    name: string,
    description: string,
    link: string,
    connecturn: string,
    type: string,
    location: string,
    cost: number,
    age: string,
    dueDate: string,
    complete: boolean,
    toggleItem: (id: string, complete: boolean) => void
}
// id          String   @id @default(uuid())
// name        String
// description String
// link        String
// connecturn  String
// type        String
// location    String
// cost        Int
// age         String
// dueDate     String
// complete    Boolean
// createdAt   DateTime @default(now())
// updatedAt   DateTime @updatedAt
// }

export function Item({ id, name, type, location, cost, complete, age, toggleItem }: ItemProps) {
    return (
        // <li className="flex gap-1 items-center">
        //     <input
        //         id={id}
        //         type="checkbox"
        //         className="cursor-pointer peer"
        //         defaultChecked={complete}
        //         onChange={e => toggleItem(id, e.target.checked)} />
        //     <label
        //         htmlFor={id}
        //         className="peer-checked:line-through">
        //         Name: {name}
        //     </label>
        //     <label>type: {type}</label>
        //     <label>location: {location}</label>
        //     <label>cost: {cost}</label>
        //     <label>age: {age}</label>
        // </li>

        <section className="rounded overflow-hidden shadow-lg border-2 border-c-white">
            <img className="w-full h-2/5" src="https://c8.alamy.com/comp/2F22CN9/harvard-university-logo-2F22CN9.jpg" alt="Sunset in the mountains"/>
                
            <hr/>
                <div className="p-6">
                <h1>Name: {name}</h1>
                <h2>Description: course which is beginner level to teach you about Computer Science</h2>
                <p>Link: <a href="https://manual.cs50.io/">https://manual.cs50.io/</a></p>
                <p>Type:  {type}</p>
                <p>Location: {location}</p>
                <p>Cost: {cost}</p>
                <p>Age: {age}</p>
                <input
                    id={id}
                    type="checkbox"
                    className="cursor-pointer peer"
                    defaultChecked={complete}
                    onChange={e => toggleItem(id, e.target.checked)} />
                    </div>
        </section>
    )
}