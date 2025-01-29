export const toogle = {
    data() {
        return {
            state: false
        };
    },
    methods: {
        toggle() {
            this.state = !this.state;
            console.log("Toggle state:", this.state);
        }
    }
};
