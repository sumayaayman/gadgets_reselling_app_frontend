import moment from "moment";

export const formatDate = (date) => {
	const formattedDate = moment(date).format("DD MMM YY");
	return formattedDate;
};

export const getCurrentTime = () => {
	const now = new Date(); // Get current date and time
	let hours = now.getHours(); // Get hours (0-23)
	const minutes = now.getMinutes(); // Get minutes (0-59)
	const isAM = hours < 12; // Check if it's AM or PM
	const ampm = isAM ? "AM" : "PM"; // Set AM/PM string

	// Convert hours to 12-hour format
	hours = hours % 12 || 12; // Convert '0' hour to '12' for 12-hour clock

	// Format minutes to always show 2 digits (e.g., 08 instead of 8)
	const formattedMinutes = minutes.toString().padStart(2, "0");

	// Combine into desired format
	const formattedTime = `${hours}:${formattedMinutes} ${ampm}`;
	return formattedTime;
};
