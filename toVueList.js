Vue.component('todo-item', {
    props: ['todo'],
    template: `<li>
            <span  v-if="todo.visible"> {{ todo.title }} </span>
            <button v-on:click="$emit(\'remove\')">remove</button>
        </li>
        `
})

new Vue({
    el: '#app',
    data: {
        todos: [{
            title: 'Learn JavaScript',
            visible: true
        }, {
            title: 'Learn Vue',
            visible: true
        }, {
            title: 'Build something awesome',
            visible: true
        }],
        newTodoText: ''
    },
    methods: {
        add: function() {
            this.todos.push({
                title: this.newTodoText,
                visible: true
            })
            this.newTodoText = '';
        },
        remove: function(index) {
            this.todos.splice(index, 1);
        }
    }
})
