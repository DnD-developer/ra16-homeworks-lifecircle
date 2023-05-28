import "./Input.css"

export default function Input({ title, name, input, onChange }) {
	const OnChangeHandler = ({ target }) => {
		const { value } = target
		onChange(value)
	}

	return (
		<label className="label" name={name}>
			<h2 className="title">{title}</h2>
			<input type="text" name={name} className="input" onChange={OnChangeHandler} placeholder={title == "Название" ? "Moscow" : "+3"} value={input} />
		</label>
	)
}
