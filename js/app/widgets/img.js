export const img = {
    data() {
        return {
            src: "default.jpg"
        };
    },
    methods: {
        changeImage(newSrc) {
            this.src = newSrc;
            console.log("Image changed to:", this.src);
        }
    }
};
