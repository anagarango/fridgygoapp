//import {useRouter}
import{useRouter} from 'next/router';
import{header, cat1, cat2, cat3, cat1Imgs, cat2Imgs, cat3Imgs} from '../../data/cate_content';
import Display from '../../comps/Display';

export default function Categories(){
  const r = useRouter();
  const {page, type} = r.query

  if(page === '4'){
    return <div>
      <h1>You are on Page 4</h1>
      <button onClick={
    ()=>r.replace({
      pathname:"/categories",
      query:{
        page:1,
      }
    })
  }>Restart</button>
    </div>
    
  }

  return <div>
    {
      page === undefined ? <h1>Select Try Router</h1> : <h1>You are on page #{page}</h1>
    }
    {/* <h1>Categories #{page} - {type}</h1> */}

    <button onClick={
      () =>console.log(r)
    }>Console log the router</button>

  <button onClick={
    ()=>r.replace({
      pathname:"/categories",
      query:{
        //if page is undefined then page:1, else page:Number(page)+1
        page: page === undefined ? 1 : Number(page)+1,
        type:"sports"
      }
    })
  }>Try Routing</button>

  <hr></hr>
  <div>

  </div>
    <h3>{header} - {type}</h3>
    <div>

      <div onClick={
        ()=>r.replace({
          pathname:"/categories",
          query:{
            type:cat1.route
          }
        })
      }>
        {cat1.title},
      </div>

      <div onClick={
        ()=>r.replace({
          pathname:"/categories",
          query:{
            type:cat2.route
          }
        })
      }>
        {cat2.title},
      </div>

      <div onClick={
        ()=>r.replace({
          pathname:"/categories",
          query:{
            type:cat3.route
          }
        })
      }>
        {cat3.title},
      </div>

      {type === 'fo' && <div>
        Show the food images
        <Display arr={cat1Imgs}></Display>
        </div>  
      }
      {type === 'an' && <div>
        Show the animal images
        <Display arr={cat2Imgs}></Display>
        </div>  
      }
      {type === 'sho' && <div>
        Show the shoes images
        <Display arr={cat3Imgs}></Display>
        </div>  
      }

    </div>
  {/* <textarea></textarea> */}
  </div>
}


/*Conditional Statements shortcuts
1. ? :
2. &&
3. ||


if the boolean condition is true, use value1, else use value2
value can be both a data type (like int, string, array etc) and a UI Element (<div>)
1. boolean condition ? value : value2

if the boolean condition us true, then use value
2. boolean condition && value

if value1 can be used, then use it, otherwise use value2
3. value1 || value2


*/

