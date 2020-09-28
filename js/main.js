var app = new Vue({
    el: "#app",
    data: {
        items: [],
        newItem: '',
        currentId: 0
    },
    methods: {
        addItem: function() {
            this.currentId++
            this.items.push({ id: this.currentId, finished: false, name: this.newItem })
            this.newItem = ''
        },
        removeItem: function(id) {
            this.items = this.items.filter(item => item.id !== id);
        }
    }
})