import { get_youtube_Genres, get_vidz_By_cat, get_selected_Cat } from "../js/modules/youtube.js";

// GLOBAL VARIABLES ////////////////////////////////////////////
const APIKEY = 'AIzaSyAONbxh9eB1RVs2uI8JYsvri_iG0Z2CADo';
const category_DOM = document.querySelector('#genres');
const selected_Category = get_selected_Cat(category_DOM);


// APP START ///////////////////////////////////////////////////

get_youtube_Genres(APIKEY)
    .then(addGenre_Dropdown_Items);


document.getElementById('generate-video').onclick = () => {

   get_vidz_By_cat(APIKEY, selected_Category)
        .then(get_Random_video)
        .then(populate_HTML);

};


