export const msg = {
    data() {
        return {
            alert: "",
            success: "",
            t1: null,
            t2: null,
            confirmTitle: "Please confirm next action",
            confirm: "",
            code: 0,
            interval: null
        };
    },
    mounted() {
        this.parent = this.$parent?.$parent?.$parent;
    },
    methods: {
        fadeIn(el, timeout, display) {
            el.style.opacity = 0;
            el.style.display = display || "block";
            el.style.transition = `opacity ${timeout}ms`;
            setTimeout(() => {
                el.style.opacity = 1;
            }, 10);
        },
        fadeOut(el, timeout) {
            el.style.opacity = 1;
            el.style.transition = `opacity ${timeout}ms`;
            setTimeout(() => {
                el.style.opacity = 0;
                setTimeout(() => el.style.display = "none", timeout);
            }, timeout);
        },
        successFun(msg) {
            this.success = msg;
            if (document.querySelector(".successMsg"))
                document.querySelector(".successMsg").style = "";
            
            clearTimeout(this.t1);
            clearTimeout(this.t2);

            this.t1 = setTimeout(() => {
                const block = document.querySelector(".successMsg");
                this.fadeIn(block, 1000, "flex");

                this.t2 = setTimeout(() => {
                    this.fadeOut(block, 1000);
                }, 3000);
            }, 100);
        },
        alertFun(msg) {
            this.alert = msg;
            if (document.querySelector(".alertMsg"))
                document.querySelector(".alertMsg").style = "";

            clearTimeout(this.t1);
            clearTimeout(this.t2);

            this.t1 = setTimeout(() => {
                const block = document.querySelector(".alertMsg");
                this.fadeIn(block, 1000, "flex");

                this.t2 = setTimeout(() => {
                    this.fadeOut(block, 1000);
                }, 3000);
            }, 100);
        }
    },
    template: `
        <div class="alertMsg" v-if="alert">
            <div class="wrapper al">
                <i class="fas fa-times-circle"></i> {{ alert }}
            </div>
        </div>
        <div class="successMsg" v-if="success">
            <div class="wrapper al">
                <i class="fas fa-check-circle"></i> {{ success }}
            </div>
        </div>
    `
};
