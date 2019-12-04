<template>
<div>
  <button @click="logout_pokemons"></button>
  <div v-if="PokemonsisEmpty">
    <p>Empty Cards</p>
  </div>

  <div class="card" v-for="poke in filteredpokemons" :key="poke.cardid">
    <div class="card-body">
      <h5 class="card-title">{{poke.name}} @ {{poke.helditem}} </h5>

      <div class="row">
        <tbody class="col-sm-3"> 
        <tr><th>特性</th></tr>
        <tr><td>{{poke.ability}}</td></tr>
        <tr><th>持ち物</th></tr>
        <tr><td>{{poke.helditem}}</td></tr>
        </tbody>
        <tbody class="col-sm-3"> 
        <tr><th>Move</th></tr>
          <tr><td>{{poke.move.move1}}</td></tr>
          <tr><td>{{poke.move.move2}}</td></tr>
          <tr><td>{{poke.move.move3}}</td></tr>
          <tr><td>{{poke.move.move4}}</td></tr>
        </tbody>
      </div>
      

      <table class="table table-sm">
        <thead>
          <th></th>
          <th>HP</th>
          <th>Atk</th>
          <th>Def</th>
          <th>SpA</th>
          <th>SpD</th>
          <th>Spe</th>
        </thead>
        <tbody>
          <tr>
            <th>Stats</th>
            <td>{{poke.stats.hp}}</td>
            <td>{{poke.stats.atk}}</td>
            <td>{{poke.stats.def}}</td>
            <td>{{poke.stats.spa}}</td>
            <td>{{poke.stats.spd}}</td>
            <td>{{poke.stats.spe}}</td>
          </tr>
          <tr>
            <th>Eff</th>
            <td>{{poke.eff.hp}} </td>
            <td>{{poke.eff.atk}}</td>
            <td>{{poke.eff.def}}</td>
            <td>{{poke.eff.spa}}</td>
            <td>{{poke.eff.spd}}</td>
            <td>{{poke.eff.spe}}</td>
          </tr>
        </tbody>
      </table>
      <a href="#!" class="card-link">Card link</a>
    </div>
    <button type="button" v-on:click="remove_card(poke.cardid)">Small button</button>
  </div>
</div>
</template>


<script>
export default {
  props: ['pokemons'],
  computed: {
    filteredpokemons: function(){
      var tl = []
      for(var el in this.pokemons){
        if(Object.keys(this.pokemons[el]).length != 0) tl.push(this.pokemons[el])
      }
      return tl
    },
    PokemonsisEmpty: function(){
      return this.filteredpokemons.length==0
    }
  },
  methods:{
    remove_card: function(cardid){
      console.log("remove")
      this.$emit('removepokemon', cardid)
    },
    logout_pokemons: function(){
      console.log(this.pokemons)
      console.log(this.filteredpokemons)
      console.log(this.pokemons.map(x =>  x != undefined))
    }
  }
}

</script>

