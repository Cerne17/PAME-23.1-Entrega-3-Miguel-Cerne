<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>CAPACITAÇÃO 3: NESTJS</title><style>
/* cspell:disable-file */
/* webkit printing magic: print all background colors */
html {
	-webkit-print-color-adjust: exact;
}
* {
	box-sizing: border-box;
	-webkit-print-color-adjust: exact;
}

html,
body {
	margin: 0;
	padding: 0;
}
@media only screen {
	body {
		margin: 2em auto;
		max-width: 900px;
		color: rgb(55, 53, 47);
	}
}

body {
	line-height: 1.5;
	white-space: pre-wrap;
}

a,
a.visited {
	color: inherit;
	text-decoration: underline;
}

.pdf-relative-link-path {
	font-size: 80%;
	color: #444;
}

h1,
h2,
h3 {
	letter-spacing: -0.01em;
	line-height: 1.2;
	font-weight: 600;
	margin-bottom: 0;
}

.page-title {
	font-size: 2.5rem;
	font-weight: 700;
	margin-top: 0;
	margin-bottom: 0.75em;
}

h1 {
	font-size: 1.875rem;
	margin-top: 1.875rem;
}

h2 {
	font-size: 1.5rem;
	margin-top: 1.5rem;
}

h3 {
	font-size: 1.25rem;
	margin-top: 1.25rem;
}

.source {
	border: 1px solid #ddd;
	border-radius: 3px;
	padding: 1.5em;
	word-break: break-all;
}

.callout {
	border-radius: 3px;
	padding: 1rem;
}

figure {
	margin: 1.25em 0;
	page-break-inside: avoid;
}

figcaption {
	opacity: 0.5;
	font-size: 85%;
	margin-top: 0.5em;
}

mark {
	background-color: transparent;
}

.indented {
	padding-left: 1.5em;
}

hr {
	background: transparent;
	display: block;
	width: 100%;
	height: 1px;
	visibility: visible;
	border: none;
	border-bottom: 1px solid rgba(55, 53, 47, 0.09);
}

img {
	max-width: 100%;
}

@media only print {
	img {
		max-height: 100vh;
		object-fit: contain;
	}
}

@page {
	margin: 1in;
}

.collection-content {
	font-size: 0.875rem;
}

.column-list {
	display: flex;
	justify-content: space-between;
}

.column {
	padding: 0 1em;
}

.column:first-child {
	padding-left: 0;
}

.column:last-child {
	padding-right: 0;
}

.table_of_contents-item {
	display: block;
	font-size: 0.875rem;
	line-height: 1.3;
	padding: 0.125rem;
}

.table_of_contents-indent-1 {
	margin-left: 1.5rem;
}

.table_of_contents-indent-2 {
	margin-left: 3rem;
}

.table_of_contents-indent-3 {
	margin-left: 4.5rem;
}

.table_of_contents-link {
	text-decoration: none;
	opacity: 0.7;
	border-bottom: 1px solid rgba(55, 53, 47, 0.18);
}

table,
th,
td {
	border: 1px solid rgba(55, 53, 47, 0.09);
	border-collapse: collapse;
}

table {
	border-left: none;
	border-right: none;
}

th,
td {
	font-weight: normal;
	padding: 0.25em 0.5em;
	line-height: 1.5;
	min-height: 1.5em;
	text-align: left;
}

th {
	color: rgba(55, 53, 47, 0.6);
}

ol,
ul {
	margin: 0;
	margin-block-start: 0.6em;
	margin-block-end: 0.6em;
}

li > ol:first-child,
li > ul:first-child {
	margin-block-start: 0.6em;
}

ul > li {
	list-style: disc;
}

ul.to-do-list {
	padding-inline-start: 0;
}

ul.to-do-list > li {
	list-style: none;
}

.to-do-children-checked {
	text-decoration: line-through;
	opacity: 0.375;
}

ul.toggle > li {
	list-style: none;
}

ul {
	padding-inline-start: 1.7em;
}

ul > li {
	padding-left: 0.1em;
}

ol {
	padding-inline-start: 1.6em;
}

ol > li {
	padding-left: 0.2em;
}

.mono ol {
	padding-inline-start: 2em;
}

.mono ol > li {
	text-indent: -0.4em;
}

.toggle {
	padding-inline-start: 0em;
	list-style-type: none;
}

/* Indent toggle children */
.toggle > li > details {
	padding-left: 1.7em;
}

.toggle > li > details > summary {
	margin-left: -1.1em;
}

.selected-value {
	display: inline-block;
	padding: 0 0.5em;
	background: rgba(206, 205, 202, 0.5);
	border-radius: 3px;
	margin-right: 0.5em;
	margin-top: 0.3em;
	margin-bottom: 0.3em;
	white-space: nowrap;
}

.collection-title {
	display: inline-block;
	margin-right: 1em;
}

.page-description {
    margin-bottom: 2em;
}

.simple-table {
	margin-top: 1em;
	font-size: 0.875rem;
	empty-cells: show;
}
.simple-table td {
	height: 29px;
	min-width: 120px;
}

