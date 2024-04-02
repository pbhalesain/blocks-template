import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import numeral from 'numeral';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatCurrency = (value: number, currency = 'USD'): string => {
  return numeral(value).format(`$0,0.00`);
};

export const formatDate = (dateString: string, format = 'MMMM D, YYYY'): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(date);
};