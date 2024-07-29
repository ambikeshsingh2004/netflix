import {configureStore} from "@reduxjs/toolkit";
import userreducer from "./userslice";
import moviesreducer from "./movieslice"
import gptreducer from "./gptslice"
import configslicereducer from "./configslice";
const appstore = configureStore({
  reducer:{
    user:userreducer,
    movies:moviesreducer,
    gpt:gptreducer,
    config:configslicereducer,

  },
});
export default appstore;