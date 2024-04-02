import prisma from './index';

export const createInvoice = async (data: any) => {
  const invoice = await prisma.invoice.create({ data });
  return invoice;
};

export const getInvoices = async () => {
  const invoices = await prisma.invoice.findMany();
  return invoices;
};

export const createExpense = async (data: any) => {
  const expense = await prisma.expense.create({ data });
  return expense;
};

export const getExpenses = async () => {
  const expenses = await prisma.expense.findMany();
  return expenses;
};