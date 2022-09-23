import {useCallback, useLayoutEffect, useState} from "react";
import {ValueType} from "../route/ValueType";
import {AppCache} from "../utils/AppCache";

/**
 * Sync state to local storage so that it persists through a page refresh.
 */
export function useLocalStorage(key, valueType = ValueType.string) {

    const getValueType = useCallback(
        () => {
            switch (valueType) {
                case ValueType.bool:
                    return AppCache.booleanGet(key)
                case ValueType.integer:
                    return AppCache.intGet(key)
                default:
                    return AppCache.stringGet(key)
            }
        }, [key, valueType]);

    const [value, setValue] = useState(getValueType());

    useLayoutEffect(() => {
        const element = document.querySelector('#root');

        const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.type === "attributes") {
                    setValue(getValueType());
                }
            });
        });

        observer.observe(element, {
            attributes: true
        });

        return () => {
            observer.disconnect()
        };
    }, [getValueType, key, valueType]);

    return value;
}