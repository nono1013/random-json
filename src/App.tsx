/* eslint-disable react/no-array-index-key */

import React, { useState } from 'react';
import Section from './components/Section';
import dummyJson from './dummy.json';

export type Json = Record<string, unknown>;

function App() {
	const [dummy] = useState(dummyJson);
	const isArray = (obj: unknown) => {
		return Object.prototype.toString.call(obj) === '[object Array]';
	};

	return (
		<div>
			<main>
				{dummy.map((data: Json, i: number) => {
					return (
						<div key={`data-${i}`} className="grid grid-cols-rows md:grid-cols-table gap-x-2 p-4">
							{Object.keys(data).map((e: string) =>
								(isArray(data[e]) || (
									<Section key={`dummy-${e.toString()}`} _key={e} value={data[e]} />
								)))}
						</div>
					);
				})}
			</main>
		</div>
	);
}

export default App;
