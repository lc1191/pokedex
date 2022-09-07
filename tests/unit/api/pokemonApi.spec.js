import pokemonApi from "@/api/pokemonApi";

describe('pokemonApi', () => {
    
    test('TEST de axios, prueba de configuracion con el api de pokemon', () => {

        expect( pokemonApi.defaults.baseURL )
            .toBe('https://pokeapi.co/api/v2/pokemon')
    })
})