.simple-table th {
	height: 29px;
	min-width: 120px;
}

.simple-table-header-color {
	background: rgb(247, 246, 243);
	color: black;
}
.simple-table-header {
	font-weight: 500;
}

time {
	opacity: 0.5;
}

.icon {
	display: inline-block;
	max-width: 1.2em;
	max-height: 1.2em;
	text-decoration: none;
	vertical-align: text-bottom;
	margin-right: 0.5em;
}

img.icon {
	border-radius: 3px;
}

.user-icon {
	width: 1.5em;
	height: 1.5em;
	border-radius: 100%;
	margin-right: 0.5rem;
}

.user-icon-inner {
	font-size: 0.8em;
}

.text-icon {
	border: 1px solid #000;
	text-align: center;
}

.page-cover-image {
	display: block;
	object-fit: cover;
	width: 100%;
	max-height: 30vh;
}

.page-header-icon {
	font-size: 3rem;
	margin-bottom: 1rem;
}

.page-header-icon-with-cover {
	margin-top: -0.72em;
	margin-left: 0.07em;
}

.page-header-icon img {
	border-radius: 3px;
}

.link-to-page {
	margin: 1em 0;
	padding: 0;
	border: none;
	font-weight: 500;
}

p > .user {
	opacity: 0.5;
}

td > .user,
td > time {
	white-space: nowrap;
}

input[type="checkbox"] {
	transform: scale(1.5);
	margin-right: 0.6em;
	vertical-align: middle;
}

p {
	margin-top: 0.5em;
	margin-bottom: 0.5em;
}

.image {
	border: none;
	margin: 1.5em 0;
	padding: 0;
	border-radius: 0;
	text-align: center;
}

.code,
code {
	background: rgba(135, 131, 120, 0.15);
	border-radius: 3px;
	padding: 0.2em 0.4em;
	border-radius: 3px;
	font-size: 85%;
	tab-size: 2;
}

code {
	color: #eb5757;
}

.code {
	padding: 1.5em 1em;
}

.code-wrap {
	white-space: pre-wrap;
	word-break: break-all;
}

.code > code {
	background: none;
	padding: 0;
	font-size: 100%;
	color: inherit;
}

blockquote {
	font-size: 1.25em;
	margin: 1em 0;
	padding-left: 1em;
	border-left: 3px solid rgb(55, 53, 47);
}

.bookmark {
	text-decoration: none;
	max-height: 8em;
	padding: 0;
	display: flex;
	width: 100%;
	align-items: stretch;
}

.bookmark-title {
	font-size: 0.85em;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 1.75em;
	white-space: nowrap;
}

.bookmark-text {
	display: flex;
	flex-direction: column;
}

