import { defineStore } from "pinia";

export const useCharactersStore = defineStore('characters', () => {
    const characters = ref([])

    async function fetchCharacters() {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            if (!response.ok) {
                throw new Error("Network response was not OK");
            }
            const data = await response.json();
            characters.value = data.results;

        } catch (error) {
            console.error("There has been a problem with your fetch operation:", error);
        }
    }

    return { characters, fetchCharacters }
})