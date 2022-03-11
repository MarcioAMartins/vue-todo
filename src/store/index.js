import Vue from 'vue'
import Vuex from 'vuex'

import Localbase from 'localbase'
let db = new Localbase('db')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: [
      {id: 1, titulo: "Ir ao mercado", concluido: false },
      {id: 2, titulo: "Comprar ração", concluido: false },
    ],
  },
  mutations: {
    adicionaTarefa(state,titulo){

      db.collection('tarefas').add({
        id: new Date().getTime(),
        titulo,
        concluido: false
      })

      /* if(titulo){
        state.tarefas.push({
          id: new Date().getTime(),
          titulo,
          concluido: false
        })
      } */
    },
    removeTarefa(state, id){
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id)
    },
    editaTarefa(state, novaTarefa){
      let tarefa = state.tarefas.filter(tarefa => tarefa.id == novaTarefa.id)[0]
      tarefa.titulo = novaTarefa.titulo;
      //console.log(state);
      //console.log(tarefa);
    }
  },
  actions: {
  },
  
  modules: {
  }
})
