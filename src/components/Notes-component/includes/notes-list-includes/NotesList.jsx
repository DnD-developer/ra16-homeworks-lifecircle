import "./NotesList.css"
import NotesItem from "../notes-item-includes/NotesItem"

export default function NotesList({ notes, onRemove }) {
	return (
		<ul className="notes-list">
			{notes.map(note => (
				<NotesItem key={note.id} {...note} onRemove={onRemove} />
			))}
		</ul>
	)
}
