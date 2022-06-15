// import './App.css';
// import {useEffect, useState} from "react";

// function App() {

//     const [movieDate, setMovieData] = useState();
//     const [movieTitle, setMovieTitle] = useState('star wars');

//     function handleClick(e){
//         e.preventDefault();
//         console.log('movie data');
//         console.log(movieDate);
//     }

//     useEffect(function (){
//        const movieUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=98e3fb1f`;
//         const makeApiCall = async () => {
//             const res = await fetch(movieUrl)
//             const json = await res.json()
//             setMovieData(json)
//         }
//         makeApiCall(); // call the function
//     },[movieTitle]);

//     return (
//         <>
//             <div className="App">Hello</div>
//             <button onClick={handleClick}>Click me</button>
//         </>
//     );
// }

// export default App;