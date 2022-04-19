import styled from 'styled-components';
import { ThirdPageHeader } from '../comps/text';

const ItemList = styled.li`
    font-size: 1em;
    text-align:start;
    padding-left:2%
`;

export function Item({info="Item#1"}){
    return <ItemList>
        {info}
    </ItemList>
}

export default function List({arr=["Item#1", "Item#2", "Item#3"]}, {arr2=["Item#1", "Item#2", "Item#3"]}){
    return <div>
        <ThirdPageHeader>Sanitize your hands before and after handling food in the fridge</ThirdPageHeader>
        <ThirdPageHeader>Accepted✅</ThirdPageHeader>
        <ul>
            {arr.map((o)=><Item info={o}></Item>)}
            {/* <Item txt="Item#1"></Item>   */}
            {/* calling one component to come here */}
            {/* <Item txt="Item#2"></Item>
            <Item txt="Item#3"></Item> */}
        </ul>
        <ThirdPageHeader>Not Accepted❌</ThirdPageHeader>
        <ul>
            {arr2.map((I)=><Item info={I}></Item>)}
            {/* <Item txt="Item#1"></Item>   */}
            {/* calling one component to come here */}
            {/* <Item txt="Item#2"></Item>
            <Item txt="Item#3"></Item> */}
        </ul>
    </div>
}