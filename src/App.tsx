/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */

import React, { useState } from 'react';
import { Json, JsonKV } from './types';
import Section from './components/Section';
import dummyJson from './dummy.json';
import { jsonTextToType } from './type_helper';

function App() {
	const [dummy] = useState<Json>(jsonTextToType(JSON.stringify(dummyJson)));

	return (
		<div>
			<main>
				<div className="grid grid-cols-rows md:grid-cols-table">
					{dummy.map((data: JsonKV, i: number) => {
						return (
							<Section key={`dummy-${i}-${data.key}-${data.value}`} kv={data} index={i} />
						);
					})}
				</div>
			</main>
		</div>
	);
}

export default App;
