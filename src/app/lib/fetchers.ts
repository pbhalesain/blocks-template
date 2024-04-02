export const fetchInvoices = async () => {
	const response = await fetch('/api/invoices');
	return response.json();
};

export const fetchExpenses = async () => {
	const response = await fetch('/api/expenses');
	return response.json();
};

export const fetchCashFlowProjections = async () => {
	const response = await fetch('/api/cashflow-projections');
	return response.json();
};