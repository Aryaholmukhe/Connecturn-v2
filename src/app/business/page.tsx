import Link from "next/link"
import Navbar from "../../components/Navbar"
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
                            Description about connecturn business people and maybe implement the
                            form in this page.
                        </h2>
                        <Link href="/" className="m-4 rounded p-3 bg-c-pink hover:bg-c-white hover:text-c-black hover:ring-2 ring-c-pink w-full">Join Now</Link>
                    </div>
                </header>
                <main className="mt-4 text-center sm:m-28">
                    <section className="m-8 my-20 text-left sm:text-center">
                        <header className="my-4 sm:text-left sm:mb-20">
                            <h2 className="text-2xl sm:text-3xl">THE <i>VALUE</i> FOR YOU:</h2>
                            <h3 className="m-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, </h3>
                        </header>
                        <div className="sm:flex m-3 sm-m-7">
                            <div className="p-4 grow">Image</div>
                            <div className="grow p-4">
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                                <li>Lorem</li>
                                <li>Ipsum</li>
                                <li>Hehehe</li>
                            </div>
                        </div>
                        <div className="sm:flex m-3">
                            <div className="grow p-4">
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                                <li>Lorem</li>
                                <li>Ipsum</li>
                                <li>Hehehe</li>
                            </div>
                            <div className="p-4 grow">Image</div>
                        </div>
                    </section>
                    <section className="m-8 my-20">
                        <header className="my-4 text-left sm:my-20">
                            <h2 className="text-2xl">SEE WHAT PAST BUSINESS OWNERS SAY ABOUT US:</h2>
                        </header>
                        <div className="sm:flex m-3">
                            <div className="p-4 grow">Image</div>
                            <div className="grow">
                                <p className="p-2">“Helped us gain real value and connecting with students was real fun”</p>
                                <hr />
                                <p className="p-2 text-left">-- Someone Name, CEO at coolio.com</p>
                            </div>
                        </div>
                        <div className="sm:flex m-3">
                            <div className="p-4 grow">Image</div>
                            <div className="grow">
                                <p className="p-2">“Helped us gain real value and connecting with students was real fun”</p>
                                <hr />
                                <p className="p-2 text-left">-- Someone Name, CEO at coolio.com</p>
                            </div>
                        </div>
                    </section>
                </main>

            </>
            )
}