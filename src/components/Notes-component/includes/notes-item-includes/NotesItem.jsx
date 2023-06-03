import "./NotesItem.css"

export default function NotesItem({ text, id, onRemove }) {
	const onRemoveHandler = () => {
		onRemove(id)
	}

	return (
		<li className="notes-item" data-id={id}>
			<p className="notes-item__text">{text}</p>
			<button className="notes-item__close" onClick={onRemoveHandler}>
				<span className="material-symbols-outlined">close</span>
			</button>
		</li>
	)
}
