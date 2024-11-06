import axios from "axios";
export const fetchPosts = async () =>{
        try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error); // Handle the error
        throw error;
    }
}