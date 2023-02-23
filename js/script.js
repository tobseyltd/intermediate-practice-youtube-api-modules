import { get_youtube_Genres, get_vidz_By_cat, get_selected_Cat } from "../js/modules/youtube.js";

// GLOBAL VARIABLES ////////////////////////////////////////////
const APIKEY = 'AIzaSyAONbxh9eB1RVs2uI8JYsvri_iG0Z2CADo';
const category_DOM = document.querySelector('#genres');


// HELPERS /////////////////////////////////////////////////////
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


// APP START ///////////////////////////////////////////////////
get_youtube_Genres(APIKEY)
    .then(addGenre_Dropdown_Items);


document.getElementById('generate-video').onclick = () => {
    const selected_Cat = get_selected_Cat(category_DOM);

   get_vidz_By_cat(APIKEY, selected_Cat)
        .then(get_Random_video)
        .then(populate_HTML);

};
//////////////////////////////////////////////////// APP END //

