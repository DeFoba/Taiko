import { writable } from 'svelte/store';

export const isBound = writable<boolean>(false);
