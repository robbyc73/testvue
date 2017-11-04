Vue.component('plan', {
        template: '#plan-template',
        props: ['plan','active'],
        methods: {
            setActivePlan: function() {
                this.active = this.plan;
            }
        },

        computed: {
            isUpgrade: function() {
                return this.active.rate > this.plan.rate
            },
        },
        /*created: function() {
            this.$emit('update:active', JSON.parse(this.active))
        }*/

});

new Vue({
    el: '#app',
    data: {
        plans: [
            {
                title: 'Enterprise',
                rate: 100
            },
            {
                title : 'Professional',
                rate: 70
            },
            {
                title: 'Starter',
                rate: 30
            },
            {
                title: 'Free',
                rate: 0
            }

        ],
        active: false,

    },


})