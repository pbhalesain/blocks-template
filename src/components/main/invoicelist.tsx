import { fetchInvoices } from '@/app/lib/fetchers';
import useSWR from 'swr';

interface Invoice {
	id: string;
	customer: string;
	amount: number;
	dueDate: string;
	paid: boolean;
}

const InvoiceList = () => {
	const { data: invoices, error } = useSWR<Invoice[]>('/api/invoices', fetchInvoices);

	if (error) return <div>Error fetching invoices</div>;
	if (!invoices) return <div>Loading...</div>;

	return (
		<div>
			<h2>Invoices</h2>
			<ul>
				{invoices.map((invoice) => (
					<li key={invoice.id}>
						<div>Customer: {invoice.customer}</div>
						<div>Amount: {invoice.amount}</div>
						<div>Due Date: {invoice.dueDate}</div>
						<div>Paid: {invoice.paid ? 'Yes' : 'No'}</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default InvoiceList;