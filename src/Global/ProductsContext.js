import React, {createContext, useState} from "react"
import Macbook from "../assets/Macbook.jpg"
import Headset from "../assets/Headset.jpg"
import  dslr  from "../assets/dslr.jpg"
import dell from "../assets/dell.jpg"
import onepluswatch  from "../assets/oneplus watch.jpg"
import monitor  from "../assets/dell monitor.jpg"
import  oneplusmobile  from "../assets/oneplus mobile.jpg"
import  iphoneX  from "../assets/iphone X.jpg"
import  whitekeyboard  from "../assets/white keyboard.jpg"
import  applewatch  from "../assets/apple watch.jpg"
import  airpods  from "../assets/airpods.jpg"



export const ProductsContext = createContext();
const ProductsContextProvider = (props) => {
    const [Products] = useState([
       

        {"id":1,"name":"Macbook pro",image:Macbook,"price":"$1400","stock":33,"createDate":1657371554705,"category":["electronic","laptop"]},
        {"id":2,"name":"Headset",image:Headset,"price":"$13300","stock":7,"createDate":1657371554705,"category":["electronic","headseat"]},{"message":"Product have successfully fetched!"},
        {"id":10,"name": 'Dslr',image:dslr,"price":"$700"},
        {"id":3,"name":"Dell",image:dell,"price":"$140","stock":3,"createDate":1657421074933,"category":["electronic","laptop"]},
        {"id":4,"name":"OnePlus watch",image:onepluswatch ,"price":"$100","stock":90,"createDate":1657421074933,"category":["electronic","watch"]},
        {"id":5,"name":'monitor' ,"image":monitor,"price":"$1300","stock":7,"createDate":1657421074933,"category":["electronic","laptop"]},
        {"id":6,"name":"oneplus mobile",image:oneplusmobile,"price":"$900","stock":6,"createDate":1657421074933,"category":["electronic","mobile"]},
        {"id":7,"name":"iphone X",image:iphoneX,"price":"$1000","stock":8,"createDate":1657421074933,"category":["electronic","mobile"]},
        {"id":8,"name": 'whitekeyboard',"image":whitekeyboard,"price":"$100","stock":10,"category":["electronic","keyboard"]},
        {"id":9,"name": 'applewatch',image:applewatch,"price":"$700"},
        {"id":9,"name": 'airpods',image:airpods,"price":"$1500"},
       
    ]);
    return(
        <ProductsContext.Provider value={{Products: [...Products]}}>
            {props.children}
        </ProductsContext.Provider>

    )
}
export default ProductsContextProvider; 