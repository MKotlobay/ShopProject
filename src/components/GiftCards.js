import React from 'react';
import Footer from './Footer';

function GiftCards() {
    return (
        <div>
            <div className="container text-center" style={{ paddingBottom: '300px' }}>
                <div className="row">
                    <div className="align-self-start p-3 mt-4" style={{ color: '#3c4f13', outlineStyle: 'solid', outlineWidth: '1px' }}>
                        <h5>Already have a gift card?</h5>
                    </div>
                    <div className="col align-self-end mt-2">
                        <img src="https://www.511tactical.com/media/catalog/product/g/i/gift-card-img_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=855&width=855" className="img-fluid" alt="Gift" />
                    </div>
                    <div className="col align-self-center text-start">
                        <h3>5.11 DIGITAL GIFT CARD</h3>
                        <p>Select your gift card, the amount, recipient, and an optional message below. Send it directly to the recipient, or to yourself so you can forward the email at the perfect time. Gift cards will arrive by email within 24 hours after purchase.</p>
                        <p className="fw-bold text-center">AMOUNT</p>
                        <div className="d-flex flex-column gap-2">
                            <div className="btn" role="toolbar" aria-label="Toolbar with button groups">
                                <div className="m-auto d-flex justify-content-around" role="group" aria-label="First group">
                                    <button type="button" className="btn rounded-0" style={{ color: 'black', outlineStyle: 'solid', outlineWidth: '1px' }} data-bs-toggle="button">$25.00</button>
                                    <button type="button" className="btn rounded-0" style={{ color: 'black', outlineStyle: 'solid', outlineWidth: '1px' }} data-bs-toggle="button">$50.00</button>
                                    <button type="button" className="btn rounded-0" style={{ color: 'black', outlineStyle: 'solid', outlineWidth: '1px' }} data-bs-toggle="button">$75.00</button>
                                </div>
                            </div>
                            <div className="btn" role="toolbar" aria-label="Toolbar with button groups">
                                <div className="m-auto d-flex justify-content-around" role="group" aria-label="First group">
                                    <button type="button" className="btn rounded-0" style={{ color: 'black', outlineStyle: 'solid', outlineWidth: '1px' }} data-bs-toggle="button">$100.00</button>
                                    <button type="button" className="btn rounded-0" style={{ color: 'black', outlineStyle: 'solid', outlineWidth: '1px' }} data-bs-toggle="button">$150.00</button>
                                    <button type="button" className="btn rounded-0" style={{ color: 'black', outlineStyle: 'solid', outlineWidth: '1px' }} data-bs-toggle="button">$200.00</button>
                                </div>
                            </div>
                            <div className="btn mb-3" role="toolbar" aria-label="Toolbar with button groups">
                                <div className="m-auto d-flex justify-content-around" role="group" aria-label="First group">
                                    <button type="button" className="btn rounded-0" style={{ color: 'black', outlineStyle: 'solid', outlineWidth: '1px' }} data-bs-toggle="button">$250.00</button>
                                    <button type="button" className="btn rounded-0" style={{ color: 'black', outlineStyle: 'solid', outlineWidth: '1px' }} data-bs-toggle="button">$300.00</button>
                                    <button type="button" className="btn rounded-0" style={{ color: 'black', outlineStyle: 'solid', outlineWidth: '1px' }} data-bs-toggle="button">$511.00</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default GiftCards;
