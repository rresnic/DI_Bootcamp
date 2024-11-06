import express from 'express';
const app = express();
const PORT = 5000;
import { fetchPosts } from './data/dataService.js';

app.use(express.json());
app.listen(PORT, ()=>{
    console.log('Server is running on port', PORT);
});   
    
    // Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.
app.get("/posts", async (req, res)=> {
    try {
        const posts = await fetchPosts();  
        res.send(posts); 
        console.log("Sent successfully");
        return;
    } catch (error) {
        res.status(500).send('Error fetching posts'); 
    }
})
