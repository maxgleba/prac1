export const popup = {
    data() {
        return {
            visible: false
        };
    },
    methods: {
        show() {
            this.visible = true;
            console.log("Popup opened");
        },
        hide() {
            this.visible = false;
            console.log("Popup closed");
        }
    }
};
