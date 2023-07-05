
const Button = (props) => {
  return (
    <button onClick={props.clickHandler} type="submit" className="w-full px-6 py-2 border rounded hover:bg-slate-900">{props.cta}</button>
  )
}

export default Button