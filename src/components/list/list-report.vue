
<template>
  <yl-flex-box class="yl-list" vertical is-reverse>
    <div slot="flex" v-loading="listloading" element-loading-text="加载中...">
      <div v-if="pageData.length" class="yl-list-warpper" :class="wrapClass">
        <div v-for="(item,index) in pageData" :key="index"
          :class="itemWrapClass"
          class="item-warpper">
          <slot :item="item" />
        </div>
      </div>
      <div v-else class="yl-list-nodata">暂无数据</div>
    </div>
    <div slot="fixed">
      <div style="text-align:right; background:#fff;padding:2px;">
        <el-pagination
          :current-page="currentPage"
          :page-sizes="paginationAttr.pageSizes"
          :page-size="paginationAttr.pageSize"
          :total="listData.length"
          :layout="paginationAttr.layout"
          :background="paginationAttr.background"
          :small="paginationAttr.small"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </yl-flex-box>
</template>

<script type="text/babel">
  export default {
    name: 'YlListReport',
    data () {
      return {
        pageData: [],
        currentPage: 1
      }
    },
    props: {
      wrapClass: {
          type: String,
          default: ''
        },
      itemWrapClass: {
        type: String,
        default: ''
      },
      listloading: {
        type: Boolean,
        default: false
      },
      listData: {
        type: Array,
        default: function () {
          return []
        }
      },
      pagination: {
        type: Object,
        default: function() {
          return {
            small: false,
            background: true,
            pageSize: 10,
            pageSizes: [10, 20, 50],
            layout: "sizes,prev, pager, next,  total" // prev, pager, next, jumper, ->, total, slot
          };
        }
      }
    },
    computed: {
      paginationAttr: {
        get () {
          return this.pagination
        }
      }
    },
    methods: {
      handleSizeChange (val) {
        this.paginationAttr.pageSize = val;
        this.getpagination()
      },
      handleCurrentChange (val) {
        this.currentPage = val
        this.getpagination()
      },
      getpagination (val) {
        let array = this.listData
        let pageSize = this.paginationAttr.pageSize
        let offset = this.paginationAttr.pageSize*(this.currentPage-1)
        this.pageData =
          offset + pageSize >= array.length
            ? array.slice(offset, array.length)
            : array.slice(offset, offset + pageSize);
      }
    },
    created () {},
    mounted () {},
    watch: {
      listData: function (n, o) {
        if (n.length > 0) {
          this.currentPage = 1
          this.getpagination()
        } else {
          this.pageData = []
        }
      }
    }
  }
</script>
