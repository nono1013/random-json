/* eslint-disable react/no-array-index-key */

import React, { useState } from 'react';
import dummyJson from './dummy.json';

type Json = Record<string, unknown>;

function App() {
	const [dummy] = useState(dummyJson);
	const isArray = (obj: unknown) => {
		return Object.prototype.toString.call(obj) === '[object Array]';
	};

	return (
		<div>
			<main className="p-4">
				{dummy.map((data: Json, i: number) => {
					return (
						<div key={`data-${i}`}>
							{Object.keys(data).map((e: string) =>
								(isArray(data[e]) || (
									<p key={`dummy-${e.toString()}`}>
										{e}
										{': '}
										{data[e]}
									</p>
								)))}
						</div>
					);
				})}
			</main>
		</div>
	);
}

export default App;
