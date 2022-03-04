<template>
  <div>
      <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
            <v-card>
        <v-card-title class="text-h5">
          Editar
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text
        class="mt-2"
        >Informe o novo titulo.</v-card-text>
          <v-text-field
          class="px-3"
          label="Titulo"
          outlined
          ></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Editar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: true,
      }
    },
  }
</script>

<style>

</style>