.bookmark-info {
	flex: 4 1 180px;
	padding: 12px 14px 14px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.bookmark-image {
	width: 33%;
	flex: 1 1 180px;
	display: block;
	position: relative;
	object-fit: cover;
	border-radius: 1px;
}

.bookmark-description {
	color: rgba(55, 53, 47, 0.6);
	font-size: 0.75em;
	overflow: hidden;
	max-height: 4.5em;
	word-break: break-word;
}

.bookmark-href {
	font-size: 0.75em;
	margin-top: 0.25em;
}

.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
.code { font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace; }
.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }
.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }
.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }
.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }
.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }
.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }
.pdf .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }
.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }
.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }
.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }
.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.highlight-default {
	color: rgba(55, 53, 47, 1);
}
.highlight-gray {
	color: rgba(120, 119, 116, 1);
	fill: rgba(120, 119, 116, 1);
}
.highlight-brown {
	color: rgba(159, 107, 83, 1);
	fill: rgba(159, 107, 83, 1);
}
.highlight-orange {
	color: rgba(217, 115, 13, 1);
	fill: rgba(217, 115, 13, 1);
}
.highlight-yellow {
	color: rgba(203, 145, 47, 1);
	fill: rgba(203, 145, 47, 1);
}
.highlight-teal {
	color: rgba(68, 131, 97, 1);
	fill: rgba(68, 131, 97, 1);
}
.highlight-blue {
	color: rgba(51, 126, 169, 1);
	fill: rgba(51, 126, 169, 1);
}
.highlight-purple {
	color: rgba(144, 101, 176, 1);
	fill: rgba(144, 101, 176, 1);
}
.highlight-pink {
	color: rgba(193, 76, 138, 1);
	fill: rgba(193, 76, 138, 1);
}
.highlight-red {
	color: rgba(212, 76, 71, 1);
	fill: rgba(212, 76, 71, 1);
}
.highlight-gray_background {
	background: rgba(241, 241, 239, 1);
}
.highlight-brown_background {
	background: rgba(244, 238, 238, 1);
}
.highlight-orange_background {
	background: rgba(251, 236, 221, 1);
}
.highlight-yellow_background {
	background: rgba(251, 243, 219, 1);
}
.highlight-teal_background {
	background: rgba(237, 243, 236, 1);
}
.highlight-blue_background {
	background: rgba(231, 243, 248, 1);
}
.highlight-purple_background {
	background: rgba(244, 240, 247, 0.8);
}
.highlight-pink_background {
	background: rgba(249, 238, 243, 0.8);
}
.highlight-red_background {
	background: rgba(253, 235, 236, 1);
}
.block-color-default {
	color: inherit;
	fill: inherit;
}
.block-color-gray {
	color: rgba(120, 119, 116, 1);
	fill: rgba(120, 119, 116, 1);
}
.block-color-brown {
	color: rgba(159, 107, 83, 1);
	fill: rgba(159, 107, 83, 1);
}
.block-color-orange {
	color: rgba(217, 115, 13, 1);
	fill: rgba(217, 115, 13, 1);
}
.block-color-yellow {
	color: rgba(203, 145, 47, 1);
	fill: rgba(203, 145, 47, 1);
}
.block-color-teal {
	color: rgba(68, 131, 97, 1);
	fill: rgba(68, 131, 97, 1);
}
.block-color-blue {
	color: rgba(51, 126, 169, 1);
	fill: rgba(51, 126, 169, 1);
}
.block-color-purple {
	color: rgba(144, 101, 176, 1);
	fill: rgba(144, 101, 176, 1);
}
.block-color-pink {
	color: rgba(193, 76, 138, 1);
	fill: rgba(193, 76, 138, 1);
}
.block-color-red {
	color: rgba(212, 76, 71, 1);
	fill: rgba(212, 76, 71, 1);
}
.block-color-gray_background {
	background: rgba(241, 241, 239, 1);
}
.block-color-brown_background {
	background: rgba(244, 238, 238, 1);
}
.block-color-orange_background {
	background: rgba(251, 236, 221, 1);
}
.block-color-yellow_background {
	background: rgba(251, 243, 219, 1);
}
.block-color-teal_background {
	background: rgba(237, 243, 236, 1);
}
.block-color-blue_background {
	background: rgba(231, 243, 248, 1);
}
.block-color-purple_background {
	background: rgba(244, 240, 247, 0.8);
}
.block-color-pink_background {
	background: rgba(249, 238, 243, 0.8);
}
.block-color-red_background {
	background: rgba(253, 235, 236, 1);
}
.select-value-color-interactiveBlue { background-color: rgba(35, 131, 226, .07); }
.select-value-color-pink { background-color: rgba(245, 224, 233, 1); }
.select-value-color-purple { background-color: rgba(232, 222, 238, 1); }
.select-value-color-green { background-color: rgba(219, 237, 219, 1); }
.select-value-color-gray { background-color: rgba(227, 226, 224, 1); }
.select-value-color-translucentGray { background-color: rgba(255, 255, 255, 0.0375); }
.select-value-color-orange { background-color: rgba(250, 222, 201, 1); }
.select-value-color-brown { background-color: rgba(238, 224, 218, 1); }
.select-value-color-red { background-color: rgba(255, 226, 221, 1); }
.select-value-color-yellow { background-color: rgba(253, 236, 200, 1); }
.select-value-color-blue { background-color: rgba(211, 229, 239, 1); }
.select-value-color-pageGlass { background-color: undefined; }
.select-value-color-washGlass { background-color: undefined; }

.checkbox {
	display: inline-flex;
	vertical-align: text-bottom;
	width: 16;
	height: 16;
	background-size: 16px;
	margin-left: 2px;
	margin-right: 5px;
}

.checkbox-on {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
}

.checkbox-off {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
}
	
</style></head><body><article id="bfb41df6-9bba-4189-9e9a-c823956000e9" class="page sans"><header><h1 class="page-title">CAPACITAÇÃO 3: NESTJS</h1><p class="page-description"></p></header><div class="page-body"><h1 id="2401a79e-682c-43af-81c6-297712cb00b4" class="block-color-red">1. First Steps:</h1><ul id="e76f79aa-e23f-47c3-861e-924a3e184766" class="bulleted-list"><li style="list-style-type:disc">For this First Steps guide we’ll build a basic <mark class="highlight-red"><strong>CRUD </strong></mark>(create, read, update and delete) application.</li></ul><ul id="01e8afac-3cd6-491f-ac51-0d2185d9f48a" class="bulleted-list"><li style="list-style-type:disc">NestJs is compatible with both: <strong><mark class="highlight-red">javascript </mark></strong>(for using node.js) and <mark class="highlight-red"><strong>typescript</strong></mark>.</li></ul><blockquote id="147349b6-2674-4244-8b66-75cce584832d" class="block-color-red_background">Prerequisites: Node.js (version ≥ 16)</blockquote><h2 id="70dcbc27-f3c9-4a19-85d6-32850a45d2d5" class="block-color-red">A. Setup:</h2><p id="5c6d560c-c026-41a1-95e5-977fd72ebfb3" class="">The installation is simple via the <mark class="highlight-red"><strong>Nest CLI. </strong></mark>To create the project in the prompt is as simple as inserting the following lines:</p><pre id="0b572b90-f5ee-4871-86f4-359bd22c8a06" class="code"><code>$ npm i -g @nestjs/cli
$ nest new project-name</code></pre><blockquote id="64688207-8164-4d7f-b816-b157bbb4060f" class="block-color-red_background"><strong>Nest CLI</strong> (command line interface) is a tool that helps the user to initialize the project, develop and maintain the Nest Application.
To install the Nest CLI, insert the following line in the prompt:
    $ npm install -g @nestjs/cli</blockquote><p id="fd2b7a98-3463-4a15-a84a-5a8337217e1a" class="">The <mark class="highlight-red"><strong>project-name</strong></mark> folder will be created, node modules and all the boilerplate files will be installed, and a <mark class="highlight-red"><strong>src/</strong></mark> directory will be added to the <mark class="highlight-red"><strong>project-name</strong></mark> folder, being populated with the core files of the project.</p><blockquote id="0ba5e378-9926-4648-b612-b32d33d13064" class="block-color-red_background"><strong>Contents of src:</strong>
