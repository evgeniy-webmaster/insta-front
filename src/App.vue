<script setup>
import { ref } from 'vue'
const counter = ref(0)
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" />
        <q-toolbar-title>Quasar + Vue 3</q-toolbar-title>
        <q-btn color="primary" icon="add" label="Add" @click="counter++" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <div class="q-pa-md">
        <q-card>
          <q-card-section>
            <div class="text-h6">Counter</div>
            <div class="text-subtitle2">Current count: {{ counter }}</div>
          </q-card-section>
          <q-separator inset />
          <q-card-actions align="right">
            <q-btn color="primary" icon="add" label="Increment" @click="counter++" />
          </q-card-actions>
        </q-card>
      </div>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
</style>
