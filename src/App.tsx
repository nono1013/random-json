/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */

import React, { ChangeEvent, useEffect, useState } from 'react';
import { Json, JsonKV } from './types';
import Section from './components/Section';
import { jsonTextToType } from './type_helper';
import { Loading } from './components/Loading';

function App() {
	const [jsonStr, setJsonStr] = useState<string | null>(null);
	const [json, setJson] = useState<Json | null>(null);

	useEffect(() => {
		if (jsonStr) {
			jsonTextToType(jsonStr).then(value => setJson(value));
		}
	}, [jsonStr]);

	const openDummy = () => {
		setJson(null);
		setJsonStr(null);
		fetch('/dummy.json')
			.then(data => data.text())
			.then((data) => {
				setJsonStr(data);
			});
	};

	const openFile = async (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setJson(null);
		setJsonStr(null);
		const reader = new FileReader();
		reader.onload = async (e) => {
			const text = (e.target?.result);
			setJsonStr(text as string);
		};
		if (e.target && e.target.files) {
			reader.readAsText(e.target.files[0]);
		}
	};

	return (
		<div>
			<main>
				<div className="p-4">
					<input type="file" onChange={e => openFile(e)} />
					<button type="button" onClick={openDummy}>Open dummy json</button>
				</div>
				{!json && jsonStr && <Loading />}
				<div className="grid grid-cols-rows md:grid-cols-table">
					{json && json.map((data: JsonKV, i: number) => {
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
