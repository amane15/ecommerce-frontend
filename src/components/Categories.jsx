import "../assets/css/products.css";

const Categories = () => {
    return (
        <>
            <div className="header">
                <ul className="list products__nav">
                    <li className="products__item">
                        <p>Accessories</p>
                    </li>
                    <li className="products__item">
                        <p>Electronics</p>
                    </li>
                    <li className="products__item">
                        <p>Fashion</p>
                    </li>
                    <li className="products__item">
                        <p>Books</p>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Categories;
