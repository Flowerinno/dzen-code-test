const currentTimestamp = new Date();

const currentDate = new Date(currentTimestamp);

const options: Intl.DateTimeFormatOptions = {
	weekday: "long",
	day: "numeric",
	month: "short",
	year: "numeric",
};

const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat(
	"ru-RU",
	options
);
const currentTime = `${currentTimestamp.getHours()}:${currentTimestamp.getMinutes()}`;

export const formattedDate = {
	date: formatter.format(currentDate),
	time: currentTime,
};