app.controller.spec.ts
app.controller.ts
app.module.spec.ts
app.module.ts
app.service.ts
app.main.ts</blockquote><table id="0a06ab57-3f55-4657-99e8-1225cfa017e2" class="simple-table"><tbody><tr id="607bcf16-bd38-47d6-aaa5-aafb69369e20"><td id="SbM?" class=""><mark class="highlight-red"><strong>File</strong></mark></td><td id="n\LM" class=""><mark class="highlight-red"><strong>Use</strong></mark></td></tr><tr id="e09268bf-ac9e-4784-aef6-b860068461ea"><td id="SbM?" class="">app.controller.ts</td><td id="n\LM" class="">Basic controller with a single route</td></tr><tr id="a728f21b-b38b-488f-9a54-592411291377"><td id="SbM?" class="">app.controller.spec.ts</td><td id="n\LM" class="">The unit tests for the controller</td></tr><tr id="58293db5-ebcf-4c19-9207-2b10d59007d0"><td id="SbM?" class="">app.module.ts</td><td id="n\LM" class="">The root module of the application</td></tr><tr id="d796a166-e7d1-4493-8d19-6017f0e16624"><td id="SbM?" class="">app.service.ts</td><td id="n\LM" class="">Basic service with a single method</td></tr><tr id="85454a21-8f09-4752-ba8c-1d3a41672893"><td id="SbM?" class="">app.main.ts</td><td id="n\LM" class="">The entry file of the application. Uses the core function <mark class="highlight-red"><strong>NestFactory </strong></mark>to create a Nest application instance</td></tr></tbody></table><hr id="8585a93f-b30b-41b7-bfa1-f0d7f9a5d83d"/><p id="7df7e5e6-6442-423f-ac09-b0c98a8ebff3" class=""><mark class="highlight-red"><strong>main.ts:</strong></mark></p><p id="b5603f28-33e9-4a29-8909-f83df89dfcc1" class="">This file will bootstrap our application. (bootstraping a application means starting it with a few predefinitions on the local machine, getting it ready to receive the inputs).</p><pre id="0df96143-446c-4a8c-82e3-a7c5a5f7b5b2" class="code"><code>import { NestFactory } from &#x27;@nestjs/core&#x27;;
import { AppModule } from &#x27;./app.module&#x27;;

