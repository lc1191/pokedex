<template>
    <div class="pokemon-container">

        <img v-if="!showPokemon"
            :src="imgSrc"
            class="hidden-pokemon"
            alt="">
        
        <img v-else
            :src="imgSrc"
            class="fade-in"
            alt="">
    </div>
</template>

<script>

export default {
    props: {
        pokemonId: {
            type: Number,
            required: true
        },
        showPokemon: {
            type: Boolean,
            required: true,
            default: false
        }
    },

    computed: {
        imgSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    }
}
</script>

<style scoped>

.pokemon-container {
    height: 200px;
}
.hidden-pokemon {
    filter: brightness(0);
}

img {
  height: 200px;
  position: absolute;
  width: 100vw;
  margin-left: -50vw;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}

</style>