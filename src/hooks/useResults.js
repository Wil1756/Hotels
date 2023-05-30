// import { useState,useEffect } from 'react';
// import rapid from '../api/rapid';


// export default () => {
//     const [results, setResults] = useState([]);
//     const [errorMessage, setErrorMessage] = useState("");

//     const SearchApi = async () => {
//         try {
//             const response = await rapid.get('',{
//                 params: {
//                     query: 'hotels in uganda',
//                     lang: 'en_US',
//                     units: 'km'
//                   },
//             });
//             console.log(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     useEffect(() => {
//         SearchApi('');
//     },[])

//     return [SearchApi, results,errorMessage];
// }