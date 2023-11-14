import { writable } from 'svelte/store';

const currentDate = writable(new Date());
const selectedCalenderDate = writable(new Date());
const userSelectedDate = writable(new Date());

export { currentDate, selectedCalenderDate, userSelectedDate };
