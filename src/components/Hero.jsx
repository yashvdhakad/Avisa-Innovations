import Button from "./Button"

const Hero = () => {
    const h = "We Help Businesses with Innovative Tech & Design."
    const p = "We make superb budget-friendly websites for small to medium-sized businesses who want effective, user-friendly, and beautiful websites your customers will love."

    return (
        <section className="w-full h-full py-40 space-y-6 text-center flex flex-col justify-start items-center">
            <h1 className="w-[800px] text-7xl font-semibold text-zinc-100">{h}</h1>
            <p className="w-[600px] text-xl text-zinc-100/60">{p}</p>
            <div className="space-x-6">
                <Button cta="Services Pricing" arrow="→" url="" />
                <Button cta="Contact Me" url="" />
            </div>
        </section>
    )
}

export default Hero