export const get_youtube_Genres = async (APIKEY) => {

    try {
        const RESPONSE = await fetch(`https://www.googleapis.com/youtube/v3/videoCategories/?regionCode=de&key=${APIKEY}`, {
            method: 'GET'
        });

        if (RESPONSE.ok) {
            const jsonResponse = await RESPONSE.json();
            return jsonResponse.items;
        }
    }
    catch (error) {
        console.log(error)
    }
};

export const get_vidz_By_cat = async (APIKEY, CATEGORY) => {
    
    // const CATEGORY = get_selected_Genre();

    try {
        const RESPONSE = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=id&chart=mostPopular&regionCode=de&videoCategoryId=${CATEGORY}&key=${APIKEY}`, {
            method: 'GET'
        });

        if (RESPONSE.ok) {
            const jsonResponse = await RESPONSE.json();
            return jsonResponse.items;
        }
    }
    catch (error) {
        console.log(error);
    }
};

export const get_selected_Genre = (domElement) => {

    const category = domElement.value;
    return parseInt(category);
};