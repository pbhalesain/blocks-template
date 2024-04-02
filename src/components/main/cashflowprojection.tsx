import { Button, Input, TextArea } from "@/components/ui";
import React, { useState } from 'react';

const CashFlowProjection = () => {
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [projection, setProjection] = useState('');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const response = await fetch('/api/cashflow', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ startDate, endDate }),
		});

		const data = await response.json();
		setProjection(data.projection);
	};

	return (
		<div className="space-y-4">
			<form onSubmit={handleSubmit} className="flex flex-col space-y-2">
				<Input
					type="date"
					value={startDate}
					onChange={(e) => setStartDate(e.target.value)}
					placeholder="Start Date"
				/>
				<Input
					type="date"
					value={endDate}
					onChange={(e) => setEndDate(e.target.value)}
					placeholder="End Date"
				/>
				<Button type="submit">Generate Projection</Button>
			</form>
			<TextArea value={projection} readOnly />
		</div>
	);
};

export default CashFlowProjection;