import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
    try {
        // request
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary` , {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
           headers: {
             'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
              'X-RapidAPI-Key': '7c328e2fddmsh05d3f63aaa51f54p12fd3cjsn952ac92a044f'
            }
        });

        return data;
    } catch (error) {
        console.log(error)
    }
}