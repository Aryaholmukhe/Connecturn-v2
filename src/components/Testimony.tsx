type TestimonyProps = {
    info: string,
    name: string,
    role: string,
    company: string
}

export default function Testimony({info, name, role, company}: TestimonyProps){
    return(
        <>
        <figure className="max-w-screen-md">

    <blockquote>
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">{info}</p>
    </blockquote>
    <figcaption className="flex items-center mt-6 space-x-3">
    {/* <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture"> */}
        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-gray-900 dark:text-white">{name}</cite>
            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">{role} at {company}</cite>
        </div>
    </figcaption>
</figure>
        </>
    )
}