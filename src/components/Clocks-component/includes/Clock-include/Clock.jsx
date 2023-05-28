import "./Clock.css"

export default function Clock({ clock, onClose }) {
	const onCloseHandler = evt => {
		onClose(evt, clock.id)
	}

	return (
		<li className="clocks__item">
			<h2 className="clocks__item-title">{clock.city}</h2>
			<span className="clocks__item-time">{clock.time}</span>
			<button className="clocks__item-close" onClick={onCloseHandler}>
				<span className="material-symbols-outlined">close</span>
			</button>
		</li>
	)
}
