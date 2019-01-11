import Vue from 'vue';

var app = new Vue({
    el: '#app',
    data: {
        location : "Colorado Springs, Co",
        newAttendee: "",
        attendees : [],
        dark: true
        },
    methods: {
        addAttendee: function() {
            this.attendees.push(this.newAttendee);
            this.newAttendee = "";
        }
    }
});
