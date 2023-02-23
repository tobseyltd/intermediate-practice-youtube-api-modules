import { get_youtube_Genres, get_vidz_By_cat, get_selected_Genre } from "../js/modules/youtube.js";

const APIKEY = 'AIzaSyAONbxh9eB1RVs2uI8JYsvri_iG0Z2CADo';
const category = document.querySelector('#genres');

// const get_youtube_Genres = async () => {

//     try {
//         const RESPONSE = await fetch('https://www.googleapis.com/youtube/v3/videoCategories/?regionCode=de&key=AIzaSyAONbxh9eB1RVs2uI8JYsvri_iG0Z2CADo', {

//             method: 'GET'
//         });

//         if (RESPONSE.ok) {
//             const jsonResponse = await RESPONSE.json();
//             return jsonResponse.items;
//         }
//     }
//     catch (error) {
//         console.log(error)
//     }
// };

// const get_vidz_By_cat = async () => {
    
//     const category = get_selected_Genre();

//     try {
//         const RESPONSE = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=id&chart=mostPopular&regionCode=de&videoCategoryId=${category}&key=AIzaSyAONbxh9eB1RVs2uI8JYsvri_iG0Z2CADo`, {
//             method: 'GET'
//         });

//         if (RESPONSE.ok) {
//             const jsonResponse = await RESPONSE.json();
//             return jsonResponse.items;
//         }
//     }
//     catch (error) {
//         console.log(error);
//     }
// };

const addGenre_Dropdown_Items = (items) => {

    const select = document.getElementById('genres')

    items.forEach(item => {

        let option = document.createElement("option");
        option.value = item.id;
        option.text = item.snippet.title;
        select.appendChild(option);
    });
};


const get_Random_video = (items) => {
    const random_Index = Math.floor(Math.random() * items.length);
    const random_Video = items[random_Index].id;
    return random_Video;
};

const populate_HTML = (random_Video) => {
    document.getElementById('show-video').innerHTML = `
    <iframe
src="https://www.youtube.com/embed/${random_Video}">
</iframe>`;

};

get_youtube_Genres(APIKEY)
    .then(addGenre_Dropdown_Items);


document.getElementById('generate-video').onclick = () => {
   get_vidz_By_cat(APIKEY, get_selected_Genre(category))
        .then(get_Random_video)
        .then(populate_HTML);

};


