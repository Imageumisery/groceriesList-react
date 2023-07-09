import { GroceryItemType } from "../types/groceries";

type GroceryItemProps = {
    item: GroceryItemType;
    index: number;
    handleDelete: (index: number) => void
    handleEdit: (index: number) => void
};

export const GroceryItem = ({ item, handleDelete, handleEdit, index }: GroceryItemProps) => {
    return (
        <div>
            {item.title}
            <button onClick={() => handleEdit(index)}>edit</button>
            <button onClick={() => handleDelete(index)}>delete</button>
        </div>
    );
};
