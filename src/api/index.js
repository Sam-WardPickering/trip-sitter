import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': '7c328e2fddmsh05d3f63aaa51f54p12fd3cjsn952ac92a044f'
  }
};

export const getPlacesData = async (sw, ne) => {
    try {
        // request
        const { data: { data } } = await axios.get(URL, options)

        return data;
    } catch (error) {
        console.log(error)
    }
}