<template>
  <v-dialog v-model="$root.dialog.show" max-width="500px">
    <v-card>
      <v-card-title class="headline">Login Required!</v-card-title>
      <v-card-text>
        You must be logged in to {{message}}.<br/>
        Unfortunately this is just a proof of concept version and login is not implemented.
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click.native="$root.dialog.show = false">close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'app-dialog',
    props: ['message'],
  };
</script>


