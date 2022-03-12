<template>
  <div>
    <v-col cols="12">
      <v-text-field
        v-model="campoInput"
        label="Insira uma tarefa"
        outlined
        clearable
        @keyup.enter="handleAddTarefa"
      ></v-text-field>
    </v-col>

    <ListadeTarefas />
  </div>
</template>

<script>
import ListadeTarefas from '../components/tarefas/ListadeTarefas.vue';
export default {
  name: "Home",

  components: {
    ListadeTarefas,
  },
  data() {
    return {
      campoInput: null,
    };
  },
  created() {
    this.$store.commit("buscaTarefas");
  },
  methods: {
    handleAddTarefa() {
      //this.$store.commit('adicionaTarefa',this.campoInput)
      this.$store.dispatch("adicionaTarefa", this.campoInput);
      this.campoInput = null;
    },
  },
};
</script>
