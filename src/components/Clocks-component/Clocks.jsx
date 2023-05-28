import "./Clocks.css"
import Clock from "./includes/Clock-include/Clock"

export default function Clocks({ clocks, onClose }) {
	return (
		<div className="clocks">
			<ul className="clocks__list">
				{clocks.map(clock => (
					<Clock key={clock.id} clock={clock} onClose={onClose} />
				))}
			</ul>
		</div>
	)
}
