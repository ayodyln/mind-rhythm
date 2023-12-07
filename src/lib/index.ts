import { writable } from 'svelte/store';
import type { RhythmTask } from '../app';

const dailyTasksDB: RhythmTask[] = [
	{
		id: 'a1b2c3d4-1234-5678-5678-e1f2a3b4c5d6',
		title: 'Morning Exercise',
		description: '30 minutes of jogging and stretching',
		created_datetime: '2023-11-13T07:00:00',
		due_time: '09:00:00'
	},
	{
		id: 'b4c5d6e7-5678-7890-1234-f2a3b4c5d6e7',
		title: 'Work on Project A',
		description: 'Complete the coding tasks for Project A',
		created_datetime: '2023-11-13T09:30:00',
		due_time: '12:00:00'
	},
	{
		id: 'c5d6e7f8-7890-9012-2345-a3b4c5d6e7f8',
		title: 'Lunch Break',
		description: 'Take a break and have a healthy lunch',
		created_datetime: '2023-11-13T12:30:00',
		due_time: '13:30:00'
	},
	{
		id: 'e7f8g9h0-9012-3456-5678-b4c5d6e7f8g9',
		title: 'Client Meeting',
		description: 'Discuss project updates with the client',
		created_datetime: '2023-11-13T14:00:00',
		due_time: '16:00:00'
	},
	{
		id: 'g9h0i1j2-3456-7890-1234-d6e7f8g9h0i1',
		title: 'Dinner',
		description: 'Prepare and have a nutritious dinner',
		created_datetime: '2023-11-13T18:00:00',
		due_time: '19:30:00'
	},
	{
		id: 'i1j2k3l4-5678-9012-3456-f8g9h0i1j2k3',
		title: 'Read a Book',
		description: 'Relax and read a book before bedtime',
		created_datetime: '2023-11-13T20:00:00',
		due_time: '21:30:00'
	}
];

const currentDate = writable(new Date());
const selectedCalenderDate = writable(new Date());
const userSelectedDate = writable(new Date());

const dailyTasks = writable(dailyTasksDB);

export { currentDate, selectedCalenderDate, userSelectedDate, dailyTasks };
