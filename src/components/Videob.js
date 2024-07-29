
import { useSelector} from "react-redux";
import useTrailer from '../hooks/useTrailer';
const Videob = ({mid}) => {
 
  const trailervid = useSelector((store)=>store.movies.trailervideo);
//above code only gives access to ur store we can place it anywhere in my component 
  

  //below hook fetches trrailer of above given moviedid
  useTrailer(mid);

  

  return (
    <div className ="w-screen ">
      <iframe className ="w-screen aspect-video"src={"https://www.youtube.com/embed/"+trailervid?.key +"?&autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" 
      
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default Videob