
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
        <HomeProduct/>
        <ExploreSectio/>
        <ImageDisplay/>
      </div>
    )
  }
  
