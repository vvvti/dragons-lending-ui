import {useCallback, useState} from 'react';
import {createArray} from '../utils/createArray';
import axios from 'axios';

// export const useFetchImages = () => {
//     const [images, setImages] = useState([]);
//     const cards = createArray(images);
//
//     useEffect(() => {
//         const fetchUsers = async () => {
//             await axios
//                 .get("https://randomuser.me/api/?results=9")
//                 .then((response) => {
//                     const results = response.data.results;
//                     setImages(results.map((result: any) => result.picture.large));
//                 })
//                 .catch(() => {
//                     console.log("check your code");
//                 });
//         };
//
//     }, []);
//
//     return {cards, fetchUsers};
// };

export const useFetchImages = () => {
    const [images, setImages] = useState([]);
    const cards = createArray(images);

    const getImages = useCallback(async () => {
        const results = await axios.get('https://randomuser.me/api/?results=9');
        console.log(results);
        setImages(results.data.results.map((result: any) => result.picture.large));
    }, []);

    return {
        cards,
        getImages,
    };
};
