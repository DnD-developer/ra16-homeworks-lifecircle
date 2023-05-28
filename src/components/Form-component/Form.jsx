import "./Form.css"
import Input from "./includes/Input-includes/Input"

export default function Form({ onSubmit, stateInputName, onChangeInputName, stateInpuTimeZone, onChangeInpuTimeZone }) {
	return (
		<>
			<form name="from-time-zone" className="form" onSubmit={onSubmit}>
				<Input title={"Название"} name={"input-name"} input={stateInputName} onChange={onChangeInputName} />

				<Input title={"Временная зона"} name={"input-time-zone"} input={stateInpuTimeZone} onChange={onChangeInpuTimeZone} />

				<button className="btn-submit">Добавить</button>
			</form>
		</>
	)
}
