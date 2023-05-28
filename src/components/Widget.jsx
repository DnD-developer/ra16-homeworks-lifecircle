import Form from "./Form-component/Form"
import Clocks from "./Clocks-component/Clocks"
import uuid4 from "uuid4"
import { useState, useEffect } from "react"
import calcTime from "../service/calcTime"

export default function Widjet() {
	const data = []

	const [stateData, setStateData] = new useState(data)
	const [stateInputName, setStateInputName] = new useState("")
	const [stateInpuTimeZone, setStateInpuTimeZone] = new useState("")

	useEffect(() => {
		const intervalId = onUpdateTime()

		return () => {
			clearInterval(intervalId)
		}
	}, [])

	const onChangeInputName = text => {
		if (text.length === 1) {
			if (/^[A-Z]/.test(text)) {
				setStateInputName(text)
			}

			return
		}

		if (text.length > 1) {
			if (/^[A-Z][a-z]+$/.test(text)) {
				setStateInputName(text)
			}
			return
		}

		setStateInputName(text)
	}

	const onChangeInpuTimeZone = text => {
		if (text.length === 1) {
			if (/^[\+\-]$/.test(text)) {
				setStateInpuTimeZone(text)
			}
			return
		}

		if (text.length === 2) {
			if (/^[\+\-]\d$/.test(text)) {
				setStateInpuTimeZone(text)
			}
			return
		}

		if (text.length < 4 && +text < 12 && +text > -12) {
			setStateInpuTimeZone(text)
		}
	}

	const onSubmit = evt => {
		evt.preventDefault()

		if (stateInputName.length != 0 && stateInpuTimeZone.length > 1) {
			const newTimeZone = {
				id: uuid4(),
				city: stateInputName,
				shift: +stateInpuTimeZone,
				time: calcTime(+stateInpuTimeZone)
			}

			setStateData(prev => [...prev, newTimeZone])
			setStateInpuTimeZone("")
			setStateInputName("")
		}
	}

	const onClose = (evt, id) => {
		evt.preventDefault()

		setStateData(clocks => clocks.filter(clock => clock.id !== id))
	}

	const onUpdateTime = () => {
		const intervalId = setInterval(() => {
			setStateData(prev => prev.map(clock => ({ ...clock, time: calcTime(clock.shift) })))
		}, 1000)

		return intervalId
	}

	const stateInputs = {
		stateInputName,
		onChangeInputName,
		stateInpuTimeZone,
		onChangeInpuTimeZone
	}

	return (
		<>
			<section className="widget-time-zone">
				<Form onSubmit={onSubmit} {...stateInputs} />
				<Clocks clocks={stateData} onClose={onClose} />
			</section>
		</>
	)
}
