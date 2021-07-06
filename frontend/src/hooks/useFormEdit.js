import { useEffect, useState } from 'react';

export function useFormEdit(initialState) {
    if (!initialState)
        initialState = {
            title: '',
            type: '',
            property: 1,
        };
    const [fields, setFields] = useState(initialState);

    useEffect(() => {
        setFields(initialState);
    }, [initialState]);

    return [
        fields,
        function ({ target }) {
            const field = target.name;
            const value = target.type === 'number' ? +target.value : target.value;
            setFields({ ...fields, [field]: value });
        },
    ];
}
