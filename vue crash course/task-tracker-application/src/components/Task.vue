<template>
    <div @dblclick="toggleReminder(task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
        <h3>{{ task.text }}
            <i @click="onDelete(task.id)" class="fas fa-xmark"></i>
        </h3>
        <p>{{ task.day }}</p>
</div>
</template>

<script>
    export default {
        name: 'Task',
        props: {
            task: Object
        },
        methods: {
            onDelete(id) {
                this.$emit('delete-task', id)
            },
            toggleReminder(id){
                this.$emit('toggle-reminder', id)
            }
        }
    }
</script>

<style>
.fas {
    color: red;
}
.task {
    background-color: #eeebeb;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
}
.reminder {
    border-left: solid 5px green;
}


h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>