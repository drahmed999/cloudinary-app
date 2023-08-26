"use client"

import { CldUploadButton, CldUploadWidget, CldUploadWidgetResults } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';




type cldupldButton={
  event:"success",
  info:{
    public_id:string
  }
}



export default function Home() {
const [imgId,setImgId]=useState("")


  return (
    <main className="flex min-h-screen flex-col bg-black/90 text-white items-center justify-between w-full p-24 ">
<CldUploadButton
  uploadPreset="d8bttfgh"
  onUpload={(item: CldUploadWidgetResults) => {
    // @ts-ignore
    if (item.info && item.info.public_id ) {

      // @ts-ignore
      setImgId(item.info.public_id); 
    }
  }}
/>

{imgId && (
  <CldImage
    width="960"
    height="600"
    src={imgId}
    sizes="100vw"
    alt="Description of my image"
  />
)}
    </main>
  )
}
