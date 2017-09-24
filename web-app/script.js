Vue.component('topbar', {
    template: '<div class="topbar"><div><a class="title" href="index.html">{{appname}}</a></div><div class="user-cntl"><div class="dpwrapper"><img class="dp" :src=dpsrc></div><p class="normal">{{username}}</p><img class="more" src="assets/more.svg"/></div></div>',
    data: function () {
        return {
            username: 'Elon Musk',
            appname: 'Meditrack',
            dpsrc: 'assets/elon-musk.jpg'
        };
    }
})

Vue.component('nav-option', {
    template: '<div><slot></slot></div>'
})

Vue.component('nav-list', {
    template: '<div class="sidebar"><nav-option v-for="item in items" :class="{activeoption : item.active}"><a :href=item.link class="sideoption"><img v-if="item.active" :src=item.alticon ><img v-else :src=item.icon ><span class="nav">{{item.name}}</span></a></nav-option></div>',
    data: function () {
        return {
            items: [
                {
                    name: 'Dashboard',
                    icon: 'assets/dashboard.png',
                    alticon: 'assets/dashboard-colored.png',
                    link: 'index.html',
                    active: true
                },
                {
                    name: 'Notifications',
                    icon: 'assets/notifications.png',
                    alticon: 'assets/notifications-colored.png',
                    link: '#',
                    active: false
                },
                {
                    name: 'Past Orders',
                    icon: 'assets/order.png',
                    alticon: 'assets/order-colored.png',
                    link: '#',
                    active: false
                },
                {
                    name: 'Settings',
                    icon: 'assets/settings.png',
                    alticon: 'assets/settings-colored.png',
                    link: '#',
                    active: false
                },
                {
                    name: 'Support',
                    icon: 'assets/support.png',
                    alticon: 'assets/support-colored.png',
                    link: '#',
                    active: false
                },
            ]
        }
    }
})


var en0 = new Vue({
    el: "#root",
    data: {
        options: [],
        homeActive: true,
        formActive: false,
        listEmpty: true,
        reviewMode: false,
        connectionCheck: false,
        ordercomplete: false,
        buttonText: "Resend Confirmation",
        namevalue: "",
        quantityvalue: "",
        frequencyvalue: "",
        orders: [],
        ordernumber: 0,
        userId: ""
    },
    methods: {
        addMedicine: function (e) {
            e.preventDefault();
            let temp = {
                id: this.ordernumber,
                name: this.namevalue,
                qty: this.quantityvalue,
                f: this.frequencyvalue
            };
            if (temp.name !== "" && temp.qty !== "" && temp.f !== "") {
                this.orders.push(temp);
            }
            this.namevalue = "";
            this.quantityvalue = "";
            this.frequencyvalue = "";
            if (this.orders.length) {
                this.listEmpty = false;
            }
        },
        startneworder: function () {
            this.homeActive = !this.homeActive;
            this.formActive = true;
            this.ordernumber++;
        },
        review: function () {
            this.formActive = false;
            this.reviewMode = true;
        },
        connect: function (e) {
            e.preventDefault();
            this.reviewMode = false;
            this.connectionCheck = true;
        }
    }
})
