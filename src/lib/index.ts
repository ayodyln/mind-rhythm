import { writable } from 'svelte/store';

const dailyTasksDB = [
	{
		title: 'Morning Exercise',
		description: '30 minutes of jogging and stretching',
		created: '2023-11-13T08:00:00',
		due: '2023-11-13T08:30:00'
	},
	{
		title: 'Work on Project X',
		description: 'Complete tasks for the project',
		created: '2023-11-13T09:00:00',
		due: '2023-11-13T12:00:00'
	},
	{
		title: 'Lunch Break',
		description: 'Healthy meal and short break',
		created: '2023-11-13T12:30:00',
		due: '2023-11-13T13:00:00'
	},
	{
		title: 'Client Meeting',
		description: 'Discuss project updates with the client',
		created: '2023-11-13T13:30:00',
		due: '2023-11-13T15:00:00'
	},
	{
		title: 'Read',
		description: 'Read a chapter of the current book',
		created: '2023-11-13T15:30:00',
		due: '2023-11-13T16:00:00'
	},
	{
		title: 'Dinner',
		description: 'Healthy dinner preparation',
		created: '2023-11-13T18:00:00',
		due: '2023-11-13T18:30:00'
	},
	{
		title: 'Relaxation Time',
		description: 'Watch a movie or listen to music',
		created: '2023-11-13T19:00:00',
		due: '2023-11-13T20:30:00'
	},
	{
		title: "Plan Tomorrow's Tasks",
		description: 'Review and plan tasks for the next day',
		created: '2023-11-13T21:00:00',
		due: '2023-11-13T21:30:00'
	}
];

const currentDate = writable(new Date());
const selectedCalenderDate = writable(new Date());
const userSelectedDate = writable(new Date());

const dailyTasks = writable(dailyTasksDB);

dailyTasks.subscribe((value) => {
	console.log(value);
});

export { currentDate, selectedCalenderDate, userSelectedDate, dailyTasks };
