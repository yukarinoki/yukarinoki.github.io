<template>
<div>
    <div class="row">
      <div class="col-sm-4">
        <pokemonsearch　v-on:setpokemonname="SetBaseStatus"> </pokemonsearch>
      </div>
      <div class="col-sm-8">
        <input type="text" class="form-control  form-control-sm" id="inputMemo" placeholder="Memo">
      </div>
    </div>
    <div class="row">
      <div class="col-sm-2"></div>
      <p class="col-sm-2">Base</p>
      <p class="col-sm-2">Ind</p>
      <p class="col-sm-2">Eff</p>
      <p class="col-sm-2">Stats</p>
      <p class="col-sm-2">Act</p>
    </div>
    <div class="form-group row">
      <p class="col-sm-2">HP</p>
      <div class="col-sm-2">
        <input type="text" class="form-control form-control-sm" id="inputBaseHP" v-model="base.hp">
      </div>
      <div class="col-sm-2">
        <input type="text" class="form-control form-control-sm" id="inputIndHP" v-model="ind.hp">
      </div>
      <div class="col-sm-2">
        <input type="text" class="form-control form-control-sm" id="inputEffHP" v-model="eff.hp">
      </div>
      <div class="col-sm-2">
        <p> {{ calchp }}</p>
      </div>
      <div class="col-sm-2">
        <p> </p>
      </div>
    </div>
    <div class="form-group row">
      <p class="col-sm-2">Atk</p>
      <div class="col-sm-2">
        <input type="text" class="form-control form-control-sm" id="inputBaseAtk" v-model="base.atk">
      </div>
      <div class="col-sm-2">
        <input type="text" class="form-control form-control-sm" id="inputIndAtk" v-model="ind.atk">
      </div>
      <div class="col-sm-2">
        <input type="text" class="form-control form-control-sm" id="inputEffAtk" v-model="eff.atk">
      </div>
      <div class="col-sm-2">
        <p :style="hoseistyleatk" v-on:click="nat_change('atk')"> {{ calcatk }} </p>
      </div>
      <div class="col-sm-2">
        <p> </p>
      </div>
    </div>
    <div class="form-group row">
      <p class="col-sm-2">Def</p>
      <div class="col-sm-2">
        <input type="text" class="form-control form-control-sm" id="inputBaseDef" v-model="base.def">
      </div>
      <div class="col-sm-2">
        <input type="text" class="form-control form-control-sm" id="inputIndDef" v-model="ind.def">
      </div>
      <div class="col-sm-2">
        <input type="text" class="form-control form-control-sm" id="inputEffDef" v-model="eff.def">
      </div>
      <div class="col-sm-2">
        <p :style="hoseistyledef" v-on:click="nat_change('def')"> {{ calcdef }} </p>
      </div>
      <div class="col-sm-2">
        <p> </p>
      </div>
    </div>
    <div class="form-group row">
      <p class="col-sm-2">SpA</p>
      <div class="col-sm-2">
        <input type="text" class="form-control form-control-sm" id="inputBaseSpA" v-model="base.spa">
      </div>
      <div class="col-sm-2">
        <input type="text" class="form-control form-control-sm" id="inputIndSpA" v-model="ind.spa">
      </div>
      <div class="col-sm-2">
        <input type="text" class="form-control form-control-sm" id="inputEffSpA" v-model="eff.spa">
      </div>
      <div class="col-sm-2">
        <p :style="hoseistylespa" v-on:click="nat_change('spa')"> {{ calcspa }} </p>
      </div>
      <div class="col-sm-2">
        <p> </p>
      </div>
    </div>
    <div class="form-group row">
      <p class="col-sm-2">SpD</p>
      <div class="col-sm-2">
        <input type="text" class="form-control form-control-sm" id="inputBaseSpD" v-model="base.spd">
      </div>
      <div class="col-sm-2">
        <input type="text" class="form-control form-control-sm" id="inputIndSpD" v-model="ind.spd">
      </div>
      <div class="col-sm-2">
        <input type="text" class="form-control form-control-sm" id="inputEffSpD" v-model="eff.spd">
      </div>
      <div class="col-sm-2">
        <p :style="hoseistylespd" v-on:click="nat_change('spd')"> {{ calcspd }} </p>
      </div>
      <div class="col-sm-2">
        <p> </p>
      </div>
    </div>
    <div class="form-group row">
      <p class="col-sm-2">Spe</p>
      <div class="col-sm-2">
        <input type="text" class="form-control form-control-sm" id="inputBaseSpe" v-model="base.spe">
      </div>
      <div class="col-sm-2">
        <input type="text" class="form-control form-control-sm" id="inputIndSpe" v-model="ind.spe">
      </div>
      <div class="col-sm-2">
        <input type="text" class="form-control form-control-sm" id="inputEffSpe" v-model="eff.spe">
      </div>
      <div class="col-sm-2">
         <p :style="hoseistylespe" v-on:click="nat_change('spe')"> {{ calcspe }} </p>
      </div>
      <div class="col-sm-2">
        <p> </p>
      </div>
    </div>
    <div class=container>
    <div class="row">
      <ul class="list-group col-sm-6">
        <li class="list-group-item"><input type="text" class="form-control form-control-sm list-group-item" id="inputIndMove1" placeholder="Move1" v-model="move.move1"></li>
        <li class="list-group-item"><input type="text" class="form-control form-control-sm list-group-item" id="inputIndMove2" placeholder="Move2" v-model="move.move2"></li>
        <li class="list-group-item"><input type="text" class="form-control form-control-sm list-group-item" id="inputIndMove3" placeholder="Move3" v-model="move.move3"></li>
        <li class="list-group-item"><input type="text" class="form-control form-control-sm list-group-item" id="inputIndMove4" placeholder="Move4" v-model="move.move4"></li>
      </ul>
      <div class="form-group col-sm-6">
        <label for="formGroupExampleInput">Nature</label>
        <select v-model="selected_nat" v-bind:style="nat_style" class="custom-select" v-on:change="set_nat">
          <option v-for="option in nat_list" :value="option.value" :key="option.text">
            {{ option.text }}
          </option>
        </select>
        <label for="formGroupExampleInput">Held Item</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Item Name" v-model="helditem">

        <label for="formGroupExampleInput">Ability</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ability Name" v-model="ability">

        <button type="button" class="btn btn-primary btn-lg btn-block" v-on:click="add_new_pokemon"
        style= "border-top-width: 13px;
                margin-top: 10px;
                border-bottom-width: 13px;
                padding-bottom: 10px;">Add!</button>
      </div>
    </div>
    </div>
