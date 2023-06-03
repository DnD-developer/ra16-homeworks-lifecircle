import "./Notes.css"
import NotesSubmit from "./includes/notes-submit-includes/NotesSubmit"
import NotesList from "./includes/notes-list-includes/NotesList"
import { useState } from "react"
import { useEffect } from "react"

export default function Notes() {
	const [notes, setNotes] = new useState([])
	const [sending, setSending] = new useState(true)
	const [textInput, setTextInput] = new useState("")

	useEffect(() => {
		console.log(1)
		if (sending) {
			getNotes()
		}
	}, [sending])

	const url = "https://back-test-of01.onrender.com"

	const getNotes = async () => {
		try {
			const response = await fetch(`${url}/notes`)

			if (!response.ok) {
				throw new Error("Ошибка запроса данных")
			}

			const newNotes = await response.json()

			setNotes(newNotes)
		} catch (error) {
			console.log(error)
		} finally {
			setSending(false)
		}
	}

	const postNotes = async (text, id) => {
		const newNote = { id, text }
		try {
			const response = await fetch(`${url}/notes`, {
				method: "POST",
				body: JSON.stringify(newNote),
				headers: { "Content-Type": "application/json" }
			})

			if (!response.ok) {
				throw new Error("Ошибка отправки данных")
			}

			setTextInput("")
			setSending(true)
		} catch (error) {
			console.log(error)
		}
	}

	const onInput = text => setTextInput(text)

	const onRemove = async id => {
		try {
			const response = await fetch(`${url}/notes/${id}`, {
				method: "DELETE"
			})

			if (!response.ok) {
				throw new Error("Ошибка отправки данных")
			}
			setSending(true)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<section className="notes">
			<div className="notes__top">
				<h1 className="notes__title">Notes</h1>
				<button className="notes__reload" onClick={getNotes}>
					<span className="material-symbols-outlined">restart_alt</span>
				</button>
			</div>

			<NotesList notes={notes} onRemove={onRemove} />

			<NotesSubmit onInput={onInput} text={textInput} onSubmit={postNotes} />
		</section>
	)
}