async function bootstrap () {
	const app = await NestFactory.create(AppModule);
	await app.listen(3000); // specifies the port the program will be initialized
}
bootstrap();</code></pre><p id="7068644d-7e56-444e-a2cc-73fd4d8444fc" class=""><mark class="highlight-red"><strong>NestFactory </strong></mark>makes a few static methods available, that allows the creation of an app instance. The <mark class="highlight-red"><strong>create()</strong></mark> method returns an application object, which fullfills the <mark class="highlight-red"><strong>INestApplication </strong></mark>interface. This object sets some usefull methods up. In the main.ts example above, we’re simply starting up our HTTP listener, which lets the application await for HTTP requests.</p><p id="13d7f796-97fa-4927-af50-33f741bcdab8" class="">It is encouraged that each module of the application has it’s own directory for development. It allows a cleaner, easier and more scallable development.</p><blockquote id="fec910d5-71ef-4fbe-8658-3368d7a9644d" class="block-color-red_background">Common Issue:
If the application is crashing on initialization and you want to avoid this error to fix an issue, sets the main.ts file as follows:<pre id="18b2235f-0e67-44eb-b07e-652c8955fa98" class="code"><code>NestFactory.create(AppModule, { abortOnError: false })</code></pre></blockquote><hr id="53f7c986-4f9f-4b6f-ae9f-e055f67fb294"/><h3 id="a4987e35-9b7d-4d9b-b281-a58ddbc8782d" class="block-color-red">I. Nest CLI:</h3><p id="1c85abb5-63b1-4f4e-9c11-815077016df9" class="">The basic workflow with the Nest CLI installed is done via the <mark class="highlight-red"><strong>nest  </strong></mark>keyword</p><p id="d83f1974-5e04-4a11-9ad1-211bd12904a8" class="">To get <mark class="highlight-red"><strong>help</strong></mark> directly in the prompt:</p><pre id="4b8fcdf0-6286-46b2-bff7-433184e366e9" class="code"><code>$ nest —help</code></pre><p id="5dabb3f0-f9f7-43ab-b13b-8f07fa7901cd" class="">To get help on a <mark class="highlight-red"><strong>specific topic</strong></mark>, follow the following pattern:</p><pre id="211c2f8f-b6eb-4feb-9795-e62dafafa487" class="code"><code>$ nest generate —help</code></pre><p id="3121f17f-8dea-4637-a16f-3a536995a6b5" class=""><mark class="highlight-red"><strong>(to get help for the generate command)</strong></mark></p><p id="b24b2c85-729e-4dbc-ace4-ad359cd61f6b" class="">The process to <mark class="highlight-red"><strong>create, build and run</strong></mark> a project on the develop mode:</p><pre id="959112c5-94a1-4c76-84ad-d7133c4b4341" class="code"><code>$ nest new my-nest-project
$ cd my-nest-project
$ npm run start:dev</code></pre><p id="f5df33aa-463a-4622-b6d5-641fc9110a89" class="">In the browser (or frontend simulator), open <strong><mark class="highlight-red"><a href="http://localhost:3000">http://localhost:3000</a></mark></strong><strong><mark class="highlight-red"> </mark></strong>to see the application running.</p><hr id="ca6ced1f-75d6-4ae1-ab9f-bac4ce61eb8f"/><p id="674a2359-3f91-4b52-94f7-37bc3994b3f5" class=""><mark class="highlight-red"><strong>Project Structure:</strong></mark></p><p id="b2a3ad73-1e9c-432a-bd40-866eb6f921f6" class="">When running <mark class="highlight-red"><strong>nest new</strong></mark>, Nest generates a folder with the project name specified by the user. The files that populates this folder are called <strong><mark class="highlight-red">standard mode</mark></strong>. Although, Nest also supports an alternate structure for managing multiple projects and libraries: <mark class="highlight-red"><strong>monorepo mode</strong></mark>. (monorepo mode addresses some specific complexities arised from this type of development)</p><table id="36e4eedb-b9eb-4ae6-99c0-b4035e26be81" class="simple-table"><tbody><tr id="3e738327-1103-48a6-95b6-dc426b9c391f"><td id="TiTr" class=""><mark class="highlight-red"><strong>Feature</strong></mark></td><td id="E_xx" class=""><mark class="highlight-red"><strong>Standard Mode</strong></mark></td><td id="oow;" class=""><mark class="highlight-red"><strong>Monorepo Mode</strong></mark></td></tr><tr id="25405c38-e574-4deb-b64e-701078bf93a7"><td id="TiTr" class="">Multiple Projects</td><td id="E_xx" class="">Separete file system structure</td><td id="oow;" class="">Single file structure</td></tr><tr id="60cda2dc-a34b-4a32-b10d-4a5d24a80ac0"><td id="TiTr" class=""><strong><mark class="highlight-red">node_modules</mark></strong> &amp;<strong><mark class="highlight-red"> package.json</mark></strong></td><td id="E_xx" class="">Separete Instances</td><td id="oow;" class="">Shared across monorepo</td></tr><tr id="706bfdc0-36a2-4f3b-8472-c095d150f2cf"><td id="TiTr" class="">Default compiler</td><td id="E_xx" class=""><mark class="highlight-red"><strong>tsc</strong></mark></td><td id="oow;" class=""><mark class="highlight-red"><strong>webpack</strong></mark></td></tr><tr id="ef1dc0cb-90ce-4bfe-84e3-4aed4c5b91a3"><td id="TiTr" class="">Compiler settings</td><td id="E_xx" class="">Specified separetely</td><td id="oow;" class="">Monorepo defaults that can be overridden per project</td></tr><tr id="7dda7843-aa5c-416c-8cb8-2dfdd6de7d33"><td id="TiTr" class="">Config like <mark class="highlight-red"><strong>.eslintrc.js</strong></mark>, <strong><mark class="highlight-red">.prettierrc</mark></strong>, …</td><td id="E_xx" class="">Specified separetely</td><td id="oow;" class="">Shared across monorepo</td></tr><tr id="4d4be583-649e-4215-b73f-5d480c11013e"><td id="TiTr" class=""><strong><mark class="highlight-red">nest build</mark></strong> and nest start commands</td><td id="E_xx" class="">Target defaults automatically to the (only) project in the context</td><td id="oow;" class="">Target defaults to the <mark class="highlight-red"><strong>default project</strong></mark> in the monorepo</td></tr><tr id="6e0ded32-3e99-4705-a8e8-539b0b36f5b4"><td id="TiTr" class="">Libraries</td><td id="E_xx" class="">Managed manually, usually via npm packaging</td><td id="oow;" class="">Built-in support, including path management and bundling</td></tr></tbody></table><hr id="c36470a6-8674-4dda-a2c7-038d19799619"/><p id="f1d8b0b0-7bce-440c-b9e5-2c9401a5b508" class=""><mark class="highlight-red"><strong>CLI command syntax:</strong></mark></p><p id="4153a725-7920-430f-b1d8-c9ce3487d014" class="">All <mark class="highlight-red"><strong>nest commands </strong></mark>follow the following format:</p><pre id="c6d08754-76bc-4c9e-a6da-9ca79e467c11" class="code"><code>$ nest commandOrAlias requiredArg [optionalArg] [options]</code></pre><p id="b5174960-4719-4730-a750-cce7171aa317" class="">Example:</p><pre id="57657ef0-1a6d-409c-acc0-1b0b75ca34c1" class="code"><code>$ nest new my-nest-project -—dry-run</code></pre><table id="c48c347e-e0a4-439c-ae7d-993614eb97ce" class="simple-table"><tbody><tr id="48df1e05-ab09-45c5-80d0-412bcc08925e"><td id="&gt;eXN" class=""><mark class="highlight-red"><strong>Command</strong></mark></td><td id="RJ~o" class=""><mark class="highlight-red"><strong>Alias</strong></mark></td><td id="]OzS" class=""><mark class="highlight-red"><strong>Description</strong></mark></td></tr><tr id="582105f3-a930-43cb-a833-6592d48b567d"><td id="&gt;eXN" class="">new</td><td id="RJ~o" class="">n</td><td id="]OzS" class="">Scaffolds a new <mark class="highlight-red"><strong>standard mode </strong></mark>application with all boilerplate needed to run</td></tr><tr id="18bf250b-5b70-496d-a895-93a3f1c97b97"><td id="&gt;eXN" class="">generate</td><td id="RJ~o" class="">g</td><td id="]OzS" class="">Generates and/or modifies files based on a schematic</td></tr><tr id="e9936a23-2d8c-4777-8e3b-f996c5021825"><td id="&gt;eXN" class="">build</td><td id="RJ~o" class=""></td><td id="]OzS" class="">Compiles an application or workspace into an output folder</td></tr><tr id="23b435f8-fcae-4385-8fc9-57f36b2e9b42"><td id="&gt;eXN" class="">start</td><td id="RJ~o" class=""></td><td id="]OzS" class="">Compiles and runs an application (or default project in a workspace)</td></tr><tr id="17dbc85b-933d-47e3-b708-5e69992da273"><td id="&gt;eXN" class="">add</td><td id="RJ~o" class=""></td><td id="]OzS" class="">Imports a library that has been packaged as a <mark class="highlight-red"><strong>nest library</strong></mark>, running its install schematic</td></tr><tr id="b793a2ae-da6a-48a6-a25f-23a314816b66"><td id="&gt;eXN" class="">info</td><td id="RJ~o" class="">i</td><td id="]OzS" class="">Displays information about installed nest packages and other helpful system info</td></tr></tbody></table><hr id="f2b3e68a-471d-4160-b435-39da57b00912"/><h2 id="5e095e7c-83a9-4695-8c21-0273c43fb022" class="block-color-red">B. Platform:</h2><p id="7e8bba39-3c16-4805-a503-85da6552cc79" class="">Nest is able to work with <mark class="highlight-red"><strong>any Node</strong></mark> <mark class="highlight-red"><strong>HTTP framework</strong></mark> once an adapter is created. Although, two platforms are supported straight <mark class="highlight-red"><strong>out of the box: express and fastify</strong></mark>. The user can choose the one that is best in it’s case.</p><table id="0fe5163c-110e-4fab-b4e0-0fe646aebe6e" class="simple-table"><tbody><tr id="e8dd5806-571f-48f9-9c4b-cb743db090aa"><td id="_o\f" class=""><mark class="highlight-red"><strong>Platform</strong></mark></td><td id="URB}" class=""><mark class="highlight-red"><strong>Description</strong></mark></td></tr><tr id="b64a502d-3e7c-4699-b1d6-71d7c50cc64c"><td id="_o\f" class="">platform-express</td><td id="URB}" class=""><mark class="highlight-red"><strong>Well-known</strong></mark> web framework for node. It’s  package is used by default (<mark class="highlight-red"><strong>@nestjs/platform-express</strong></mark>). It’s <mark class="highlight-red"><strong>production ready and easy</strong></mark> to use.</td></tr><tr id="8d9fbc29-4c94-411b-978b-c7c9c119bfaf"><td id="_o\f" class="">platform-fastify</td><td id="URB}" class=""><mark class="highlight-red"><strong>High performance</strong></mark>, and low overhead framework highly focused on providing max <mark class="highlight-red"><strong>efficiency and speed</strong></mark>.</td></tr></tbody></table><p id="a900b5b8-79e2-466d-8d23-43fb80a4177e" class="">In any case, the <mark class="highlight-red"><strong>application interfaces</strong></mark> can be seen respectively as <mark class="highlight-red"><strong>NestExpressApplication </strong></mark>and <mark class="highlight-red"><strong>NestFastityApplication.</strong></mark></p><p id="1ae4de38-0202-4403-abb4-c205da64c52d" class="">When passing a type to the <mark class="highlight-red"><strong><mark class="highlight-red"><strong>NestFactory.create() </strong></mark></strong></mark>method, the <mark class="highlight-red"><strong><mark class="highlight-red"><strong><mark class="highlight-red"><strong><mark class="highlight-red"><strong><mark class="highlight-red"><strong><mark class="highlight-red"><strong><mark class="highlight-red"><strong><mark class="highlight-red"><strong><mark class="highlight-red"><strong><mark class="highlight-red"><strong><mark class="highlight-red"><strong>app object </strong></mark></strong></mark></strong></mark></strong></mark></strong></mark></strong></mark></strong></mark></strong></mark></strong></mark></strong></mark></strong></mark>will have methods available exclusively for that platform, though this specification is never needed.</p><pre id="7d68c544-470b-495b-9b44-1d6f0be052ae" class="code"><code>const app = await NestFactory.create&lt;NestExpressApplication&gt;(AppModule);</code></pre><hr id="492dc807-2a8e-44b6-aad5-67869f8fa3b7"/><h3 id="b79c161b-7669-4429-99a2-7eef6f72314d" class="block-color-red">II. Fastify:</h3><blockquote id="a73a2743-392b-4234-ae79-06e4025e7083" class="block-color-red_background">Note, that not only fastify platform is implemented in nestjs. Although, for the adaptor to be created, the platform to be adapted has to have a similar request/response and pipeline as the Express platform originally implemented in nestjs</blockquote><p id="8eb60df1-c795-4ccc-af98-a2d9e3bca160" class=""><mark class="highlight-red"><strong>Fastify </strong></mark>is applied in cases that the <mark class="highlight-red"><strong>speed</strong></mark> is essential. In benchmarks, this platform usually <mark class="highlight-red"><strong>outperforms Express</strong></mark> by the half of the time. On the other hand, <mark class="highlight-red"><strong>Express </strong></mark>is the main platform implemented in nestjs due to its enormous use in actual production servers and it’s <mark class="highlight-red"><strong>out-of-the-box features</strong></mark>.</p><hr id="2f1417f4-3915-4c73-8ecb-677f42c2b48b"/><p id="06066e45-e775-4911-af0e-b13cf613ba88" class=""><mark class="highlight-red"><strong>Adapter for Fastify (Installation):</strong></mark></p><ol type="1" id="3a0e3eaa-9e37-4bc4-8574-6af418dbc47f" class="numbered-list" start="1"><li>Installing the required package:</li></ol><pre id="c489fad8-ce38-43d9-9e57-7afc51a26eda" class="code"><code>$ npm i --save @nestjs/platform-fastify</code></pre><ol type="1" id="de32eca9-8cbe-4bce-9ff6-1112d3854b93" class="numbered-list" start="2"><li>Using the fastify adapter (<mark class="highlight-red"><strong>FastifyAdapter</strong></mark>):</li></ol><pre id="d7c6c8d8-f65c-4f66-8a52-7ab2e4896da2" class="code"><code>import { NestFactory } from &#x27;@nestjs/core&#x27;;
import {
  FastifyAdapter,
  NestFastifyApplication,
} from &#x27;@nestjs/platform-fastify&#x27;;
import { AppModule } from &#x27;./app.module&#x27;;

