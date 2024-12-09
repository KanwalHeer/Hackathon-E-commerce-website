
  import HomeBanner from "@/components/pageComponents/home/homeBanner"
  import HomeItems from "@/components/pageComponents/home/homeItems"
  import HomeProduct from "@/components/pageComponents/home/homeProduct"
  import ExploreSectio from "@/components/pageComponents/home/exploreSectio"
  import ImageDisplay from "@/components/pageComponents/home/imageDisplay"
  export default function page() {
    return (
      <div>
        <HomeBanner/>
        <HomeItems/>
        <h1 className="text-3xl font-bold text-center">Our Products</h1>
        <HomeProduct/>
        <ExploreSectio/>
        <p className="text-center text-gray-500 text-sm mt-8">Share your setup with</p>
        <h1 className="text-3xl font-bold text-center">#FurniroFurniture</h1>
        <ImageDisplay/>
      </div>
    )
  }
  
