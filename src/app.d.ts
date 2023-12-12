// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

type RhythmTask = {
	id: string;
	title: string;
	description: string;
	created_datetime: string;
	start_time: string;
	due_time: string;
	pos: number;
};

export { RhythmTask, TaskState };
