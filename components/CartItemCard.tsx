import React, { useState } from "react";
import Image from "next/image";
import { CartItem } from "@/utils/cart";

interface CartItemCardProps {
    item: CartItem;
    onUpdate: (item: CartItem) => void;
    onDelete: (id: string) => void;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ item, onUpdate, onDelete }) => {
    const [editOpen, setEditOpen] = useState(false);
    const [quantity, setQuantity] = useState(item.quantity);
    const [modifiers, setModifiers] = useState(item.modifiers);
    // For MenuItemDialog-style selection, use a mapping by modifier name
    const [selectedAddons, setSelectedAddons] = useState(() => {
        const map: Record<string, string> = {};
        item.modifiers.forEach((mod) => {
            if (mod.options && typeof mod.options === 'string') {
                map[mod.name] = mod.options;
            }
        });
        return map;
    });
    const [comments, setComments] = useState(item.comments);

    // For editing modifiers/comments (simple version, can be improved)
    const handleSave = () => {
        // Convert selectedAddons to modifiers array
        const updatedModifiers = item.modifiers.map((mod) => ({
            name: mod.name,
            options: selectedAddons[mod.name] || "",
        }));
        onUpdate({ ...item, quantity, modifiers: updatedModifiers, comments });
        setEditOpen(false);
    };

    return (
        <div
            style={{
                boxShadow: "0px 2px 4px 2px rgba(0,0,0,0.10) inset",
            }}
            className="flex bg-white/90 rounded-3xl max-h-48 shadow-sm border w-full border-gray-200 overflow-hidden"
        >
            <div className="relative w-1/4 sm:block hidden h-50 flex-shrink-0 bg-[#1B3A6B]">
                <Image
                    src={item.imageSrc || "/desserts/kunafa.jpg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex-1 flex flex-col justify-between p-6">
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <span className="sm:text-2xl text-xl font-bold">{item.name}</span>
                        <span className="sm:text-xl text-lg font-bold text-[#2C4B7E]">${item.price}</span>
                    </div>
                    <div className="sm:text-base text-sm text-black/80 mb-2">{item.description}</div>
                    {/* Modifiers */}
                    {/* {item.modifiers && item.modifiers.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-2">
                            {item.modifiers.map((mod) => (
                                <span key={mod.name} className="bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700">
                                    {mod.name}: {mod.options}
                                </span>
                            ))}
                        </div>
                    )} */}
                    {/* Comments */}
                    {/* {item.comments && (
                        <div className="text-sm text-gray-500 italic mb-2">{item.comments}</div>
                    )} */}
                </div>
                <div className="flex gap-3 mt-2">
                    <button
                        className="bg-[#2C4B7E] text-white rounded-lg sm:px-4 px-2 py-2 sm:text-base text-sm font-medium"
                        onClick={() => setEditOpen(true)}
                    >
                        Edit
                    </button>
                    <div className="flex items-center bg-[#2C4B7E] text-white rounded-lg px-4 py-2 sm:text-base text-sm font-medium gap-2">
                        Quantity
                        <button
                            className="px-2 sm:text-lg text-base font-bold"
                            onClick={() => {
                                if (quantity > 1) {
                                    setQuantity(quantity - 1);
                                    onUpdate({ ...item, quantity: quantity - 1 });
                                }
                            }}
                        >
                            -
                        </button>
                        <span>{quantity}</span>
                        <button
                            className="px-2 sm:text-lg text-base font-bold"
                            onClick={() => {
                                setQuantity(quantity + 1);
                                onUpdate({ ...item, quantity: quantity + 1 });
                            }}
                        >
                            +
                        </button>
                    </div>
                    <button
                        className="bg-[#2C4B7E] text-white rounded-lg sm:px-4 px-2 py-2 sm:text-base text-sm font-medium"
                        onClick={() => onDelete(item.id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
            {/* Edit Modal (simple version) */}
            {editOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 ">
                    <div className="bg-white rounded-3xl p-0 w-full max-w-lg shadow-xl relative overflow-hidden">
                        {/* Image */}
                        <div className="relative w-full h-48 bg-[#1B3A6B]">
                            <Image src={item.imageSrc || "/desserts/kunafa.jpg"} alt={item.name} fill quality={100} className="object-cover" />
                        </div>
                        <button
                            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-gray-200 text-2xl z-10"
                            onClick={() => setEditOpen(false)}
                        >
                            ×
                        </button>
                        <div className="flex flex-col gap-6 px-8 py-6">
                            <h2 className="text-2xl font-bold mb-2">Edit {item.name}</h2>
                            {/* Modifiers */}
                            {item.modifiers && item.modifiers.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Add-ons</h3>
                                    <div className="flex flex-col flex-wrap gap-4">
                                        {item.modifiers.map((mod) => (
                                            <div key={mod.name} className="flex flex-col ">
                                                <span className="mb-1 font-medium text-black/80">{mod.name}</span>
                                                <div className="flex gap-2">
                                                    {Array.isArray(mod.options) && mod.options.map((opt: string) => (
                                                        <button
                                                            key={opt}
                                                            className={`px-4 py-2 rounded-full border transition-all text-base font-medium ${selectedAddons[mod.name] === opt ? "bg-[#2C4B7E] text-white border-[#2C4B7E]" : "bg-[rgba(255,255,255,0.20)] shadow-[0px_2px_4px_2px_rgba(0,0,0,0.10)_inset]"}`}
                                                            onClick={() => setSelectedAddons((prev) => ({ ...prev, [mod.name]: opt }))}
                                                        >
                                                            {opt}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {/* Comments */}
                            <div className="w-full">
                                <h3 className="text-lg font-semibold mb-2">Special Instructions</h3>
                                <textarea
                                    className="w-full rounded-full placeholder:text-sm  p-4 bg-[rgba(255,255,255,0.20)] shadow-[0px_2px_4px_2px_rgba(0,0,0,0.10)_inset] border-none outline-none text-base min-h-[60px] resize-none"
                                    value={comments}
                                    onChange={e => setComments(e.target.value)}
                                    placeholder="We’ll do our best to accommodate special requests but may not be able to honor all substitutes. Extra charges may apply."
                                />
                            </div>
                            <button
                                className="w-full bg-[#2C4B7E] text-white font-bold py-3 rounded-2xl mt-2 hover:bg-[#1a2d4d] transition"
                                onClick={handleSave}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartItemCard; 