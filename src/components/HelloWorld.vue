<template>
  <pacvue-input v-model="searchKey" placeholder="Serache">
    <template #prepend>
      <el-icon @click="click"><Search /></el-icon>
    </template>
  </pacvue-input>
  <STable
    v-model:pagination="pagination"
    :sticky="true"
    :columns="columns"
    :dataSource="dataSource"
    :xVirtual="!true"
  >
    <template #bodyCell="{ text, record, index, column }">
      <template v-if="'query' === column.dataIndex">
        <el-select
          class="m-2"
          placeholder="Select"
          size="small"
          v-model="record.testtt"
        >
          <el-option
            v-for="item in queryOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </template>
    </template>
  </STable>
</template>
<script>
import { ref, reactive, onMounted } from "vue";
import { mockDate, dataFormat, columns } from "../mock/mock.js";
import { bodyCell } from "./hooks.jsx";
import { queryOptions } from "../mock/mock.js";
// import { PacvueNotify } from "@pacvue/element-plus";
export default {
  setup() {
    console.log(import.meta.env);
    const loading = reactive({
      spinning: false,
    });

    let dataSource = ref([]);
    const vModel = reactive([
      {
        orderAsc: false,
        orderByField: "Spend",
        current: 1,
        pageSize: 30,
        total: 0,
        showQuickJumper: true,
        showSizeChanger: true,
        showTotal: (total) => `Total ${total} items`,
      },
      "pagination",
    ]);
    var pagination = reactive({
      orderAsc: false,
      orderByField: "Spend",
      current: 1,
      pageSize: 30,
      total: 0,
      showQuickJumper: true,
      showSizeChanger: true,
      showTotal: (total) => `Total ${total} items`,
    });
    const vSlots = { bodyCell };
    const getData = async () => {
      loading.spinning = true;
      const report = await mockDate("report");
      dataSource.value = dataFormat(report.data);
      loading.spinning = false;
      /* PacvueNotify({
        title: "Notification",
        message:
          "Fruitcake chocolate bar tootsie roll gummies jelly beans cake gummies.",
        pacType: "success",
      }); */
    };
    const click = () => {
      /* PacvueNotify({
        title: "Notification",
        message:
          "Fruitcake chocolate bar tootsie roll gummies jelly beans cake gummies.",
        pacType: "success",
      }); */
    };
    onMounted(() => getData());
    const nnnnn = ref(10);
    const unmber = ref([]);
    const change = (e) => {
      unmber.value = [];
      for (let i = 0; i < parseInt(e); i++) {
        unmber.value.push(i);
      }
      console.log(unmber.value);
    };
    const searchKey = ref([]);
    return {
      columns,
      dataSource,
      pagination,
      queryOptions,
      unmber,
      change,
      nnnnn,
      searchKey,
      click,
    };
    // return () => (
    //   <div class="example-basic">
    //     <Table1
    //       vSlots={vSlots}
    //       sticky={true}
    //       columns={columns}
    //       dataSource={dataSource.value}
    //       // vModel={[pagination, "pagination"]}
    //       pagination={pagination}
    //       xVirtual={true}
    //     />
    //   </div>
    // );
  },
};
</script>

<style>
.example-basic .el-date-editor {
  margin: 8px;
}
</style>