</div>
    
</template>

<script>
var calc_nothp = function(x,y,z,hosei){
  // hosei = 0.9 or 1.1 or 1.0
  return Math.floor((Math.floor(Math.floor(x*2 + y + (z / 4))*0.5) + 50 + 10) * hosei)
}
var hoseistyle = function(x){
      if (x == 1.1) return {border: '1px solid red', color: 'red'}
      else if(x == 0.9) return {border: '1px solid blue', color: 'blue'}
      else return {border: '', color: ''}
}

var testf = function(x){
  return true
}

import pokemonsearch from "./pokemon-search";

export default {
  components:{
    pokemonsearch
  },
  data(){
    return {
      pokemon_name: "",
      ability: "",
      helditem: "",
      selected_nat: ["", ""],
      nat_list: [
        {value:　["", ""], text: "無補正"},
        {value: ["atk", "spa"], text: "いじっぱり"}
      ],
      move:{
        move1: "",
        move2: "",
        move3: "",
        move4: ""
      },
      base:{
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      ind:{
        hp: 31,
        atk: 31,
        def: 31,
        spa: 31,
        spd: 31,
        spe: 31
      },
      eff:{
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      stats:{
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      act:{
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      nat:{
        atk: 1.0,
        def: 1.0,
        spa: 1.0,
        spd: 1.0,
        spe: 1.0
      }
    }
  },
  methods:{
    add_new_pokemon: function(){
      var poke = {
        base: this.base,
        nat: this.nat,
        name: this.pokemon_name,
        stats: this.stats,
        ind: this.ind,
        eff: this.eff,
        move: this.move,
        ability: this.ability,
        helditem: this.helditem
      }
      console.log("やい")
      this.$emit('addpokemon', poke)
    },
    SetBaseStatus: function(poke){
      console.log(poke)
      this.base = poke.base
      this.pokemon_name = poke.name 
    },
    nat_change: function(statname){
      if(this.nat[statname] == 1.1) this.nat[statname] = 0.9
      else if(this.nat[statname] == 0.9) this.nat[statname] = 1.0
      else if(this.nat[statname] == 1.0) this.nat[statname] = 1.1
    },
    set_nat: function(){
      if(this.is_valid_nat){
        for(let e in this.nat) this.nat[e] = 1.0
        this.nat[this.selected_nat[0]] = 1.1
        this.nat[this.selected_nat[1]] = 0.9
      }
    }
  },
  computed:{
    calchp: function(){
      this.stats.hp = Math.floor(Math.floor(this.base.hp*2 + this.ind.hp + (this.eff.hp / 4))*0.5) + 50 + 10
      return this.stats.hp
    },
    calcatk: function(){
      this.stats.atk = calc_nothp(this.base.atk, this.ind.atk, this.eff.atk, this.nat.atk)
      return this.stats.atk
    },
    calcdef: function(){
      this.stats.def = calc_nothp(this.base.def, this.ind.def, this.eff.def, this.nat.def)
      return this.stats.def
    },
    calcspa: function(){
      this.stats.spa = calc_nothp(this.base.spa, this.ind.spa, this.eff.spa, this.nat.spa)
      return this.stats.spa
    },
    calcspd: function(){
      this.stats.spd = calc_nothp(this.base.spd, this.ind.spd, this.eff.spd, this.nat.spd)
      return this.stats.spd
    },
    calcspe: function(){
      this.stats.spe = calc_nothp(this.base.spe, this.ind.spe, this.eff.spe, this.nat.spe)
      return this.stats.spe
    },
    hoseistyleatk: function(){
      return hoseistyle(this.nat.atk)
    },
    hoseistyledef: function(){
      return hoseistyle(this.nat.def)
    },
    hoseistylespd: function(){
      return hoseistyle(this.nat.spd)
    },
    hoseistylespa: function(){
      return hoseistyle(this.nat.spa)
    },
    hoseistylespe: function(){
      return hoseistyle(this.nat.spe)
    },
    is_valid_nat: function(){
      var up=0,down=0,nut=0;
      var ups="",downs=""
      for(let e in this.nat){
        if(this.nat[e] == 1.10){up+=1; ups=e}
        else if(this.nat[e] == 0.9){down+=1; downs=e}
        else nut+=1
      }

      if(nut == 5 || (up==1 && down==1)){
        this.selected_nat = [ups, downs]
        return true
      }
      else{
        this.selected_nat = null
        return false 
      }
    },
    nat_style: function(){
      if(this.is_valid_nat) return{backgroundColor: ''}
      else return {backgroundColor: '#ff00007d'}
    }
  }
    
}
</script>

