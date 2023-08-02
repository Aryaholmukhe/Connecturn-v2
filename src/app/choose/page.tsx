import Link from "next/link"

export default function Page(){
    return(
        <>
                
            <header className="overflow-hidden text-center">
            <div className="green bg-c-aqua"></div>
                <div className="orange bg-orange-accent"></div>
                <div className="pink bg-pink-accent"></div>
                <h1>Are you a Student or a Business?</h1>
            </header>
            <main className="flex text-center ">

                <section className="grow bg-pink-accent">
                    <Link href="/student">Student</Link>
                </section>
                <section className="grow bg-c-aqua">
                    <Link href="/business">Business</Link>
                </section>

                
            </main>
        </>
    )
}