import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(
            `https://v6.exchangerate-api.com/v6/a0840b357cf8580571c1b393/latest/${currency}`
        )
            .then((res) => res.json())
            .then((res) => {
                setData(res.conversion_rates);
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;