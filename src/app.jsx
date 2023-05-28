import React from "react"
import ReactDOM from "react-dom/client"
import Widjet from "./components/Widget"
import dayjs from "dayjs"

import "../node_modules/dayjs/plugin/utc.js"
import "../node_modules/dayjs/plugin/timezone.js"

dayjs.extend(window.dayjs_plugin_utc)
dayjs.extend(window.dayjs_plugin_timezone)

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<Widjet />
	</>
)
