import React, { useEffect, useRef, useState } from "react";
import { Groceries } from "../types/groceries";
import { GroceryItem } from "./GroceryItem";
import { UserInput } from "./UserInput";

export const GroceryList = () => {
    const [value, setValue] = useState("");
    const [currentIndex, setCurrentIndex] = useState<null | number>(null);
    const [list, setList] = useState<Groceries>([]);
    const inputRef = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value);
    };
    function handleItemAdd(): void {
        if (currentIndex === null) {
            setList((prev) => [...prev, { title: value }]);
        } else {
            const arr = [...list];
            arr.splice(currentIndex, 1, { title: value });
            setList(arr);
            setCurrentIndex(null);
        }
        setValue("");
    }

    function handleDelete(index: number): void {
        setList((prev) => {
            return prev.filter((_item, itemIndex) => itemIndex !== index);
        });
    }

    function handleEdit(index: number): void {
        inputRef.current?.focus();
        setValue(list[index].title);
        setCurrentIndex(index);
    }

    function handleEnterPress(event: any): void {
        if (event.keyCode === 13) {
            handleItemAdd();
        }
    }

    return (
        <div onKeyDown={handleEnterPress}>
            <h2>GroceryList</h2>
            <UserInput ref={inputRef} value={value} handleChange={handleChange} />
            <button onClick={handleItemAdd}>{currentIndex === null ? "add" : "save"}</button>
            <br />
            My Groceries: <br />
            {list.map((item, index) => (
                <GroceryItem
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    index={index}
                    item={item}
                    key={index}
                />
            ))}
        </div>
    );
};
