import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	const concatenatedClassNames = clsx(inputs)
	return twMerge(concatenatedClassNames)
}
