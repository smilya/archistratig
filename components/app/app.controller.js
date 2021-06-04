const data = [
    {
        id: 0,
        firstName: "OneName",
        lastName: "OneSruname",
        age: 10,
        isMale: true,
    },
    {
        id: 1,
        firstName: "TwoName",
        lastName: "TwoSruname",
        age: 20,
        isMale: false,
    },
    {
        id: 2,
        firstName: "ThreeName",
        lastName: "ThreeSuruname",
        age: 30,
        isMale: false,
    },
    {
        id: 3,
        firstName: "FourName",
        lastName: "FourSuruname",
        age: 40,
        isMale: true,
    },
];
export default class AppController {
    constructor() {
        this.isSidebarOpen = true;
        this.isGridformOpen = false;
        this.actionType = "";
        this.gridData = data;
        this.addedUserIndex = 0;
        this.userToEdit = {
            id: -1,
            firstName: "",
            lastName: "",
            age: -1,
            isMale: false,
        };
        this.myVar = 11.22;
        this.maxId = 0;
        const IDs = data.map(item => item.id);
        this.maxId = Math.max.apply(null, IDs);
    }
    onBurgerClick() {
        this.isSidebarOpen = !this.isSidebarOpen;
    }
    onGridformClose() {
        this.isGridformOpen = false;
    }
    onDelete(index) {
        this.gridData.splice(index, 1);
    }
    onAdd(index) {
        this.isGridformOpen = true;
        this.actionType = "Add";
        this.addedUserIndex = index + 1;
        this.userToEdit = {
            id: ++this.maxId,
            firstName: "",
            lastName: "",
            age: "",
            isMale: true,
        };
    }
    onEdit(index) {
        this.isGridformOpen = true;
        this.actionType = "Edit";
        this.userToEdit = data[index];
    }
    onSubmit(newUserData) {
        this.isGridformOpen = false;
        if (this.actionType === "Edit") {
            const editedUser = { ...this.userToEdit, ...newUserData };
            data.forEach((item, index) => {
                if (item.id === editedUser.id) {
                    data[index] = editedUser;
                }
            });
        }
        if (this.actionType === 'Add') {
            const newUserIndex = this.addedUserIndex;
            const newUser = { ...this.userToEdit, ...newUserData };
            this.gridData.splice(newUserIndex, 0, newUser);
        }
    }
}
