import * as React from "react";
import { useState } from "react";

function GroceryList() {
    const [item, setItem] = useState({ id: 0, name: "", quantity: 0 });
    const [list, setList]: any = useState([]);

    /** Event hanlder for add button on the grocery list
     * Append the current item property to list and clear item property
     * @param e event
     */
    const handleAdd = (e: any) => {
        e.preventDefault();
        // if there is something in item text field
        if (item.name) {
            setList([...list, item]);
            setItem({ id: 0, name: "", quantity: 0 });
        }
    };

    /** Event handler for change in the item text field.
     * Set the item property with the appropriate information about the item
     * @param e event
     */
    const handleChange = (e: any) => {
        setItem({
            // set id to final entry's id + 1 to account for entries being removed
            id: list[list.length - 1].id + 1,
            name: e.target.value,
            quantity: 1,
        });
    };

    /** Event handler for the remove button
     * Filter the list for all items which don't match the index
     * @param index The id of the item to remove
     */
    const handleRemove = (index: number) => {
        setList((list: []) => list.filter((_, i) => i !== index));
    };

    return (
        <React.Fragment>
            <h1>Grocery List</h1>
            <form onSubmit={handleAdd}>
                <input value={item.name} onChange={handleChange}>
                    item
                </input>
                <button type="submit">Add</button>
            </form>
            {list.map((item: any, index: number) => {
                return (
                    <div key={item.id}>
                        <label>{item.name}</label>
                        <button onClick={() => handleRemove(index)}>
                            remove
                        </button>
                    </div>
                );
            })}
        </React.Fragment>
    );
}

export default GroceryList;
