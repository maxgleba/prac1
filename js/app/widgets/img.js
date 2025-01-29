export const img = {
    data() {
        return {
            src: ""
        };
    },
    methods: {
        changeImage() {
            const images = [
                "https://source.unsplash.com/random/800x600",
                "https://picsum.photos/800/600",
                "https://placekitten.com/800/600",
                "https://placebear.com/800/600"
            ];
            this.src = images[Math.floor(Math.random() * images.length)];
            console.log("Image changed to:", this.src);
        }
    },
    mounted() {
        this.changeImage(); // Меняем картинку при загрузке компонента
    }
};
