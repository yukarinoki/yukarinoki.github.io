<template>
    <div>
        <div>
            <input type="text" class="form-control" id="inputName" placeholder="Name" v-model="pokemon_name" v-on:click="isModal = true">

            <button v-on:click="filteredItems()"></button>
        </div>
        <transition name="modal" v-if="isModal">
            <div class="overlay" @click="isModal = false">
                <div class="panel" @click.stop>
                    <input type="text" class="form-control" id="inputName" placeholder="search word..." v-model="search_word">
                    <div class="scroll-box">
                        <ul class="item-list">
                            <li v-for="item in filteredPokes" :key="item.id" @click="onSelectItem(item)" style="text-align: left;padding: 3px;">
                                {{ item.name }} {{item.type[0]}} {{item.type[1]}} 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import {pokemon_data} from "../assets/pokemon_data"
    export default {
        data() {
            return {
                pokemon_name: "",
                isModal: false,     // Modal表示フラグ
                items: pokemon_data,
                search_word: ""
            }
        },
        methods: {
            onSelectItem(item) {
                this.pokemon_name = item.name
                this.isModal = false;
                this.$emit("setpokemonname", item)
            },
            logout(){
                console.log(this.isModal)
                console.log(this.pokemon_name)
            }
        },
        computed: {
            filteredPokes: function() {
                var pokemons = [];
                for(var i in this.items) {
                    var pokemon = this.items[i];
                    if(pokemon.name.indexOf(this.search_word) !== -1) {
                        pokemons.push(pokemon);
                    }
                }
                return pokemons;
            }
        }
    }
</script>

<style>
.overlay {
    background: rgba(0, 0, 0, .8);
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 900;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
 
}
 
.panel {
    width: 600px;
    height: 400px;
    background: #fff;
    padding: 20px;
 
    h3 {
        margin-bottom: 10px;
    }
}
 
.scroll-box {
    height: 300px;
    overflow-y: auto;
    margin-bottom: 20px;
    border: solid 1px #bbb;
}
.item-list {
    list-style: none;
    padding: 0;
 
    &.is-border {
        border: solid 1px #bbb;
        margin-bottom: 20px;
    }
 
    li {
        border-top: solid 1px #bbb;
        margin-top: -1px;
        padding: 10px;
        display: flex;
        justify-content: space-between;
 
        &:first-child {
            border-top: none;
        }
    }
}
.btn {
    width: 100%;
    padding: 15px;
    border: none;
    background: #eee;
}
</style>