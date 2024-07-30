import OpenAI from 'openai';
import {OPENAI_API_KEY} from "../utilities/constant"
const openai = new OpenAI({
  apiKey: process.env[OPENAI_API_KEY],
  // dangerouslyAllowBrowser:true,
  // This is the default and can be omitted
});
export default openai;