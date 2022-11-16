<template>
    <form class="add-task">
        <div class="form-control">
            <label>Task</label>
            <input type="text" v-model="text" name="text" placeholder="Add Task">
        </div>
        <div class="form-control">
            <label>Day & Time</label>
            <input type="text" v-model="day" name="day" placeholder="Add Day & Time">
        </div>
        <div class="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" v-model="reminder" name="reminder" placeholder="Add Day & Time">
        </div>
        <input type="submit" value="Save Task" class="btn btn-block">
    </form>
</template>

<script>
    export default {
        name: 'AddTask',
        data() {
            return {
                text: '',
                day: '',
                reminder: false
            }
        }
    
    }
</script>

<style scoped>
.add-task {
    margin-bottom: 40px;
}
.form-control {
    margin: 20px 0;
}
.form-control label {
    display: block;
}
.form-control input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
}
.form-control-check {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.form-control-check input {
    flex-basis: 0;
    height: 1rem;
}
</style>