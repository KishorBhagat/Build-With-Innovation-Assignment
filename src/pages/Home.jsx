import { useContext, useEffect, useState } from "react"
import Product from "../components/home/Product";
import Navbar from "../components/ui/Navbar";
import styled from "styled-components";
import { SearchContext } from "../context/SearchContext";
import { FilterContext } from "../context/FilterContext";
import MobileNav from "../components/ui/MobileNav";

function Home() {
    const [products, setProducts] = useState();
    const [filterdProducts, setFilteredProducts] = useState(products);
    const { searchValue } = useContext(SearchContext);
    const { priceRange, setPriceRange } = useContext(FilterContext);


    let loggedInUser = localStorage.getItem('user');
    loggedInUser = JSON.parse(loggedInUser);

    useEffect(() => {
        const filteredProds = products?.filter((obj) => {
            return obj.title?.toLowerCase().includes(searchValue.toLowerCase());
        });
        if (searchValue !== '' || searchValue.length !== 0)
            setFilteredProducts(filteredProds);
        else
            setFilteredProducts(products);
    }, [searchValue, products])

    useEffect(() => {
        const filteredProds = products?.filter((obj) => {
            return obj.price >= priceRange.min && obj.price <= priceRange.max;
        });
        setFilteredProducts(filteredProds);
    }, [priceRange])

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://dummyjson.com/products?limit=100');
            if (response.ok) {
                const data = await response.json()
                setProducts(data.products)
                const prices = data.products.map(product => product.price);
                setPriceRange({
                    min: Math.min(...prices),
                    max: Math.max(...prices)
                })
            }
        }
        fetchProducts();
    }, [])

    console.log(loggedInUser)

    return (
        <StyledHome>
            <Navbar />
            <MobileNav />
            <div className="user-details">
                <h2 className="greet">{`Hello, ${loggedInUser.firstName} ${loggedInUser.lastName}`}</h2>
                {/* <img className="avatar" src={loggedInUser.image} alt="" /> */}
            </div>

            <div className="products">
                {
                    filterdProducts?.map((product, idx) => {
                        const { id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = product;
                        return (
                            <Product
                                product={product}
                                // id={id}
                                // title={title}
                                // description={description}
                                // price={price}
                                // discountPercentage={discountPercentage}
                                // rating={rating}
                                // stock={stock}
                                // brand={brand}
                                // category={category}
                                // thumbnail={thumbnail}
                                // images={images}
                                key={id}
                            />
                        )
                    })
                }
            </div>
        </StyledHome>
    )
}

const StyledHome = styled.div`
    margin-top: 60px;
    padding: 20px 8%;
    min-height: 100vh;
    background-color: #e3e6e6;
    .user-details{
        /* text-align: center; */
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        .greet{
            /* text-align: center;
            margin-bottom: 20px; */
            display: inline-block;
        }
        .avatar{
            height: 35px;
            margin-left: 10px;
            border: 1px solid gray;
            border-radius: 50%;
            padding: 3px;
        }
    }
    .products{
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }
    @media (max-width: 769px) {
        margin-top: 100px;
        padding-top: 30px;
    }
`
export default Home