async function bootstrap() {
  const app = await NestFactory.create&lt;NestFastifyApplication&gt;(
    AppModule,
    new FastifyAdapter()
  );
  await app.listen(3000);
}
bootstrap();</code></pre><hr id="fcd433d5-5d67-4ed2-9605-26301d67667d"/><p id="ba6be7c8-707d-4ed0-bb75-af1b8901ebe6" class=""><mark class="highlight-red"><strong>Usefull peculiarities:</strong></mark></p><ol type="1" id="d0ad3c57-149e-4c5a-9c77-b3fb841474aa" class="numbered-list" start="1"><li>Default host:</li></ol><p id="e60bcd67-ac98-441b-925f-fcfa77d61a62" class="">By default, Fastify only listens on <mark class="highlight-red"><strong><a href="http://localhost">localhost</a></strong></mark><mark class="highlight-red"><strong> 123.0.01 </strong></mark>interface. If the user needs to listen to other hosts, it’s needed to specify <mark class="highlight-red"><strong>‘0.0.0.0’</strong></mark> in the <mark class="highlight-red"><strong>listen()</strong></mark> call:</p><pre id="7032e9d8-15ff-46f4-b0cc-961c7be2e5b9" class="code"><code>async function bootstrap() {
  const app = await NestFactory.create&lt;NestFastifyApplication&gt;(
    AppModule,
    new FastifyAdapter(),
  );
  await app.listen(3000, &#x27;0.0.0.0&#x27;);
}</code></pre><ol type="1" id="4ff3700f-bc3e-47f7-a296-de6b3895aded" class="numbered-list" start="2"><li>Platform specification:</li></ol><p id="31d4fe30-943e-4d3e-972f-6e024b335904" class="">When using fastify as the platform, Nestjs uses it as its <mark class="highlight-red"><strong>HTTP provider</strong></mark>. That means, that not all recipes that depends on Express will work properly. The user should, instead, <mark class="highlight-red"><strong>use Fastify equivalent packages</strong></mark>.</p><ol type="1" id="5fafd281-6dcc-45e6-bce3-7bde11395278" class="numbered-list" start="3"><li>Redirect response:</li></ol><p id="be151182-a7b0-4562-af75-5e05180cc30d" class="">Fastify behaves a little different to Express when redirecting responses. To do a proper redirection in Fastify, <mark class="highlight-red"><strong>return </strong></mark>both the<mark class="highlight-red"><strong> status code</strong></mark> and the <mark class="highlight-red"><strong>URL</strong></mark>, as follows:</p><pre id="7d90ebdf-2b4e-46ed-be12-7c9d47f89006" class="code"><code>@Get()
index(@Res() res) {
	res.status.(302).redirect(&#x27;/login&#x27;);
}</code></pre><ol type="1" id="54845351-98b9-4ae5-b566-50c7c662f86f" class="numbered-list" start="4"><li>Fastify options:</li></ol><p id="1cf3b085-fd63-488f-8abd-df0e69a6841a" class="">The user can pass options into the Fastify contructor through the <mark class="highlight-red"><strong>FastifyAdapter constructor</strong></mark>:</p><pre id="4b8db883-5e50-42b2-b2c7-bec00e85f2f4" class="code"><code>new FastifyAdapter({ logger: true });</code></pre><ol type="1" id="c9df14b4-a0f0-4ab7-8a50-b43ae1ee6a89" class="numbered-list" start="5"><li>Middleware:</li></ol><p id="3164f201-0023-414b-8b32-f039e86da7b4" class="">The middleware functions retrive the raw <mark class="highlight-red"><strong>requests </strong></mark>and <mark class="highlight-red"><strong>responses </strong></mark>objects instead of Fastifys’s wrappers. This is how the <mark class="highlight-red"><strong>middie </strong></mark>package works.</p><pre id="ce74b803-8109-4f8b-a8a3-e31bac990725" class="code"><code>import { Injectable, NestMiddleware } from &#x27;@nestjs/common&#x27;;
import { FastifyRequest, FastifyReply } from &#x27;fastify&#x27;;

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: FastifyRequest[&#x27;raw&#x27;], res: FastifyReply[&#x27;raw&#x27;], next: () =&gt; void) {
    console.log(&#x27;Request...&#x27;);
    next();
  }
}</code></pre><hr id="cfbee241-9ad8-4b2a-ab12-e58812c69a3a"/><p id="411912c9-2f46-406e-b380-84864ceaf1b3" class="">For <mark class="highlight-red"><strong>more informations</strong></mark>, check the Fastify’s doc: <mark class="highlight-red"><strong><a href="https://fastify.dev/docs/latest/Guides/Getting-Started/#your-first-server">https://fastify.dev/docs/latest/Guides/Getting-Started/#your-first-server</a></strong></mark></p><p id="d00d8590-cee5-4bee-9c23-99a1670d4b13" class="">A <mark class="highlight-red"><strong>working example</strong></mark> with Fastify platform:<mark class="highlight-red"><strong> </strong></mark><mark class="highlight-red"><strong><a href="https://github.com/nestjs/nest/tree/master/sample/10-fastify">https://github.com/nestjs/nest/tree/master/sample/10-fastify</a></strong></mark></p><hr id="a3a0e10a-c0b1-4398-a46b-6aecde3f57f3"/><h2 id="6c19aca4-7f8c-4d87-873e-e7a413c396e4" class="block-color-red">C. Running the application:</h2><p id="122f0a2a-0618-46a6-8a1d-3c187b0d825b" class="">To <mark class="highlight-red"><strong>run the application</strong></mark> and start the process of listening for HTTP requests, simply insert the following lines at you OS:</p><pre id="b44133a4-6eea-46f9-97f2-2fbf494e8720" class="code"><code>$ npm run start</code></pre><p id="e7dfded2-00f8-4b8a-ba80-11c5035e2acd" class="">If the user wants to <mark class="highlight-red"><strong>speed up</strong></mark> the development process (up to 20x faster), they can use the <mark class="highlight-red"><strong>SWC Builder</strong></mark> by adding the -b swc flag to the start command:</p><pre id="8ec87846-1e8b-4972-86b9-9abcd08822ea" class="code"><code>$ npm rum start -- -b swc</code></pre><p id="d7f794e3-7940-4dc8-8a40-34845fab9ecc" class="">This command <mark class="highlight-red"><strong>starts the app</strong></mark> with the HTTP server listening on the <mark class="highlight-red"><strong>port defined in the src/main.ts</strong></mark> file. Once started, navigate, on the browser to <mark class="highlight-red"><strong>http://localhost:&lt;port&gt;/</strong></mark>. You should see a hello world message.</p><p id="e42b9f00-e358-439c-b8bb-a991f93e7c45" class="">To <mark class="highlight-red"><strong>run and watch</strong></mark> for changes in the files at the same time, run the command:</p><pre id="60bc6110-0c9a-4ade-a8eb-17a57082b604" class="code"><code>$ npm run start:dev</code></pre><p id="49518faa-effe-4990-b67b-788c51e5c456" class="">
</p></div></article></body></html>