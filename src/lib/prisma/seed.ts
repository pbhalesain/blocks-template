import { faker } from '@faker-js/faker';
import prisma from './index';

const seedInvoices = async (count: number) => {
	const invoices = Array.from({ length: count }, () => ({
		customer: faker.company.name(),
		amount: faker.random.number({ min: 100, max: 10000 }),
		dueDate: faker.date.future(),
		paid: faker.random.boolean(),
	}));

	await prisma.invoice.createMany({ data: invoices });
};


const seedExpenses = async (count: number) => {
  const expenses = Array.from({ length: count }, () => ({
    description: faker.commerce.productName(),
    amount: faker.random.number({ min: 10, max: 1000 }),
    date: faker.date.past(),
    category: faker.random.word(),
  }));

  await prisma.expense.createMany({ data: expenses });
};

const seed = async () => {
  await seedInvoices(10);
  await seedExpenses(20);
};

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });