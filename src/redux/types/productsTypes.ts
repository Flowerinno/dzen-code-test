export interface ProductsI {
	id: number;
	serialNumber: number;
	isNew: boolean;
	title: string;
	type: string;
	specification: string;
	isAvailable: boolean;
	guarantee: {
		start: string;
		end: string;
	};
	price: {
		value: number;
		symbol: string;
		isDefault: number;
	}[];
	order: number;
	group: string;
	date: string;
}
