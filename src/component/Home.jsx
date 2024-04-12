import React, { useState, useEffect } from 'react';
import CardsRow from './CardsRow'
import Category from './Category';

function Home() {
    const [menCardData, setMenCardData] = useState([]);
    const [womenCardData, setWomenCardData] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/men's clothing`)
            .then(res => res.json())
            .then(data => {
                setMenCardData(data);
            })
            .catch(error => console.error('Error fetching men clothing data:', error));

        fetch(`https://fakestoreapi.com/products/category/women's clothing`)
            .then(res => res.json())
            .then(data => {
                setWomenCardData(data);
            })
            .catch(error => console.error('Error fetching women clothing data:', error));
    }, []);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => {
                const menCategory = data.find(category => category.toLowerCase() === "men's clothing");
                const womenCategory = data.find(category => category.toLowerCase() === "women's clothing");

                setCategories([menCategory, womenCategory]);
            })
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    const card1Data = {
        title: categories[0],
        route: `/${categories[0]}`,
        color: "#66ffcc"
    };

    const card2Data = {
        title: categories[1],
        route: `/${categories[1]}`,
        color: "#ff4d88"
    };

    return (
        <>
            <div>
                <h3>
                    Flash Sales
                </h3>
                <CardsRow menCardData={menCardData} womenCardData={womenCardData} />
            </div>
            <div>
                <h3>
                    Category
                </h3>
                <Category card1Data={card1Data} card2Data={card2Data} />
            </div>
        </>
    );
}

export default Home;
