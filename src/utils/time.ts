export const formatTime = function (time: number) {
	return [
		Math.floor((time % 3600) / 60), // minutes
		('00' + Math.floor(time % 60)).slice(-2), // seconds
	].join(':');
};
