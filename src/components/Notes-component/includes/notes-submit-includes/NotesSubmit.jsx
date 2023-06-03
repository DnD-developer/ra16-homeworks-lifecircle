import uuid4 from "uuid4"
import "./NotesSubmit.css"

export default function NotesSubmit({ text, onSubmit, onInput }) {
	const onSubmitHandler = event => {
		event.preventDefault()

		const id = uuid4()

		onSubmit(text, id)
	}

	const onChangehandler = ({ target }) => {
		const { value } = target
		onInput(value)
	}

	return (
		<form name="notes submit form" className="notes-submit" onSubmit={onSubmitHandler}>
			<h2 className="notes-submit__title">New Note</h2>
			<textarea
				className="notes-submit__text"
				name="notes submit text"
				cols="30"
				rows="10"
				placeholder="Введите текст заметки"
				onChange={onChangehandler}
				value={text}></textarea>
			<button className="notes-submit__btn" type="submit">
				<span className="material-symbols-outlined">send</span>
			</button>
		</form>
	)
}
