//position , subtitle,  clickable element using action prop
import {
   Stack,
   ImageList,
   ImageListItem,
   Box,
   ImageListItemBar,
} from "@mui/material";

export const MuiImageList = () => {
   return (
      <Stack spacing={4}>
         <ImageList
            sx={{
               width: 500,
               height: 450,
            }}
            cols={3}
            rowHeight={200}
         >
            {itemData.map((item) => (
               <ImageListItem key={item.img}>
                  <img
                     src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                     alt={item.title}
                     loading="lazy"
                  />
                  <ImageListItemBar title={item.title} />
               </ImageListItem>
            ))}
         </ImageList>
         <ImageList
            sx={{
               width: 500,
               height: 450,
            }}
            cols={3}
            variant="woven"
            gap={8}
         >
            {itemData.map((item) => (
               <ImageListItem key={item.img}>
                  <img
                     src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                     alt={item.title}
                     loading="lazy"
                  />
               </ImageListItem>
            ))}
         </ImageList>
         <Box
            sx={{
               width: 500,
               height: 450,
               overflowY: "scroll",
            }}
         >
            <ImageList cols={3} variant="masonry" gap={8}>
               {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                     <img
                        src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`}
                        alt={item.title}
                        loading="lazy"
                     />
                  </ImageListItem>
               ))}
            </ImageList>
         </Box>
      </Stack>
   );
};

//Aray of images
const itemData = [
   {
      img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "White and Black Long Fur Cat",
   },
   {
      img: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Orange and White Koi Fish Near Yellow Koi Fish",
   },
   {
      img: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Group of Horses Running",
   },
   {
      img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "White and Black Long Fur Cat",
   },

   {
      img: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Orange and White Koi Fish Near Yellow Koi Fish",
   },
   {
      img: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Group of Horses Running",
   },
   {
      img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "White and Black Long Fur Cat",
   },
   {
      img: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Orange and White Koi Fish Near Yellow Koi Fish",
   },
   {
      img: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Group of Horses Running",
   },
   {
      img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "White and Black Long Fur Cat",
   },

   {
      img: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Orange and White Koi Fish Near Yellow Koi Fish",
   },
   {
      img: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Group of Horses Running",
   },
   {
      img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "White and Black Long Fur Cat",
   },
   {
      img: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Orange and White Koi Fish Near Yellow Koi Fish",
   },
   {
      img: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Group of Horses Running",
   },
   {
      img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "White and Black Long Fur Cat",
   },

   {
      img: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Orange and White Koi Fish Near Yellow Koi Fish",
   },
   {
      img: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Group of Horses Running",
   },
];
