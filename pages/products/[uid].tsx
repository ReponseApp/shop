import { CONFIG } from "@libs/config";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { Navbar } from "@components/Navbar";
import { Header } from "@components/Header";

const Post = ({ data,product } : any) => {

  const router = useRouter()
  const { uid } = router.query
  const [title, setTitle] = useState("")
  const [desc , setDesc] = useState("")
  const [photo , setPhoto] = useState("")
  const [price , setPrice] = useState("")
  const [serial , setSerial] = useState("")

  useEffect(() => {
   product.map((r:any) => {
      setTitle(r.title)
      setDesc(r.description)
      setPhoto(r.img)
      setPrice(r.price)
      setSerial(r.serial)
    })
  })

  return (
    <div>
      <Navbar />
      <Header title={title} />
      <div className="mt-5 container mx-auto items-center md:w-9/12 w-11/12">
        <div className="flex">
          <img className="md:w-2/6 w-3/6 h-auto border-1 border-gray-900" src={photo} alt="" />
          <div>
            <p className="flex text-2xl font-semibold">
              {title}
              <p className="text-gray-500">{serial}</p>
            </p>
            <p className="text-gray-700">
              {desc}
            </p>
            <div className="flex mt-3">
              <div className="mr-2 border-solid border-2 border-gray-900 px-2 rounded-xl">
                <p>M</p>
              </div>
              <div className="mr-2 border-solid border-2 border-gray-900 px-2 rounded-xl">
                <p>L</p>
              </div>
              <div className="mr-2 border-solid border-2 border-gray-900 px-2 rounded-xl">
                <p>XL</p>
              </div>
              <div className="mr-2 border-solid border-2 border-gray-900 px-2 rounded-xl">
                <p>XXL</p>
              </div>
            </div>
            <a href="https://t.me/rexulec">
            <div className="flex mt-3 p-4 justify-center rounded-xl hover:bg-blue-500 transition bg-blue-400">
 
                {price}
            </div>
            </a>
          </div>
        </div>
        <p className="mt-3 mb-10">
            Sweatshirt kuma???? nas??ld??r ve bask?? ??rneklerini g??rebilir miyiz?
            <br />
            <br />
            G??ncel a????klama: Bu model sweatlerin XXL bedenlerinde g??bek b??lgesinin biraz s??kt??????na dair bir ka?? geri d??n???? ald??k. Omuzlar kol ve g??????s iyi ama g??bek b??lgesinde kuma?? ??ok fazla esnemedi??i i??in biraz s??km????. G??bekli biriyseniz XXL bedende b??yle bir sorun ya??ayabilirsiniz.
            <br />
            <br />
            Bunun d??????nda kal??plar dar de??il ancak XXL bedenler d??????nd??????n??z gibi ??yle ??ok a????r??..a????r?? geni?? de??il. XL giyenler hafif sala?? olmas?? ad??na XXL tercih edebilir. Yani, yaln??zca kilosu fazla olanlar i??in de??il demek istiyoruz.
            </p>
      </div>
    </div>
  )

};

/*
dangerouslySetInnerHTML={ { __html: markdown } }
*/

/*
export async function getStaticProps() {
  const router = useRouter()
  const { uid } = router.query
  let data;
  CONFIG.BLOG.filter(r => r.link === uid).map(r => {
    data = getSortedData(r.file)
  })
  return {
    props : {
      data
    }
  }
}
*/

export const getStaticPaths =  () => {
const paths = CONFIG.ALL.map(item => {
return {
params: {uid: item.link.toString() }
}
})
return {
paths,
fallback:false
}
}
export const getStaticProps = (context:any) => {
const product = CONFIG.ALL.filter((r:any) => r.link === context.params.uid)
return {
props: {
product
}
}
}
export default Post;


