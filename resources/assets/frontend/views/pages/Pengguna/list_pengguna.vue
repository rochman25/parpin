<template>
  <vx-card title="Daftar Pengguna" subtitle="List data akun pengguna">
    <div>
      <vs-table max-items="3" pagination:data="pengguna">
        <template slot="thead">
          <vs-th>Username</vs-th>
          <vs-th>Email</vs-th>
          <vs-th>No Telphone</vs-th>
        </template>
        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr,indextr) in data">
            <vs-td :data="data[indextr].email">{{data[indextr].email}}</vs-td>
            <vs-td :data="data[indextr].username">{{data[indextr].username}}</vs-td>
            <vs-td :data="data[indextr].no_telp">{{data[indextr].no_telp}}</vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
  </vx-card>
</template>