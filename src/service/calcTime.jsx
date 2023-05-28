import dayjs from "dayjs"

export default function calcTime(shift) {
	const nowTime = dayjs()
	const grinvichTime = nowTime.subtract(3, "h")

	if (shift > 0) {
		return grinvichTime.add(shift, "h").format("HH:mm:ss")
	}

	return grinvichTime.subtract(Math.abs(shift), "h").format("HH:mm:ss")
}
