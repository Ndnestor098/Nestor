import React, { useState } from "react";

export default function SelectMultiple ({ options = [], placeholder = "Select options", selectedOptions, setSelectedOptions }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option) => {
        if (!selectedOptions.includes(option)) {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    const handleRemove = (option) => {
        setSelectedOptions(selectedOptions.filter((item) => item !== option));
    };

    return (
        <div className={`selectMultiple ${isOpen ? "open" : ""}`}>
            <div className="active" onClick={toggleDropdown}>
                {selectedOptions.length > 0 ? (
                    selectedOptions.map((option, index) => (
                        <a
                            key={index}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleRemove(option);
                            }}
                        >
                            <em>{option}</em>
                            <i></i>
                        </a>
                    ))
                ) : (
                    <span>{placeholder}</span>
                )}
                <div className="arrow" />
            </div>

            {isOpen && (
                <ul className="options">
                    {options
                        .filter((option) => !selectedOptions.includes(option))
                        .map((option, index) => (
                            <li
                                key={index}
                                onClick={() => handleSelect(option)}
                            >
                                {option}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
};