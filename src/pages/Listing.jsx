import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { db } from "../Firebase";
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, {
//   EffectFade,
//   Autoplay,
//   Navigation,
//   Pagination,
// } from "swiper/modules";
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules'
import "swiper/css/bundle";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Listing() {
  const params = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  // SwiperCore.use([Autoplay, Navigation, Pagination]);
  // SwiperCore.use([Autoplay, Navigation, Pagination]);
  useEffect(() => {
    async function fetchListing() {
      const docRef = doc(db, "listings", params.listingId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setListing(docSnap.data());
        setLoading(false);
      }
    }
    fetchListing();
  }, [params.listingId]);
  if (loading) {
    return <Spinner />;
  }
  return (
    <main>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{type: "progressbar"}}
        effect="fade"
        modules={[EffectFade]}
        autoplay={{delay:3000}}
      >
        {listing.imgUrls.map((url,index)=>(
          <SwiperSlide key={index}>
            <div className="relative w-full overflow-hidden h=[300px]" style={{background: `url(${listing.imgUrls[index]}) center no-repeat`,
            backgroundSize: "cover"
          }}>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
