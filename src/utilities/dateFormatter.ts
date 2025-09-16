export function dateFormatter(dateString: string) {
	const date = new Date(dateString);

	const options = {
		year: "numeric",
		month: "long",
		day: "numeric",
	} as Intl.DateTimeFormatOptions;

	const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
	return formattedDate;
}
