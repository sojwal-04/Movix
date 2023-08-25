import { useSelector } from "react-redux"
import "./styles_genres.scss"


const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);

  return (
    <div className="genres">
      {
        data?.map((g) => {
          if(!genres[g]?.name) return;
          return (
            <div className="genre" key={g}>
              {genres[g]?.name}
            </div>
          )
        })
      }
    </div>
  )
}

export default Genres