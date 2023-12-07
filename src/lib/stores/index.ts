import { writable } from 'svelte/store';

export const rhythmTasks = writable(undefined);

rhythmTasks.subscribe((value) => {
	console.log(value);
});
