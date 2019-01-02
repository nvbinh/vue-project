<template>
  <div class="table-wrap coltype" style="width: 50%">
    <table class="table ui-accordion">
      <caption></caption>
      <colgroup>
        <col style="width:10px">
        <col style="width:50px;">
        <col style="width:30px">
      </colgroup>
      <thead>
      <tr>
        <th scope="col" v-for="column in data.columns" :key="column.field">{{ column.label }}</th>
      </tr>
      </thead>
      <tbody>
        <template v-for="(row, key) in data.rows">
          <tr class="head" :key="key">
            <td>{{row.title.order}}</td>
            <td>{{row.title.type}}</td>
            <td>{{row.title.question}}</td>
          </tr>
          <tr class="body active" :key="`${key}_content}`">
            <td colspan="3">
              <div class="answer img-preview" id="cont0" v-html="row.content">
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import jsonData from './JsonFiles/test1'

export default {
  name: 'Test1',
  data () {
    return {
      data: {
        columns: [],
        rows: []
      },
      selectRow: 0
    }
  },
  mounted () {
    this.data.columns = [ ...jsonData.columns ]
    this.data.rows = [ ...jsonData.rows ]
  },
  setActiveRow (index) {
    this.selectRow = index
  }
}
</script>

<style scoped>
  .table-wrap {
    border-top: 1px solid #767676;
    border-bottom: 1px solid #767676;
  }
  table.ui-accordion {
    border-top: none;
  }
  .ui-accordion {
    border-top: 1px solid #bebebe;
  }
  table {
    width: 100%;
    table-layout: fixed;
    border-spacing: 0;
    border-collapse: collapse;
    background: #fff;
  }
  table caption {
    display: none;
  }
  caption {
    display: table-caption;
    text-align: -webkit-center;
  }
  colgroup {
    display: table-column-group;
  }
  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }
  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
  .table-wrap.coltype table thead th {
    padding: 12px 5px 10px;
    line-height: 22px;
    color: #444;
    text-align: center;
    vertical-align: middle;
    background: #f6f6f6;
  }
  th {
    font-weight: bold;
  }
  td, th {
    display: table-cell;
  }
  tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }
  .table-wrap.coltype table tbody tr:first-child th, .table-wrap.coltype table tbody tr:first-child td {
    border-top: 1px solid #eee;
  }
  .table-wrap.coltype table tbody td {
    padding: 16px 5px 14px;
    line-height: 22px;
    color: #666;
    text-align: center;
    vertical-align: middle;
  }
  a, a:visited, a:focus {
    text-decoration: none;
  }
  a {
    color: #666;
  }
  table.ui-accordion .body {
    display: none;
  }
  .table-wrap.coltype table tbody td {
    padding: 16px 5px 14px;
    line-height: 22px;
    color: #666;
    text-align: center;
    vertical-align: middle;
  }
  table.ui-accordion .body td {
    padding: 25px 40px!important;
    text-align: left!important;
    border-top: 1px solid #45675b!important;
    background: #f8f8f8;
  }
  table.ui-accordion .body.active {
    display: table-row;
  }
  .table-wrap table tbody td {
    padding: 12px;
    vertical-align: middle;
    text-align: left;
    color: #666;
    border-top: 1px solid #e0e0e0;
  }
  .table-wrap.coltype table td .attached {
    padding: 15px 0;
    text-align: right;
    color: #46675c;
  }
  strong, .strong {
    font-weight: 600;
  }
  .table-wrap.coltype table td .attached a {
    display: inline-block;
    color: #46675c;
  }
</style>
