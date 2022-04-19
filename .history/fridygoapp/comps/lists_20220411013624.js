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

export default function List({arr=["Item#1", "Item#2", "Item#3"]}){
    return <div>
        <ul>
            {arr.map((o)=><Item info={o}></Item>)}
            {/* <Item txt="Item#1"></Item>   */}
            {/* calling one component to come here */}
            {/* <Item txt="Item#2"></Item>
            <Item txt="Item#3"></Item> */}
        </ul>
        
    </div>
}