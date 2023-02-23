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