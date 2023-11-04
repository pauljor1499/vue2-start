import axios from "axios";
const BASE_URL = "https://dummyjson.com/users";

export default class UsersAPI {
    async fetchUsers() {
        const result = await axios.get(BASE_URL);
        // console.log(result.data.users);
        return result.data.users;
    }
}
