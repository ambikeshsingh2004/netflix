export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGYxMzY1ODdhOTI4NzcxNTIwOWUxOTIwZDQ3M2RlYyIsIm5iZiI6MTcyMjMxMTc3Ny41MTI1ODMsInN1YiI6IjY2YTcwNzcyZDc5ZWIyZmM2MTA1YzZjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FzmOirsB8iyxspyKwxGptnPvoL6Xqlvz-xUS0CDIYp4'
  }
};
export const img_cdn ="https://image.tmdb.org/t/p/w200/";

export const supported_languages =[{identifier:"english",name:"English"},{identifier:"hindi",name:"Hindi"},{identifier:"spanish",name:"Spanish"}]

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_KEY;