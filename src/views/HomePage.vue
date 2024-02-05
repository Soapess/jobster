<template>
    <div class="search">
        <input type="text" value="输入以搜索">
    </div>
    <div class="main">
        <button @click="toListA()">
            行业搜索
        </button>
        <button @click="toListB()">
            职位搜索
        </button>
        <br>
        <div class='list' v-for="item in listA" :key="item.id">
            <button type='button' @click="contentKey = 'list' + item.id.toString()">
                {{ item.value }}
            </button>
        </div>
        <div class="content-list" v-for="(content,index) in ContentList[contentKey]" v-bind:key="index">
            <li>
                {{ content.name }}
            </li>
        </div>
    </div>
</template>

<script setup lang='ts' name='HomePage'>
import { ref } from "vue"

// 数据
let listA = ref([{ id: 1, value: '文化传媒行业', show: 'showA01' }, { id: 2, value: '营销传播行业', show: 'showA02' }, { id: 3, value: '互联网传播行业', show: 'showA03' }])
let contentKey = ref('list1')
let ContentList = ref({
    list1: [{ id: '11', name: '出版行业' }, { id: '12', name: '广播电视行业' }, { id: '13', name: '影视行业' }],
    list2: [{ id: '21', name: '广告行业' }, { id: '22', name: '新媒体营销' }, { id: '23', name: '公关行业' }],
    list3: [{ id: '31', name: '游戏行业' }, { id: '32', name: '互联网电商' }, { id: '33', name: '生活服务' }, { id: '34', name: '互联网广告' }, { id: '35', name: '在线招聘' }, { id: '36', name: '在线医疗' }, { id: '37', name: '知识付费' }, { id: '38', name: '流媒体服务' }],
    list4: [{ id: '41', name: '产品经理' }, { id: '42', name: '用户研究' }, { id: '43', name: '产品助理' }, { id: '44', name: '产品专员' }, { id: '45', name: '产品运营' }, { id: '46', name: '游戏策划' }],
    list5: [{ id: '51', name: 'UI设计' }, { id: '52', name: '视觉设计' }, { id: '53', name: '游戏/动画设计' }, { id: '54', name: '3D设计' }, { id: '55', name: '原画师' }, { id: '56', name: '工业设计' }, { id: '57', name: '平面设计' }, { id: '58', name: '交互设计' }],
    list6: [{ id: '61', name: '数据分析' }, { id: '62', name: '软件工程师' }, { id: '64', name: '研发工程师' }, { id: '65', name: '测试工程师' }, { id: '66', name: '前端工程师' }, { id: '67', name: '后端工程师' }, { id: '68', name: '硬件工程师' }, { id: '69', name: '人工智能' }, { id: '610', name: '游戏开发' }, { id: '611', name: '运维工程师' }, { id: '612', name: '通信工程师' }, { id: '613', name: '网络安全' }, { id: '614', name: '移动工程师' }, { id: '615', name: '技术支持' }],
    list7: [{ id: '71', name: '记者' }, { id: '72', name: '主播/主持' }, { id: '73', name: '摄影/摄像' }, { id: '74', name: '后期' }, { id: '75', name: '编导' }, { id: '76', name: '制片人' }, { ia: '77', name: '策划' }, { id: '78', name: '市场' }, { id: '79', name: '造型师' }, { id: '710', name: '编辑' }, { id: '711', name: '发行' }],
    list8: [{ id: '81', name: '文案' }, { id: '82', name: '广告' }, { id: '83', name: '新媒体运营' }, { id: "84", name: '经纪人' }, { id: '85', name: '助理' }, { id: '86', name: '内容运营' }, { id: '87', name: '用户运营' }, { id: '88', name: '公关' }],
    list9: [{ id: '91', name: '销售代表' }, { id: '92', name: '招商专员' }, { id: '93', name: '客服' }, { id: "94", name: '活动执行' }, { id: '95', name: '市场推广' }, { id: '96', name: '品牌专员' }, { id: '97', name: '门店店长' }, { id: '98', name: '销售经理' }],
    list10: [{ id: '101', name: '人力资源专员' }, { id: '102', name: '行政专员' }, { id: '103', name: '助理' }, { id: "104", name: '招聘专员' }, { id: '105', name: '前台' }, { id: '106', name: '文秘' }]
})
// 方法
function toListB() {
    listA.value = [{ id: 4, value: '互联网产品', show: 'showB01' }, { id: 5, value: '设计', show: 'showB02' }, { id: 6, value: '互联网技术', show: 'showB03' }, { id: 7, value: '传统媒体', show: 'showB04' },
    { id: 8, value: '新媒体', show: 'showB05' }, { id: 9, value: '销售', show: 'showB06' }, { id: 10, value: '职能类', show: 'showB07' }]
}
function toListA() {
    listA.value = [{ id: 1, value: '文化传媒行业', show: 'showA01' }, { id: 2, value: '营销传播行业', show: 'showA02' }, { id: 3, value: '互联网传播行业', show: 'showA03' }]
}
</script>



<style lang="scss" scoped>

</style>
