import { z } from 'zod';

// Invoice Schema
export const invoiceSchema = z.object({
  id: z.string().optional(),
  customer: z.string().min(1, 'Customer name is required'),
  amount: z.number().positive('Amount must be positive'),
  dueDate: z.date().refine(
    (val) => val > new Date(),
    'Due date must be in the future'
  ),
  paid: z.boolean().optional(),
});

// Expense Schema
export const expenseSchema = z.object({
  id: z.string().optional(),
  description: z.string().min(1, 'Description is required'),
  amount: z.number().positive('Amount must be positive'),
  date: z.date().refine(
    (val) => val <= new Date(),
    'Date must be in the past or present'
  ),
  category: z.string().min(1, 'Category is required'),
});

