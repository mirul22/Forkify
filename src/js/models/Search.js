//API: 1c29146070efb976fd38f4ce74a9288d 
//https://www.food2fork.com/api/search
import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    
    async getResult() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '1c29146070efb976fd38f4ce74a9288d';

        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}