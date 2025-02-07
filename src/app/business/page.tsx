import Link from "next/link"
import Navbar from "../../components/Navbar"
import Testimony from "../../components/Testimony"
export default function Page() {
    return (
        <>
            <Navbar></Navbar>
                <div className="green bg-c-aqua"></div>
                <div className="orange bg-orange-accent"></div>
                <div className="pink bg-pink-accent"></div>
                <header className="flex mb-20">
                    <div className="grow m-10 text-left content-center sm:text-center">
                        <h1 className="mt-20 text-5xl sm:text-7xl">Do you identify as a Business?</h1>
                        <h2 className="m-4 mb-10 text-xl sm:text-2xl sm:p-4 sm:w-3/4 sm:mx-auto">
                           Grow your business and find opportunities with Connecturn.
                        </h2>
                        <Link href="/" className="m-4 rounded p-3 bg-c-pink hover:bg-c-white hover:text-c-black hover:ring-2 ring-c-pink w-full">Join Now</Link>
                    </div>
                </header>
                <main className="mt-4 text-center sm:m-28">
                    <section className="m-8 my-20 text-left sm:text-center">
                        <header className="my-4 sm:text-left sm:mb-20">
                            <h2 className="text-2xl sm:text-3xl">THE <i>VALUE</i> FOR YOU:</h2>
                            <h3 className="m-3">What benefit can you receive from Connect and why you should join us:</h3>
                        </header>
                        <div className="sm:flex m-3 sm-m-7">
                            <div className="p-4 grow">Image</div>
                            <div className="grow p-4">
                                <h4>Connection with enthusiastic and talented students, which you can find:</h4>
                                <li>Audiences</li>
                                <li>Volunteers</li>
                                <li>Interns</li>
                            </div>
                        </div>
                        <div className="sm:flex m-3">
                            <div className="grow p-4">
                                <h4>Host and advertise events to other students and businesses.</h4>
                                {/* <li>Lorem</li>
                                <li>Ipsum</li>
                                <li>Hehehe</li> */}
                            </div>
                            <div className="p-4 grow">Image</div>
                        </div>
                        <div className="sm:flex m-3 sm-m-7">
                            <div className="p-4 grow">Image</div>
                            <div className="grow p-4">
                                <h4>Network and meet other business collaborators and receive new, creative ideas.</h4>
                            </div>
                        </div>
                    </section>
                    <section className="m-8 my-20">
                        <header className="my-4 text-left sm:my-20">
                            <h2 className="text-2xl">SEE WHAT PAST BUSINESS OWNERS SAY ABOUT US:</h2>
                        </header>
                        <Testimony 
                        info="r" 
                        name="r" 
                        role="r" 
                        company="r"
                        />
                       <Testimony 
                        info="r" 
                        name="r" 
                        role="r" 
                        company="r"
                        />
                    </section>
                    <section>
                    <iframe className="m-auto" src="https://docs.google.com/forms/d/e/1FAIpQLScgfWQcO0h5kTJFvkp3XAa36ZStp1-Y8inWGi7XMFD-Fp7WCA/viewform?embedded=true"
                     width="640" 
                     height="2111">Loading…</iframe>
                    </section>
                </main>

            </>
            )
}