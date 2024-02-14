import React from 'react'
import '../style/GridLayout.css';

function GridLayout() {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
                <div className="col">
                    <div className="card">
                        <a href="/new-arrivals.html">
                            <img src="https://www.511tactical.com/media/gene-cms/homepage/2211/10_Tile_AllNew.jpg" className="card-img-top" alt="NEW ARRIVALS" />
                        </a>
                        <button type="button" className="btn rounded-0" style={{ backgroundColor: '#F8862C' }}>NEW ARRIVALS</button>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <a href="https://www.511tactical.com/mens.html">
                            <img src="https://www.511tactical.com/media/gene-cms/homepage/2211/01_Tile_MensNewArrival.jpg" className="card-img-top" alt="MEN'S" />
                        </a>
                        <button type="button" className="btn rounded-0" style={{ backgroundColor: '#F8862C' }}>MEN'S</button>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <a href="https://www.511tactical.com/womens.html">
                            <img src="https://www.511tactical.com/media/gene-cms/homepage/2211/01_Tile_WomensNewArrival.jpg" className="card-img-top" alt="WOMEN'S" />
                        </a>
                        <button type="button" className="btn rounded-0" style={{ backgroundColor: '#F8862C' }}>WOMEN'S</button>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <a href="https://www.511tactical.com/bags-packs.html">
                            <img src="https://www.511tactical.com/media/gene-cms/homepage/2211/01_Tile_Bags_Packs.jpg" className="card-img-top" alt="BAGS & PACKS" />
                        </a>
                        <button type="button" className="btn rounded-0" style={{ backgroundColor: '#F8862C' }}>BAGS & PACKS</button>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <a href="https://www.511tactical.com/footwear.html">
                            <img src="https://www.511tactical.com/media/gene-cms/homepage/2211/01_Tile_Footwear.jpg" className="card-img-top" alt="FOOTWEAR" />
                        </a>
                        <button type="button" className="btn rounded-0" style={{ backgroundColor: '#F8862C' }}>FOOTWEAR</button>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <a href="https://www.511tactical.com/accessories.html">
                            <img src="https://www.511tactical.com/media/gene-cms/homepage/2211/10_Tile_Accessories.jpg" className="card-img-top" alt="ACCESSORIES" />
                        </a>
                        <button type="button" className="btn rounded-0" style={{ backgroundColor: '#F8862C' }}>ACCESSORIES</button>
                    </div>
                </div>
            </div>

            <div className="col-lg col-md battle m-auto">
                <video width="100%" autoPlay loop controls muted className="p-4">
                    <source src={require('../video/Tactical Purpose Built Gear - 5.11.mp4')} type="video/mp4" />
                </video>
                <div>
                    <h1 className=" fw-bold t-shadow">5.11 EQUIPMENT IN THE FIELD</h1>
                </div>
            </div>

            <div className="col-lg col-md text-center border">
                <img className="w-100 m-auto" src="https://www.511tactical.com/media/gene-cms/homepage/2208/Header-Desk-2x.jpg" alt="MOTIVATION" />
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                        <a href="https://www.511tactical.com/jackryan">
                            <img src="https://www.511tactical.com/media/gene-cms/homepage/2212/HP_Block_JackRyan.jpg" className="card-img-top" alt="JACK RYAN" />
                        </a>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <a href="https://www.511tactical.com/footwear/boots/waterproof-boots.html">
                            <img src="https://www.511tactical.com/media/gene-cms/homepage/2301/HP_Block_wk1-2_WP_Boots.jpg" className="card-img-top" alt="WATERPROO BOOTS" />
                        </a>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <a href="https://www.511tactical.com/new.html">
                            <img src="https://www.511tactical.com/media/gene-cms/homepage/2301/HP_Block_wk1-2__POTM.jpg" className="card-img-top" alt="NEW" />
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default GridLayout
