import { createApi } from 'unsplash-js';

const unsplash = createApi({
    accessKey: 'YH-N_BKio92gSSPJQWywI9mQMYUW80EtJlEK3vCF1MU'
});

const getRandomImage = ()=> unsplash.photos.getRandom()
                       .then(result=>{
                           if(result.errors){
                               console.log('error occured',result.errors);
                           }
                           return result.response;
                       });

export default getRandomImage;
