import React from 'react';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg" alt="" />

                <div className="home__row">
                    <Product
                        id='3874785'
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        price={29.99}
                        rating={5}
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._Ac_SY400_.jpg'
                    />
                    <Product
                        id='49533985'
                        title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whish, 5 Liter Glass Bowl'
                        price={239.0}
                        rating={4}
                        image='https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg'
                    />
                </div>

                <div className="home__row">
                    <Product
                        id='8932475'
                        title='Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor'
                        price={199.99}
                        rating={3}
                        image='https://static.bhphoto.com/images/images2500x2500/1565204800_1491589.jpg'
                    />
                    <Product
                        id='32847759'
                        title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'
                        price={98.99}
                        rating={5}
                        image='https://www.scan.co.uk/images/products/3196456-a.jpg'
                    />
                    <Product
                        id='9346836'
                        title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
                        price={598.99}
                        rating={4}
                        image='https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg'
                    />
                </div>

                <div className="home__row">
                    <Product
                        id='893244586'
                        title='Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440'
                        price={199.99}
                        rating={3}
                        image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg'
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;