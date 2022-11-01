import * as React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function GroceryList() {
    const [item, setItem] = useState({
        id: "",
        name: "",
        quantity: 0,
        quantityType: "",
        complete: false,
    });
    const [list, setList]: any = useState([]);

    /** Event hanlder for add button on the grocery list
     * Append the current item property to list and clear item property
     * @param e event
     */
    const handleAdd = (e: any) => {
        e.preventDefault();
        // if there is something in item text field
        if (item.name) {
            const indexOfDuplicate = list.findIndex(
                (element: any) => element.name === item.name
            );
            console.log(indexOfDuplicate);
            console.log(list);
            if (indexOfDuplicate !== -1) {
                list[indexOfDuplicate].quantity += item.quantity;
            } else {
                setList([...list, item]);
            }

            setItem({
                id: "",
                name: "",
                quantity: 0,
                quantityType: "",
                complete: false,
            });
        }
    };

    /** Event handler for change in the item text field.
     * Set the item property with the appropriate information about the item
     * @param e event
     */
    const handleChange = (e: any) => {
        setItem({
            // unique id
            id: uuidv4(),
            name: e.target.value,
            quantity: 1,
            quantityType: "",
            complete: false,
        });
    };

    /** Event handler for the remove button
     * Filter the list for all items which don't match the index
     * @param index The id of the item to remove
     */
    const handleRemove = (index: number) => {
        setList((list: []) => list.filter((_, i) => i !== index));
    };

    const handleCheckboxChange = (index: number) => {
        const newList = [...list];
        newList[index].complete = !newList[index].complete;
        setList(newList);
    };

    return (
        <React.Fragment>
            <h1>Hi</h1>
            <form onSubmit={handleAdd}>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                    >
                        Item
                    </label>
                    <input
                        value={item.name}
                        onChange={handleChange}
                        className="form-control"
                        // type="email"
                        // className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="name@example.com"
                    />
                </div>
                <button type="submit">Add</button>
            </form>
            <ul className="list-group m-2">
                {list.map((item: any, index: number) => {
                    return (
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <input
                                className="form-check-input me-1"
                                type="checkbox"
                                id={item.id}
                                checked={item.complete}
                                onChange={() => handleCheckboxChange(index)}
                            ></input>
                            {item.name}
                            <span className="badge bg-primary rounded-pill">
                                {item.quantity}
                                {() => {
                                    if (item.quantityType) {
                                        return " " + item.quantityType;
                                    }
                                }}
                            </span>
                            {/* <button onClick={() => handleRemove(index)}>
                                remove
                            </button> */}
                        </li>
                    );
                })}
            </ul>
        </React.Fragment>
    );
}

export default GroceryList;
