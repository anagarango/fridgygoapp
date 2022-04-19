import styled from 'styled-components';

const ItemList = styled.li`
    text-align:start;
    padding-left:2%
`;
const ListItems = styled.div`
    margin-top: -10px
`;
const PhoneNumbers = styled.span`
    margin-top: -10px
`;

export const BoxedContent = styled.div`
    background-color: rgba(233, 233, 233, 0.9);
    padding: 15px 30px;
    border: 7px #8B967A solid;
    border-radius: 15px;
`;
export function Item({info="Item#1"}){
    return <ItemList>
        {info}
    </ItemList>
}

export default function PhoneNumber({arr=["Item#1", "Item#2", "Item#3"]}){
    return <PhoneNumbers>
            {arr.map((o)=><Item info={o}></Item>)}
            {/* <Item txt="Item#1"></Item>   */}
            {/* calling one component to come here */}
    </PhoneNumbers>
}

export default function PhoneNumbers({arr=["Item#1", "Item#2"]}){
    return <ListItems>
        <Text>
            {arr.map((o)=><Item info={o}></Item>)}
            {/* <Item txt="Item#1"></Item>   */}
            {/* calling one component to come here */}
        </ul>
        
    </ListItems>
}