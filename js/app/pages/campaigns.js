export const campaigns = {
    data: function() {
        return {
            parent: ""
        };
    },
    mounted: function() {
        this.parent = this.$parent?.$parent;

        if (!this.parent?.user) {
            this.parent?.logout();
        }
    },
    methods: {
        exampleMethod() {
            console.log("This is an example method");
        }
    },
    template: `
        <div>
            <h1>Campaigns</h1>
            <p>Welcome to the Campaigns page.</p>
        </div>
    `
};
