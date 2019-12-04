<template>
    <div>
        <img src="@/assets/logo.png">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                 <statssetter v-on:addpokemon="add_pokemon"></statssetter>
                </div>
                <div class="col-sm-6">
                 <pokemoncard :pokemons="pokemons" v-on:removepokemon="remove_pokemon"></pokemoncard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import statssetter from '@/components/stats-setter'
import pokemoncard from '@/components/pokemon-card'

export default {
  name: 'PokemonKataMaker',
  data () {
    return {
      pokemons: [],
      currentid: 0
    }
  },
  methods:{
    add_pokemon: function(pokemon_data){
        pokemon_data['cardid'] = this.currentid
        this.pokemons.push(pokemon_data)
        this.currentid++
        console.log(pokemon_data)
    },
    remove_pokemon: function(cardid){
        this.pokemons.splice(cardid,1,{})
        console.log(this.pokemons)
    }
  },
  components: {
    statssetter,
    pokemoncard
  },
}
</script>

<style>
</style>
