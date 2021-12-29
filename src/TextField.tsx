import React, { useRef, useState } from 'react';

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => string;
    person: Person;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<Props> = () => {
    const [count, setCount] = useState<number | null | undefined>(5);
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div>
            <label>
                Input
                <input ref={inputRef} />
            </label>
        </div>
    );
};


