Vue.component('todo-item', {
    props: ['todo'],
    template: `<li>
            <input  v-if="todo.visible" v-on:blur="$emit(\`update\`)" v-bind:value="todo.title" v-model="todo.title">
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
            // require respone from post get the id of the newly created post
            // supplying the id allows us to update these new posts successfully
            postTodo(this.newTodoText).then(function(response) {
                todos.todos.push({
                    title: todos.newTodoText,
                    visible: true,
                    id: response.name
                });
                todos.newTodoText = '';
            }); // post to database
        },
        remove: function(index) {
            deleteTodo(this.todos[index].id); // runs delete AJAX call
            this.todos.splice(index, 1); // removes from list
        },
        update: function(index) {
            // this.todos[index].title =
            updateTodo(this.todos[index].title, this.todos[index].id);
        }
    }
});
