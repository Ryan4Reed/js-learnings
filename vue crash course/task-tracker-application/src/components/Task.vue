<template>
    <div class="task">
        <h3>{{ task.text }}</h3>
        <p>{{ task.day }}</p>
</div>
</template>

<script>
    export default {
        name: 'Task',
        props: {
            task: Object
        }
    }
</script>

<style>
.task {
    background-color: #eeebeb;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
}

.task.reminder {
    border-left: green;
}


h3 {
    display: flex;
    align-items: center;
}
</style>