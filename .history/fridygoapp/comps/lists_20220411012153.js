import styled from 'styled-components';

const ItemList = styled.li`

    font-size: 1em;
    text-align:start;
    font-weight: 700
`;

export function Item({txt="Item#1"}){
    return <ItemList>
        {txt}
    </ItemList>
}

export default function List({arr=["Item#1", "Item#2", "Item#3"]}){
    return <div>
        <h1>List</h1>
        <ul>
            {arr.map((o,i)=><Item txt={o}></Item>)}
            {/* <Item txt="Item#1"></Item>   */}
            {/* calling one component to come here */}
            {/* <Item txt="Item#2"></Item>
            <Item txt="Item#3"></Item> */}
        </ul>
    </div>
}