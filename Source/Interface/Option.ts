import type CSS from "./CSS.js";
import type HTML from "./HTML.js";
import type Image from "./Image/Option.js";
import type JavaScript from "./JavaScript.js";
import type _Map from "./Map.js";
import type SVG from "./SVG.js";

import type { Option as _Option } from "files-pipe";

export default interface Type extends _Option {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;

	/**
	 * csso option properties
	 */
	CSS?: boolean | CSS;

	/**
	 * html-minifier-terser option properties
	 */
	HTML?: boolean | HTML;

	/**
	 * sharp option properties
	 */
	Image?: boolean | Image;

	/**
	 * terser option properties
	 */
	JavaScript?: boolean | JavaScript;

	/**
	 * svgo option properties
	 */
	SVG?: boolean | SVG;

	/**
	 * Map to different file paths
	 */
	Map?: boolean | _Map;
}
