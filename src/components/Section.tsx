import React, { useState } from 'react';
import { JsonKV, Value } from '../types';
import { IdEditor } from './editors/IdEditor';
import { StringEditor } from './editors/StringEditor';
import { NumberEditor } from './editors/NumberEditor';
import { LongStringEditor } from './editors/LongStringEditor';
import { BooleanEditor } from './editors/BooleanEditor';
import { EmailEditor } from './editors/EmailEditor';
import { DateEditor } from './editors/DateEditor';

interface Props {
	kv: JsonKV;
	index: number;
}

const getEditor = (kv: JsonKV, index: number, callback: (value: Value) => void) => {
	switch (kv.type) {
	case 'id': return <IdEditor value={kv.value as string} callback={callback} />;
	case 'text': return <StringEditor value={kv.value as string} callback={callback} />;
	case 'number': return <NumberEditor value={kv.value as number} callback={callback} />;
	case 'textarea': return <LongStringEditor value={kv.value as string} callback={callback} />;
	case 'boolean': return <BooleanEditor _key={kv.key} value={kv.value as boolean} index={index} callback={callback} />;
	case 'email': return <EmailEditor value={kv.value as string} callback={callback} />;
	case 'date': return <DateEditor value={kv.value as string} callback={callback} />;
	default: return null;
	}
};

function Section({ kv, index }: Props) {
	const [value, setValue] = useState(kv.value);
	return (
		<>
			<p className="p-2 bg-gray-100 text-gray-700">{ kv.key }</p>
			<p className="p-2 bg-gray-100 text-gray-900">{ value.toString() }</p>
			<span />
			<span className="w-full p-2">{ getEditor(kv, index, setValue) }</span>
		</>
	);
}

export default Section;
