/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */

import React, { useState } from 'react';
import { Json, JsonKV } from './types';
import Section from './components/Section';
import dummyJson from './dummy.json';

const toType = (key: string, value: any): JsonKV | null => {
	const type = typeof value;
	if (key === 'id' || key === '_id') {
		return { type: 'id', key, value };
	}
	if (type === 'string') {
		if ((value as string).length > 255) {
			return { type: 'textarea', key, value };
		}
		return { type: 'text', key, value };
	}
	if (type === 'number') {
		return { type: 'number', key, value };
	}
	if (type === 'boolean') {
		return { type: 'boolean', key, value };
	}
	return null;
};

const jsonTextToType = (str: string) => {
	const jsonArr = JSON.parse(str);
	return jsonArr.flatMap((jsonObj: any) =>	Object.keys(jsonObj).map((key: string) => toType(key, jsonObj[key])).filter(e => e !== null));
};

function App() {
	const [dummy] = useState<Json>(jsonTextToType(JSON.stringify(dummyJson)));

	return (
		<div>
			<main>
				<div className="grid grid-cols-rows md:grid-cols-table gap-x-2 p-4">
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
