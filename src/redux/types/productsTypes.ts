export interface ProductsI {
	id: number;
	serialNumber: number;
	isNew: boolean;
	title: string;
	type: string;
	specification: string;
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

