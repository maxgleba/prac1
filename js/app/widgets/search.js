export const search = {
    data() {
        return {
            query: ""
        };
    },
    methods: {
        performSearch() {
            console.log("Searching for:", this.query);
        }
    }
};
