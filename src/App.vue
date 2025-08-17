<script setup>
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="sym_o_menu" aria-label="Menu" />
        <q-toolbar-title>Quasar + Vite</q-toolbar-title>
        <q-btn flat dense round icon="sym_o_settings" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="q-pa-md">
        <div class="row q-col-gutter-md">
          <div class="col-12">
            <q-card>
              <q-card-section class="text-h6">
                Добро пожаловать в Quasar
              </q-card-section>
              <q-separator />
              <q-card-section>
                <q-btn color="primary" icon="sym_o_home" label="Главная" class="q-mr-sm" />
                <q-btn color="secondary" outline icon="sym_o_search" label="Поиск" />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
