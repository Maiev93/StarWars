<template>
    <div class="pagination">
        <ul class="pagination__ul">
            <li class="pagination__item" v-for="page in totalPages" :key="page.index">
                <button class="pagination__button" :class="{active: currentPage == page}" @click="changePage(page)">{{page}}</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {totalPages: Number},
    data() {
        return {
            currentPage: 1
        }
    }, 
    methods: {
        changePage (pageNumber) {
            this.currentPage = pageNumber
            this.$emit('pageChanged', pageNumber)
        },
    },
    computed: {
    }
}
</script>

<style>
.pagination__ul {
 display: flex;
 justify-content: center;
}
    .pagination__button {
        background: darkgray;
        color: cornsilk;
        border-radius: 50%;
        width: 25px;
    }
    .pagination__item {
        list-style-type: none;
        margin: 1%;
    }
    .active {
        background: #000;
    }
</style>