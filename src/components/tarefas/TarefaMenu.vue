<template>
    <div>
    <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            v-bind="attrs"
            v-on="on"
            icon
            >
                <v-icon>mdi-dots-vertical</v-icon>

            </v-btn>
        </template>
        <v-list>
            <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="item.click()"
            >
            
                <v-icon left > {{ item.icone }} </v-icon>

                <v-list-item-title>{{ item.title }}</v-list-item-title>
            
            </v-list-item>
        </v-list>
        </v-menu>
    </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { 
            icone:"mdi-pencil",
            title: 'Editar',
            click(){
                console.log("Editar")
            }
         },
        { 
            icone:"mdi-trash-can",
            title: "Excluir",
            click(){
                console.log("Eliminar")
            }           
         },
      ],
    }),
  }
</script>

<style>

</style>