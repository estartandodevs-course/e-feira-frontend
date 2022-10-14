


// // export pullHCategories() => {
    

// //   fetch(apiUrl)
// //     .then(response => response.json())
// //     .then(responseData => {
// //       setCategories(responseData )


// //     })
// //     .catch(error => {
// //       console.error(error);
// //     });
// // }

// import { useState, useEffect } from 'react'
// import axios from 'axios';

// export const useAxios= () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data: response } = await axios.get('https://private-ea557-efeira1.apiary-mock.com/home/latest-streetMarket');
//         setData(response);
//       } catch (error) {
//         console.error(error)
//       }
//       setLoading(false);
//     };

//     console.log(fetchData());
//   }, []);

//   return {
//     data,
//     loading,
//   };
// };
