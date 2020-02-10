import axios from 'axios';

const api = () => axios.create({
  baseURL: "https://api.github.com"
});

const ajax =  {
    get: (url) => {
        if (!url) {
            throw new Error("an api url is required");
        }
      
        return api().request({
            method: "get",
            url,
        });
    }
}

export default ajax ;
