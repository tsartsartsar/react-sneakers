import React from 'react';
import Card from "../components/Card";

function Home({ items, isLoading, searchValue, setSearchValue, onChangeSearchInput, onAddToCart, onAddToFavorite }) {
    const renderItems = () => {
        const filtredItems = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))

        return (
            isLoading
                ? [...Array(8)]
                : filtredItems).map((item, index) =>
                    <Card
                        key={index}
                        onPlus={(obj) => onAddToCart(obj)}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                        loading={isLoading}
                        {...item}
                    />)
    }

    return (
        <div className="content p-40 justify-center">
            <div className="content-inner d-flex flex-wrap align-center justify-between mb-40">
                <h1>{searchValue ? `Поиск по запосу: "${searchValue}"` : "Все кроссовки"}</h1>
                <div className="search-block d-flex">
                    <img src="img/search.svg" alt="Search" />
                    {searchValue && <img onClick={() => setSearchValue("")} className="clear cu-p" src="img/btn-remove.svg" alt="Clear" />}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
                </div>
            </div>

            <div className="content-inner d-flex flex-wrap">
                {renderItems()}
            </div>
        </div>
    )
}

export default Home