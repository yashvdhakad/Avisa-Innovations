const Button = (props) => {
  return (
    <button className={`px-8 py-3 border rounded-lg font-medium text-lg text-zinc-200 transition-all ${props.cta === "Contact Me" ? "border-0 hover:border-b" : "hover:bg-zinc-200 hover:text-zinc-950"}`}><a href={props.url}>{props.cta} <span className="animate-ping">{props.arrow}</span></a></button>

  )
}

export default Button