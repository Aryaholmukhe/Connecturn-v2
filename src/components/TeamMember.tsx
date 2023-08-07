type TeamProps ={
    name: string,
    role: string,
    description: string
    link: string
}
export default function Page({name, role, description, link}: TeamProps){
    return(
        <section className="p-4 m-auto w-5/6 sm:1/4">
           
            <img  src={link} alt="Girl in a jacket" className="rounded-md text-center"/>
            <div className="py-2 text-lg text-c-white">
                <div className="py-3">
                <h1 className="font-bold text-3xl ">{name}</h1>
            <h2 className="text-c-grey">{role}</h2>
                </div>
            
            <p className="text-c-grey">{description}</p>
            </div>
        </section>
    )
}