import { writable } from 'svelte/store';

const currentDate = writable(new Date());
const selectedDate = writable(new Date());

export { currentDate, selectedDate };
