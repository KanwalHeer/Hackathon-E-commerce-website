import React from 'react'
import Banner from '@/components/globalComponents/banner/banner'
import CheckoutForm from '@/components/pageComponents/checkout/checkoutForm'
import Placeholder from '@/components/pageComponents/checkout/placeholder'
import ProductSection2 from '@/components/pageComponents/products/productSection2'
export default function Checkout() {
  return (
    <div>
      <Banner imageUrl='/item3.png' pageTitle='Checkout' currentPage='checkout'pageUrl='checkout'/>
      <div className='flex flex-col justify-cennter lg:flex-row md:flex-row gap-20 max-w-[1200px] mx-auto'>
        <CheckoutForm/>
        {/* <Placeholder/> */}
      </div>
      <ProductSection2/>
    </div>
  )
}




  // // Function to create label from selected rate
  // const handleCreateLabel = async () => {
  //   if (!rateId) {
  //     alert("Please select a rate to create a label.");
  //   }

  //   setLoading(true);
  //   setErrors([]);

  //   try {
  //     // get rateId which user selected
  //     const response = await axios.post("/api/shipengine/create-label", {
  //       rateId: rateId,
  //     });
  //     const labelData = response.data;
  //     // see the response of label in browser
  //     console.log(labelData);
  //     // set pdf url
  //     setLabelPdf(labelData.labelDownload.href);
  //     // set tracking obj
  //     setTrackingObj({
  //       trackingNumber: labelData.trackingNumber,
  //       labelId: labelData.labelId,
  //       carrierCode: labelData.carrierCode,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     setErrors(["An error occurred while creating the label."]);
  //   } finally {
  //     setLoading(false);
  //   }
  // };



  // // Submit handler
  // const handleSubmit = async (
  //   e: React.FormEvent<HTMLFormElement>
  // ): Promise<any> => {
  //   e.preventDefault();

  //   setErrors([]);
  //   setRates([]);
  //   setShippingButText("Rates Create...");

  //   try {
  //     const response = await axios.post("/api/shipengine/get-rates", {
  //       shipToAddress,
  //       // map the cart products which can be shipped and use only weight and dimensions

  //       packages: [
  //         {
  //           weight: {
  //             value: 2,
  //             unit: "pound",
  //           },
  //           dimensions: {
  //             length: 10,
  //             width: 5,
  //             height: 8,
  //             unit: "inch",
  //           },
  //         },
  //       ],
  //     });
  //     // see the response in browser
  //     console.log(response.data);
  //     setLoading(true);

  //     // Update the state with the fetched rates
  //     setRates(response.data.rateResponse.rates);
  //     console.log("rates.................", rates);
  //   } catch (error) {
  //     console.log(error);
  //     setErrors(["An error occurred while fetching rates."]);
  //   } finally {
  //     setLoading(false);
  //   }
  // };



  // const [rates, setRates] = useState<Rate[]>([]);
  // // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [errors, setErrors] = useState<string[]>([]);
  // const [rateId, setrateId] = useState<string | null>(null);
  // const [labelPdf, setLabelPdf] = useState<string | null>(null);
  // const [trackingObj, setTrackingObj] = useState<trackingObjType | null>(null);
  // const [rateAmount, setRateAmount] = useState<number>();
  // const [isConfirm, setIsConfirm] = useState<boolean>(false);
  // const [ShippingButText, setShippingButText] = useState("Continue Shipping");

  // // Har input change handle karega hj

  // const handleChange = (e: any) => {
  //   const { name, value } = e.target; // Input ka name aur value lete hain
  //   setshipToAddress((prevData) => ({
  //     ...prevData, // Pichle state ka data
  //     [name]: value, // Sirf specific field update
  //   }));
  // };

  
  // const [shipToAddress, setshipToAddress] = useState({
  //   name: "",
  //   phone: "",
  //   addressLine1: "",
  //   addressLine2: "",
  //   cityLocality: "",
  //   stateProvince: "CA",
  //   postalCode: "90001",
  //   countryCode: "US",
  //   addressResidentialIndicator: "yes",
  // });
