
import { fetchExpenses } from '@/app/lib/fetchers';
import { Avatar, Calendar, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';
import { formatCurrency, formatDate } from '@/lib/utils';
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from 'react';
import useSWR from 'swr';

interface Expense {
	id: string;
	description: string;
	amount: number;
	date: string;
	category: string;
}


export default async function ExpenseList() {

	const { data: expenses, error } = useSWR('/api/expenses', fetchExpenses);

	if (error) return <div>Error fetching expenses</div>;
	if (!expenses) return <div>Loading...</div>;

	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{expenses.map((expense: { id: Key | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; date: string; amount: number; category: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
				<Card key={expense.id} className="overflow-hidden">
					<CardHeader>
						<Avatar className="bg-rose-500 text-white">
							<Calendar className="h-5 w-5" />
						</Avatar>
						<CardTitle>{expense.description}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>
							<div className="mb-2 flex items-center justify-between">
								<span className="font-medium">{formatDate(expense.date)}</span>
								<span className="font-bold text-rose-500">{formatCurrency(expense.amount)}</span>
							</div>
							<div className="flex items-center justify-between">
								<span className="text-sm text-gray-500">{expense.category}</span>
							</div>
						</CardDescription>
					</CardContent>
				</Card>
			))}
		</div>
	);
}


