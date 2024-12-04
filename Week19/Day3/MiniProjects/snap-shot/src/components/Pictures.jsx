import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {createClient} from "pexels";
import './pictures.css';
export const Pictures = (props) => {
    const params = useParams();
    const {keyword} = params;
    const [pictureList, setPictureList] = useState([]);

    const getAll = async () => {
        try {
            const client = createClient(import.meta.env.VITE_APP_PEXEL_KEY)
            const res = await client.photos.search({query:keyword, per_page: 30});
            setPictureList(res.photos);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getAll();
    }, [keyword])
    return (
        <>
            <h2 style={{textTransform:"capitalize"}}>{keyword} Images</h2>
            <ul className="gallery">
            {pictureList.map(item => {
                return (<li key={item.id}><a href={item.url} target="_blank"><img src={item.src.tiny}/></a></li>);
                })}
            </ul>
            <a href="https://www.pexels.com">Photos provided by Pexels</a>
        </>
    )
}