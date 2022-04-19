import styled from 'styled-components';

const ItemList = styled.li`
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
        </ul>
        
    </div>
}