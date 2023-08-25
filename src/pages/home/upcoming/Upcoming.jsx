import { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/contentWrapper"
import SwitchTabs from "../../../components/switchTabs/SwitchTabs"
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";


const Upcoming = () => {

  const [endPoint, setEndPoint] = useState("movie");
  const { data, loading } = useFetch(`/${endPoint}/upcoming`)

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "");
  };
  // console.log("upcoming");
  console.log(endPoint, " : ", data);

  return (
    <div className="carouselSection">

      <ContentWrapper>
        <span className="carouselTitle">
          Upcoming
        </span>
        <SwitchTabs
          data={["Movies"]}
          onTabChange={onTabChange}
        />
      </ContentWrapper>

      <Carousel
        data={data?.results}
        loading={loading}
      />

    </div>
  )
}

export default Upcoming;