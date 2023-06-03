import { useState, useEffect } from "react"
import calcTime from "../../../../service/calcTime"
import "./Clock.css"

export default function Clock({ clock, onClose }) {
	const [state, setState] = new useState(clock)

	const onCloseHandler = evt => {
		onClose(evt, clock.id)
	}

	const onUpdateTime = () => {
		const intervalId = setInterval(() => {
			setState(prev => ({ ...prev, time: calcTime(clock.shift) }))
			console.log(clock.id)
		}, 1000)

		return intervalId
	}

	useEffect(() => {
		const intervalId = onUpdateTime()

		return () => {
			clearInterval(intervalId)
		}
	}, [])

	return (
		<li className="clocks__item">
			<h2 className="clocks__item-title">{clock.city}</h2>
			<span className="clocks__item-time">{state.time}</span>
			<button className="clocks__item-close" onClick={onCloseHandler}>
				<span className="material-symbols-outlined">close</span>
			</button>
		</li>
	)
}
