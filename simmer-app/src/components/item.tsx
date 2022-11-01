import * as React from "react";

interface ItemProps {
    id: string;
    name: string;
    quantity: number;
    quantityType: string;
    complete: false;
}

function Item({ id, name, quantity }: ItemProps) {
    return <React.Fragment></React.Fragment>;
}

export default Item;
