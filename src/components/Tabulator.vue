<template>
  <div class="tab">
    <!-- <div v-if="showAlert">
      <el-alert
        center
        title="Error"
        type="error"
        description="This Port already exists!"
        show-icon
      >
      </el-alert>
    </div> -->
    <el-dialog
      style="font-size: 28px; border-radius=20px;"
      title="Advice"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span style="font-weight: 500; font-size: 17px"
        >It seems that your localStorage may have importable data. Do you want
        to use it?</span
      >
      <span slot="footer" class="dialog-footer">
        <el-button @click="localHandler(false)">No</el-button>
        <el-button type="primary" @click="localHandler(true)">Yes</el-button>
      </span>
    </el-dialog>
    <div class="tabulator">
      <div class="top-btns">
        <el-input
          v-model="search"
          size="mini"
          placeholder="Search Parent Port"
        />
        <el-button
          size="mini"
          type="primary"
          icon="el-icon-plus"
          @click="addParent"
        ></el-button>
        <el-button
          size="mini"
          type="success"
          icon="el-icon-download"
          @click="downloadTableData"
        ></el-button>
        <el-upload
          action="#"
          :show-file-list="false"
          :before-upload="handleFileUpload"
        >
          <el-button
            size="mini"
            type="info"
            icon="el-icon-upload"
            class="right-btn"
            style="margin-left: 10px"
            @click="importTableData"
          ></el-button>
        </el-upload>
      </div>

      <el-table
        stripe="true"
        empty-text="No Data Available!"
        :data="paginatedData"
        :row-key="getRowKey"
        style="width: 95%; margin: auto"
        max-height="350"
        border
      >
        <el-table-column prop="port" label="Port" sortable>
          <template slot-scope="{ row, $index }">
            <div v-if="editingRowIndex !== $index">{{ row.port }}</div>
            <el-input
              v-else
              type="number"
              v-model="row.port"
              @blur="saveRow($index)"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="ip" label="IP">
          <template slot-scope="{ row, $index }">
            <div v-if="editingRowIndex !== $index">{{ row.ip }}</div>
            <el-input
              v-else
              v-model="row.ip"
              @blur="saveRow($index)"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="Actions">
          <template slot-scope="{ row, $index }">
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="handleDelete(row)"
            ></el-button>
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              @click="startEdit($index)"
            ></el-button>
            <el-button
              size="mini"
              type="success"
              icon="el-icon-plus"
              @click="addChild(row, $index)"
              v-if="row.children"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="filteredData.length">
    </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // noData: "No Data Available!",
      tableData: [],
      editingRowIndex: null,
      search: "",
      dialogVisible: false,
      importLocalStorage: false,
      currentPage: 1,
      pageSize: 10,
    };
  },
  computed: {
    filteredData() {
      const { search, tableData } = this;
      return tableData.filter(data => !search || data.port.includes(search));
    },
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.filteredData.slice(startIndex, endIndex);;
    }
  },
  methods: {
    handleSizeChange(size) {
      this.pageSize = size;
    },
    handleCurrentChange(page) {
      this.currentPage = page;
    },
    localHandler(yes) {
      this.dialogVisible = false;
      this.importLocalStorage = yes;
      if (yes) {
        const parsedData = JSON.parse(localStorage.getItem("tableData"));
        this.tableData = parsedData;
      }
      if (!yes) {
        localStorage.removeItem("tableData");
      }
    },
    open2(message) {
      this.$notify({
        title: "Success",
        message: message,
        type: "success",
        position: "bottom-right",
        duration: 2000,
      });
    },
    open4() {
      this.$notify.error({
        title: "Deleted",
        // message: 'Deleted!',
        position: "bottom-right",
        duration: 2000,
      });
    },
    error() {
      this.$notify.error({
        title: "Error",
        message: "This port already exists!",
        position: "top-right",
        duration: 2000,
      });
    },
    saveRow(index) {
      if (this.tableData[index] && this.tableData[index].port !== undefined) {
        console.log(this.tableData[index].port);

        // Check for duplicate values in the 'port' property
        const currentPort = String(this.tableData[index].port);

        // Check for duplicates in the entire array except for the current index
        const hasDuplicates =
          this.tableData.filter(
            (item, i) => i !== index && String(item.port) === currentPort
          ).length > 0;

        if (hasDuplicates) {
          if (this.tableData[index].port === "") {
            this.editingRowIndex = null;
            return;
          }
          this.error();
          console.log("Duplicate values");
          this.editingRowIndex = index;
          return;
        }
      }
      this.editingRowIndex = null;
      localStorage.setItem("tableData", JSON.stringify(this.tableData));
      this.open1(); // Save changes and reset editing index
    },
    getRowKey(row) {
      return row.id;
    },
    startEdit(index) {
      console.log(index);
      this.editingRowIndex = index;
      localStorage.setItem("tableData", JSON.stringify(this.tableData));
    },
    addParent() {
      const lastRowIndex = this.tableData.length - 1;
      const newParent = {
        id: this.generateUniqueId(),
        port: "",
        children: [],
      };
      this.tableData.push(newParent);

      // Start editing the newly added row
      this.editingRowIndex = lastRowIndex + 1;
      this.open2("New Port Addtion Success.");
      // }
    },
    addChild(parent, parentIndex) {
      if (!parent.children) {
        this.$set(parent, "children", []);
      }

      // Add new child row
      const newChild = { id: this.generateUniqueId(), port: "", ip: "" };
      parent.children.push(newChild);

      // Start editing the newly added child row
      this.editingRowIndex = parentIndex + parent.children.length;
      this.open2("Child Port Addition Success.");
    },
    open1() {
      this.$notify({
        title: "Edited",
        message: "You have Edited Port/Ip",
        type: "warning",
        position: "bottom-right",
        duration: 2000,
      });
    },
    generateUniqueId() {
      return new Date().getTime();
    },
    handleDelete(row) {
      this.deleteItem(this.tableData, row);
      localStorage.setItem("tableData", JSON.stringify(this.tableData));
      if (localStorage.getItem("tableData").length === 2) {
        console.log("data null");
        localStorage.removeItem("tableData");
      }
      this.open4();
    },
    fix() {
      const elementWithClass = document.querySelector(".el-table__empty-text");
      if (elementWithClass !== null) {
        elementWithClass.innerText = this.noData;
      }
    },
    deleteItem(array, target) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
          array.splice(i, 1);
          if (array.length === 0) {
            setTimeout(() => {
              this.fix();
            }, 5);
          }
          return;
        }
        if (array[i].children) {
          this.deleteItem(array[i].children, target);
        }
      }
    },
    handleFileUpload(file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          this.tableData = jsonData;

          this.$message({
            message: "File uploaded successfully!",
            type: "success",
          });
        } catch (error) {
          console.error("Error parsing JSON file:", error);
          this.$message.error("Invalid JSON file");
        }
      };

      reader.readAsText(file);
      return false;
    },
    downloadTableData() {
      const jsonData = JSON.stringify(this.tableData, null, 2);
      const blob = new Blob([jsonData], { type: "application/json" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "tableData.json";
      link.click();
    },
    importTableData() {
      console.log("Import table data");
    },
  },
  mounted() {
    if (localStorage.getItem("tableData")) {
      this.dialogVisible = true;
    } else {
      console.log("No Data in localStorage...");
    }
    // this.fix();
  },
};
</script>

<style>
.el-input--mini {
  margin-right: 10px;
  max-width: 308px;
}
.tabulator {
  margin-top: 5vh;
}
.top-btns {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  margin: 0px 7px;
}
div .cell {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}
</style>
