import{ FoodIteam,FoodItemDisplay} from '/comps/food_item';

export const header = "Choose a Category"

export const burn = {
  title:"Burnaby",
  route:"bur",
  img:"/burnaby.png"
};

export const dtvan = {
  title:"Vancouver",
  route:"van",
  img:"/vancouver.png"
}

export const richm = {
  title:"Richmond",
  route:"rich",
  img:"/richmond.png"
};

export const surr = {
  title:"Surrey",
  route:"sur",
  img:"/surrey.png"
};

export const burnImgs = [
  "Tomatoes",
  "Oranges",
  "Milk",
  "Carrots",
  "Bread",
  "Potatoes",
  "Cheese"
];

export const dtvanImgs = [
  "Apples",
  "Tomatoes",
  "Milk"
];

// dtvanIngs[0].onclick
export const richmImgs = [
  "Oranges",
  "Apples",
  "Potatoes",
  "Carrots"
];

export const surrImgs = [
  "Bread",
  "Oranges",
  "Carrots",
  "Apples",
  "Potatoes",
  "Cheese"
];



// export default function FoodB({arr=[]}){

//   return <FoodB>
//     {
//       arr.map((o,i)=> img= {o}> <FoodItemDisplay arr={burnImgs}>
//          <FoodIteam>
//          {/* <img src={burnImgs[0]} height={100} width={100}></img>  */}
//          <img src={burn[burnImgs[0]].img}/>

//          </FoodIteam>
//         </FoodItemDisplay>
//         )
//     }
    
//   </FoodB>
// }
