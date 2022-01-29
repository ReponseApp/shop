import { CONFIG } from "@libs/config";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { Navbar } from "@components/Navbar";
import { Header } from "@components/Header";

const Post = ({ data } : any) => {

  const router = useRouter()
  const { uid } = router.query
  const [title, setTitle] = useState("")
  const [desc , setDesc] = useState("")
  const [photo , setPhoto] = useState("")

  useEffect(() => {
    CONFIG.ALL.filter(r => r.link === uid).map(async r => {
      setTitle(r.title)
      setDesc(r.description)
      setPhoto(r.img)
    })
  })

  return (
    <div>
      <Navbar />
      <Header title={title} />
      <div className="mt-5 container mx-auto items-center w-9/12">
        <div className="flex">
          <img className="md:w-2/6 w-3/6 h-auto border-1 border-gray-900" src={photo} alt="" />
          <div>
            <p className="text-2xl font-semibold">
              {title}
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
            <div className="flex mt-3">
              <div className="mr-2 h-5 border-solid border-2 border-gray-900 px-4 bg-gray-400 rounded-xl">
              </div>
              <div className="mr-2 border-solid border-2 border-gray-900 px-2 bg-gray-900 rounded-xl">
              </div>
            </div>
          </div>
        </div>
        <p className="mt-3 mb-10">
            Sweatshirt kumaşı nasıldır ve baskı örneklerini görebilir miyiz?
            <br />
            <br />
            Güncel açıklama: Bu model sweatlerin XXL bedenlerinde göbek bölgesinin biraz sıktığına dair bir kaç geri dönüş aldık. Omuzlar kol ve göğüs iyi ama göbek bölgesinde kumaş çok fazla esnemediği için biraz sıkmış. Göbekli biriyseniz XXL bedende böyle bir sorun yaşayabilirsiniz.
            <br />
            <br />
            Bunun dışında kalıplar dar değil ancak XXL bedenler düşündüğünüz gibi öyle çok aşırı..aşırı geniş değil. XL giyenler hafif salaş olması adına XXL tercih edebilir. Yani, yalnızca kilosu fazla olanlar için değil demek istiyoruz.
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


export default Post;


