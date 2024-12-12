import React, { useState, useEffect } from 'react';
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Typography } from "./components/Typography";
import { Heading } from "./components/Heading";
import { Tooltip } from "./components/Tooltip";
import { Accordion } from "./components/Accordion";

function App_final() {
    const [cryptocurrencies, setCryptocurrencies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const fetchData = () => {
        setLoading(true);
        setError(null);
        fetch('https://api.coinlore.net/api/tickers/')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            setCryptocurrencies(data.data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleUpdateClick = (event) => {
        event.preventDefault(); // Останавливаем стандартное поведение
        fetchData();
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const filteredCryptocurrencies = cryptocurrencies.filter((crypto) => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        return (
            crypto.name.toLowerCase().includes(lowerCaseQuery) ||
            crypto.symbol.toLowerCase().includes(lowerCaseQuery)
        );
    });

    return (
        <div id="appFinalRoot">
            <Heading level="1">Cryptocurrency Prices</Heading>
            <form onSubmit={(e) => e.preventDefault()}> {/* Здесь предотвращаем отправку формы */}
                <Button type="button" variant="bordered" onClick={handleUpdateClick}>Update</Button>
            </form>
            <Input 
                placeholder="Search" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {filteredCryptocurrencies.map((crypto) => {
                const percentChangeClass = parseFloat(crypto.percent_change_24h) < 0 ? 'negative' : 'positive';

                return (
                    <Accordion key={crypto.id} title={crypto.name}>
                        <Typography textSize="md">
                            <Tooltip text="The symbol of the cryptocurrency" position="top">
                                <b>Symbol: </b>{crypto.symbol}
                            </Tooltip>
                        </Typography>
                        <Typography textSize="md">
                            <Tooltip text="The price in USD" position="top">
                                <b>Price USD: </b>{crypto.price_usd}
                            </Tooltip>
                        </Typography>
                        <Typography textSize="md">
                            <Tooltip text="The price in BTC" position="top">
                                <b>Price BTC: </b>{crypto.price_btc}
                            </Tooltip>
                        </Typography>
                        <Typography textSize="md">
                            <Tooltip text="The market capitalization of a cryptocurrency is calculated by multiplying the number of coins in circulation by the current price" position="top">
                                <b>Market Cap USD: </b>{crypto.market_cap_usd}
                            </Tooltip>
                        </Typography>
                        <Typography textSize="md">
                            <Tooltip text="The percentage change in the last 24 hours" position="top">
                                <b>Percent Change 24H: </b>
                                <span className={percentChangeClass}>
                                    {crypto.percent_change_24h}%
                                </span>
                            </Tooltip>
                        </Typography>
                    </Accordion>
                );
            })}
        </div>
    );
}

export default App_final;
