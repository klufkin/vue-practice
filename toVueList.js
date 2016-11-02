Vue.component('todo-item', {
    props: ['todo'],
    template: `<li>
            <span  v-if="todo.visible"> {{ todo.title }} </span>
            <button v-on:click="$emit(\'remove\')">remove</button>
        </li>
        `
})

let todos = new Vue({
    el: '#app',
    data: {
        todos: [],
        newTodoText: ''
    },
    created: function() {
        getTodos().then(function(data) { // pulls posts from database
            for (key in data) {
                data[key]['id'] = key; // create id parameter
                todos.todos.push(data[key]);
            }
        });
    },
    methods: {
        add: function() {
            this.todos.push({
                title: this.newTodoText,
                visible: true
            });
            postTodo(this.newTodoText); // post to database
            this.newTodoText = '';
        },
        remove: function(index) {
            deleteTodo(this.todos[index].id); // runs delete AJAX call
            this.todos.splice(index, 1); // removes from list
        }
    }
});
