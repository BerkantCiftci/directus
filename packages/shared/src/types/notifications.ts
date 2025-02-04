export type Notification = {
	id: string;
	timestamp: string;
	recipient: string;
	sender: string | null;
	subject: string;
	message: string | null;
	collection: string | null;
	item: string | null;
};
