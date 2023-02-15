import React from 'react'
import Test from './Test'
import Box from "@mui/material/Box";

import imageAboutUs3 from "../../Images/CCHorizontal.png";
import TestCom from './TestCom';
function Test1() {
  return (
    <>
   <Box sx={{display:"flex",gap:"20px", flexWrap:"wrap" , padding:"2%", justifyContent:"center"}}>

   <Test 
    cardimage={imageAboutUs3}
    CardHeading="hii sam"
    cardcontentlines="lorem jhvwef jhvwrf hvwejv hjwbejhcv"
    /> <Test 
    cardimage={imageAboutUs3}
    CardHeading="hii sam"
    cardcontentlines="lorem jhvwef jhvwrf hvwejv hjwbejhcv"
    /> <Test 
    cardimage={imageAboutUs3}
    CardHeading="hii sam"
    cardcontentlines="lorem jhvwef jhvwrf hvwejv hjwbejhcv"
    /> <Test 
    cardimage={imageAboutUs3}
    CardHeading="hii sam"
    cardcontentlines="lorem jhvwef jhvwrf hvwejv hjwbejhcv"
    /> <Test 
    cardimage={imageAboutUs3}
    CardHeading="hii sam"
    cardcontentlines="lorem jhvwef jhvwrf hvwejv hjwbejhcv"
    /> <Test 
    cardimage={imageAboutUs3}
    CardHeading="hii sam"
    cardcontentlines="lorem jhvwef jhvwrf hvwejv hjwbejhcv"
    />
   </Box>


   <Box sx={{display:"flex",gap:"20px", flexWrap:"wrap" , padding:"2%", justifyContent:"center"}}>
   <Box><TestCom/>

<TestCom/> </Box>
   <Box> <TestCom/>

<TestCom/></Box>
   <Box><TestCom/>

<TestCom/> </Box>

{/* 
<TestCom/><TestCom/><TestCom/><TestCom/><TestCom/><TestCom/> */}
   </Box>
   <Box sx={{display:"flex",gap:"20px", flexWrap:"wrap" , padding:"2%", justifyContent:"center"}}>
<h1>hii</h1>

    {
      data.map((e)=>(

<>
        
          <Test
           CardHeading={e.CardHeading}
           cardcontentlines={e.cardcontentlines}
          cardimage={e.cardimage}
          />

</>
        ))
    }
    </Box>
    
    </>
  )
}

export default Test1


const data = [
  {
    key:"1",
    cardimage:`${imageAboutUs3}`,
    CardHeading:"hii sam",
    cardcontentlines:"lorem jhvwef jhvwrf hvwejv hjwbejhcv",
  },
  {
    key:"2",
    cardimage:`${imageAboutUs3}`,
    CardHeading:"hii sam",
    cardcontentlines:"lorem jhvwef jhvwrf hvwejv hjwbejhcv",
  },
  {
    key:"3",
    cardimage:`${imageAboutUs3}`,
    CardHeading:"hii sam",
    cardcontentlines:"lorem jhvwef jhvwrf hvwejv hjwbejhcv",
  },
  {
    key:"4",
    cardimage:"imageAboutUs3",
    CardHeading:"hii sam",
    cardcontentlines:"lorem jhvwef jhvwrf hvwejv hjwbejhcv",
  },
  {
    cardimage:"imageAboutUs3",
    CardHeading:"hii sam",
    cardcontentlines:"lorem jhvwef jhvwrf hvwejv hjwbejhcv",
  },
  {
    cardimage:"imageAboutUs3",
    CardHeading:"hii sam",
    cardcontentlines:"lorem jhvwef jhvwrf hvwejv hjwbejhcv",
  },

]