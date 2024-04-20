import React from 'react';
import Footer from './Footer';

function StoreLocator() {
    return (
        <div>
            <div className="container text-center" style={{ paddingBottom: '300px' }}>
                <div className="row mt-2">
                    <img src="https://cdn.dynamicyield.com/api/8771388/images/1684620679b07__plp_1.jpg" alt="AD" />
                </div>
                <div className="row text-center m-auto" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
                    <div className="mapouter col-sm-6">
                        <div className="gmap_canvas w-100">
                            <iframe
                                className="w-100"
                                height="500"
                                id="gmap_canvas"
                                src="https://maps.google.com/maps?q=5.11,Israel&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            ></iframe>
                            <a href="https://putlocker-is.org"></a>
                            <br />
                            <style>
                                {`
                                    .mapouter {
                                        position: relative;
                                        text-align: right;
                                        height: 500px;
                                        width: 600px;
                                    }
                                `}
                            </style>
                            <a href="https://www.embedgooglemap.net">google map embed</a>
                            <style>
                                {`
                                    .gmap_canvas {
                                        overflow: hidden;
                                        background: none !important;
                                        height: 500px;
                                        width: 600px;
                                    }
                                `}
                            </style>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <button type="button" className="btn btn-secondary rounded-0" disabled>FIND A STORE</button>

                        <p className="fw-bold">Search by City, Postal Code, or Country</p>
                        <form className="col" role="">
                            <input className="form-control me-2 m-3" type="search" placeholder="Search" aria-label="Search" />
                            <select className="form-select m-3" aria-label="Default select example">
                                <option value="AL">Albania</option>
                                <option value="AR">Argentina</option>
                                <option value="AU">Australia</option>
                                <option value="AT">Austria</option>
                                <option value="BH">Bahrain</option>
                                <option value="BB">Barbados</option>
                                <option value="BE">Belgium</option>
                                <option value="BO">Bolivia</option>
                                <option value="BA">Bosnia And Herzegovina</option>
                                <option value="BR">Brazil</option>
                                <option value="BN">Brunei Darussalam</option>
                                <option value="BG">Bulgaria</option>
                                <option value="CA">Canada</option>
                                <option value="CL">Chile</option>
                                <option value="CN">China</option>
                                <option value="HK">China - Hong Kong</option>
                                <option value="TW">China - Taiwan</option>
                                <option value="CO">Colombia</option>
                                <option value="CR">Costa Rica</option>
                                <option value="HR">Croatia</option>
                                <option value="CY">Cyprus</option>
                                <option value="CZ">Czech Republic</option>
                                <option value="DK">Denmark</option>
                                <option value="DO">Dominican Republic</option>
                                <option value="EC">Ecuador</option>
                                <option value="SV">El Salvador</option>
                                <option value="EE">Estonia</option>
                                <option value="FI">Finland</option>
                                <option value="FR">France</option>
                                <option value="GE">Georgia</option>
                                <option value="DE">Germany</option>
                                <option value="GR">Greece</option>
                                <option value="GT">Guatemala</option>
                                <option value="HN">Honduras</option>
                                <option value="HU">Hungary</option>
                                <option value="ID">Indonesia</option>
                                <option value="IQ">Iraq</option>
                                <option value="IE">Ireland</option>
                                <option value="IL">Israel</option>
                                <option value="IT">Italy</option>
                                <option value="JP">Japan</option>
                                <option value="JO">Jordan</option>
                                <option value="KZ">Kazakhstan</option>
                                <option value="XK">Kosovo</option>
                                <option value="KW">Kuwait</option>
                                <option value="LV">Latvia</option>
                                <option value="LB">Lebanon</option>
                                <option value="LT">Lithuania</option>
                                <option value="MY">Malaysia</option>
                                <option value="MT">Malta</option>
                                <option value="MX">Mexico</option>
                                <option value="MD">Moldova</option>
                                <option value="MN">Mongolia</option>
                                <option value="NL">Netherlands</option>
                                <option value="NZ">New Zealand</option>
                                <option value="PA">Panama</option>
                                <option value="PY">Paraguay</option>
                                <option value="PE">Peru</option>
                                <option value="PH">Philippines</option>
                                <option value="PL">Poland</option>
                                <option value="PT">Portugal</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="QA">Qatar</option>
                                <option value="MK">Republic of North Macedonia</option>
                                <option value="RO">Romania</option>
                                <option value="SA">Saudi Arabia</option>
                                <option value="RS">Serbia</option>
                                <option value="SG">Singapore</option>
                                <option value="SK">Slovakia</option>
                                <option value="SI">Slovenia</option>
                                <option value="ZA">South Africa</option>
                                <option value="KR">South Korea</option>
                                <option value="ES">Spain</option>
                                <option value="SE">Sweden</option>
                                <option value="CH">Switzerland</option>
                                <option value="TH">Thailand</option>
                                <option value="TL">Timor-Leste</option>
                                <option value="TT">Trinidad And Tobago</option>
                                <option value="TR">Turkey</option>
                                <option value="UA">Ukraine</option>
                                <option value="AE">United Arab Emirates</option>
                                <option value="UK">United Kingdom</option>
                                <option value="US">United States of America</option>
                                <option value="VN">Vietnam</option>
                                <option value="YE">Yemen</option>
                            </select>
                            <button type="button" className="btn rounded-0" style={{ backgroundColor: '#F8862C' }}>FIND A STORE</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="mt-5text-start p-5 m-5">
                <h3 className="text-start">RETAIL LOCATIONS</h3>
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <hr />
                        <h3 className="statename">Alabama</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Birmingham</h4>
                        <address>
                            1713 Montgomery Highway Ste. 127 <br /> Hoover, AL 35244
                        </address>
                        <p>
                            (205) 419-4013
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Montgomery</h4>
                        <address>
                            7235 Eastc hase Parkway, Ste. 102 <br /> Montgomery, AL 36117
                        </address>
                        <p>
                            (334) 544-0921
                            <br /> Mon-Fri 10:00am-8:00pm
                            <br /> Saturday 10:00am-8:00pm
                            <br /> Sunday - 10:00am-8:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Arizona</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Avondale</h4>
                        <address>
                            10020 W. McDowell Rd. Ste. 104
                            <br /> Avondale, AZ 85392
                        </address>
                        <p>
                            (602) 899-9420
                            <br /> Mon-Sat 10:00am-6:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Chandler</h4>
                        <address>
                            2880 E Germann Rd
                            <br /> Chandler, AZ 85286
                        </address>
                        <p>
                            (480) 536-7175
                            <br /> Mon-Sat 10:00am-6:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Phoenix</h4>
                        <address>
                            2036 E. Thomas Rd. Ste. 8<br /> Phoenix, AZ 85016
                        </address>
                        <p>
                            (602) 957-2484
                            <br /> Mon-Sat 10:00am-6:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Tucson</h4>
                        <address>
                            3976 N Oracle Road
                            <br /> Tucson, AZ 85705
                        </address>
                        <p>
                            (520) 352-7540
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">California</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Bakersfield</h4>
                        <address>
                            2150 Wible Rd.
                            <br /> Bakersfield, CA 93304
                        </address>
                        <p>
                            (661) 412-0205
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Brentwood</h4>
                        <address>
                            5641 Lone Tree Way, Ste. 102
                            <br /> Brentwood, CA 94513
                        </address>
                        <p>
                            (925) 308-9285
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Carson</h4>
                        <address>
                            20759 Avalon Blvd
                            <br /> Carson, CA 90746
                        </address>
                        <p>
                            (310) 217-1007
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Clovis</h4>
                        <address>
                            1195 Shaw Ave, Ste. 102
                            <br /> Clovis, CA 93612
                        </address>
                        <p>
                            (559) 862-4022
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Commerce</h4>
                        <address>
                            5521 Telegraph Rd.
                            <br /> Commerce, CA 90040
                        </address>
                        <p>
                            (323) 452-3075
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Costa Mesa</h4>
                        <address>
                            3030 Harbor Blvd, Ste. G-3
                            <br /> Costa Mesa, CA 92626
                        </address>
                        <p>
                            (714) 428-1134
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">El Cajon</h4>
                        <address>
                            790 N. Johnson Ave. Suite B<br /> El Cajon, CA 92020
                        </address>
                        <p>
                            (619) 837-7322
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Elk Grove</h4>
                        <address>
                            8176 Delta Shores Cir. S. Ste. 120
                            <br /> Sacramento, CA 95832
                        </address>
                        <p>
                            (279) 444-0038
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Fairfield</h4>
                        <address>
                            1595 Holiday Lane, Ste. A3
                            <br /> Fairfield, CA 94534
                        </address>
                        <p>
                            (707) 615-4335
                            <br /> Mon-Sat 10:00am-6:00pm
                            <br /> Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Fresno</h4>
                        <address>
                            5133 N Gates Ave Ste 101
                            <br /> Fresno, CA 93722
                        </address>
                        <p>
                            (559) 277-5511
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Fullerton</h4>
                        <address>
                            1337 S. Harbor Blvd, Ste. 022
                            <br /> Fullerton, CA 92832
                        </address>
                        <p>
                            (657) 253-7045
                            <br /> Mon-Sat 10:00am-6:00pm
                            <br /> Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Manteca</h4>
                        <address>
                            3201 Airport Way
                            <br /> Manteca, CA 95336
                        </address>
                        <p>
                            (209) 338-1338
                            <br /> Mon-Fri 9:00am-5:30pm
                            <br /> Saturday 10:00-3:00pm
                            <br />
                            Sun Closed
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Oceanside</h4>
                        <address>
                            3186 Vista Way, Ste 100
                            <br /> Oceanside, CA 92056
                        </address>
                        <p>
                            (760) 547-5667
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Oxnard</h4>
                        <address>
                            311 W. Esplanade Dr Ste. 19
                            <br /> Oxnard, CA 93036
                        </address>
                        <p>
                            (805) 834-2400
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Palmdale</h4>
                        <address>
                            39522 10th St. W Ste. B<br /> Palmdale, CA 93551
                        </address>
                        <p>
                            (661) 310-1045
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Riverside</h4>
                        <address>
                            3388 Tyler St.
                            <br /> Riverside, CA 92503
                        </address>
                        <p>
                            (951) 588-2477
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Sacramento</h4>
                        <address>
                            5400 Date Ave Ste E<br /> Sacramento, CA 95841
                        </address>
                        <p>
                            (916) 426-1613
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">San Diego</h4>
                        <address>
                            1257 Camino Del Rio S<br /> San Diego, CA 92108
                        </address>
                        <p>
                            (619) 501-9258
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Simi Valley</h4>
                        <address>
                            153 E. Cochran St., Ste. 300
                            <br /> Simi Valley, CA 93065
                        </address>
                        <p>
                            (805) 864-2522
                            <br /> Mon-Sat 10:00am-6:00pm
                            <br /> Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Temecula</h4>
                        <address>
                            40810 Winchester Rd Ste. 3<br /> Temecula, CA 92591
                        </address>
                        <p>
                            (951) 758-8810
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Turlock</h4>
                        <address>
                            3005 Countryside Drive
                            <br /> Turlock, CA 95380
                        </address>
                        <p>
                            {" "}
                            (209) 580-0640
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Upland</h4>
                        <address>
                            1364 W. 7th Street
                            <br /> Upland, CA 91786
                        </address>
                        <p>
                            (909) 552-6572
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Colorado</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Colorado Springs</h4>
                        <address>
                            7285 Commerce Center Dr
                            <br />
                            Colorado Springs, CO 80919
                        </address>
                        <p>
                            (719) 424-7473
                            <br />
                            Mon-Sat 10:00am-8:00pm
                            <br />
                            Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Highlands Ranch</h4>
                        <address>
                            2670 East County Line Rd Suite A1
                            <br /> Highlands Ranch, CO 80126
                        </address>
                        <p>
                            (720) 531-3110
                            <br />
                            Mon-Sat 10:00am-8:00pm
                            <br />
                            Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Thornton</h4>
                        <address>
                            14276 Lincoln Street
                            <br /> Thornton, CO 80023
                        </address>
                        <p>
                            (720) 551-8799
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Delaware</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Newark</h4>
                        <address>
                            300 Center Blvd. S<br /> Newark, DE 19702
                        </address>
                        <p>
                            (302) 317-2221
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Florida</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Bradenton</h4>
                        <address>
                            5231 University Parkway., Ste. 101
                            <br />
                            Bradenton, FL 34201
                        </address>
                        <p>
                            (941) 538-5402
                            <br />
                            Mon-Sat 10:00am-8:00pm
                            <br />
                            Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Broward (Partner Store*)</h4>
                        <address>
                            2164 S University Dr
                            <br />
                            Davie, FL 33617
                        </address>
                        <p>
                            (954)519-3808
                            <br />
                            Mon-Fri 9:00am-9:00pm
                            <br />
                            Saturday 10:00am-9:00pm
                            <br />
                            Sunday 11:00am-7:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Daytona Beach</h4>
                        <address>
                            1115 Cornerstone Blvd., Ste. B<br />
                            Daytona Beach, FL 32117
                        </address>
                        <p>
                            (386) 888-8356
                            <br />
                            Mon-Sat 10:00am-8:00pm
                            <br />
                            Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Gainesville</h4>
                        <address>
                            2680 Clark Butler Blvd Ste. 20
                            <br />
                            Gainesville, FL 32608
                        </address>
                        <p>
                            (352) 505-2811
                            <br />
                            Mon-Sat 10:00am-8:00pm
                            <br />
                            Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Jacksonville</h4>
                        <address>
                            4600 Tropea Way Suite 101
                            <br />
                            Jacksonville, FL 32246
                        </address>
                        <p>
                            (904) 559-1842
                            <br />
                            Mon-Sat 10:00am-8:00pm
                            <br />
                            Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Miami (Partner Store)</h4>
                        <address>
                            3887 NW 107th Ave, Suite 107
                            <br /> Doral, FL 33178
                        </address>
                        <p>
                            (786) 485-4589
                            <br /> Mon-Fri 9:00am-7:00pm
                            <br /> Saturday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Orlando</h4>
                        <address>
                            899 N. Alafaya Trail
                            <br /> Orlando, FL 32828
                        </address>
                        <p>
                            (407) 845-2100
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Tampa</h4>
                        <address>
                            14360 N Dale Mabry Hwy
                            <br /> Tampa, FL 33618
                        </address>
                        <p>
                            (813) 265-0491
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">West Palm Beach</h4>
                        <address>
                            2272 Okeechobee Blvd
                            <br />
                            West Palm Beach, FL 33409
                        </address>
                        <p>
                            (561) 508-3128
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                            <br />
                            <br />
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Georgia</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Alpharetta</h4>
                        <address>
                            6350 North Point Pkwy #610
                            <br /> Alpharetta, GA 30022
                        </address>
                        <p>
                            (678) 624-0102
                            <br /> Mon-Sat 10:00am-6:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Atlanta</h4>
                        <address>
                            440 Ernest Barrett Pkwy NW
                            <br /> Kennesaw, GA 30144
                        </address>
                        <p>
                            (678) 403-1905
                            <br /> Mon-Thurs 10:00am-6:00pm
                            <br /> Fri-Sat 10:00am-7:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Newnan</h4>
                        <address>
                            335 Newnan Crossing Bypass Ste. A<br /> Newnan, GA 30265
                        </address>
                        <p>
                            (678) 829-4066
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Hawaii</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Honolulu</h4>
                        <address>
                            900 N Nimitz Hwy Ste 108
                            <br /> Honolulu, HI 96817
                        </address>
                        <p>
                            (808) 892-4411
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Idaho</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Meridian</h4>
                        <address>
                            2148 North Eagle Road, Ste. 120
                            <br /> Meridian, ID 83646
                        </address>
                        <p>
                            (208) 994-7179
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Illinois</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Downers Grove</h4>
                        <address>
                            2936 Finley Rd
                            <br /> Downers Grove, IL 60515
                        </address>
                        <p>
                            (630) 376-6489
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Gurnee</h4>
                        <address>
                            6430 Grand Avenue Suite 102
                            <br />
                            Gurnee, IL 60031
                        </address>
                        <p>
                            (847) 872-0857
                            <br /> Mon-Wed 10:00am-6:00pm
                            <br /> Thur-Sat 10:00am-8:00pm
                            <br /> Sun 10:00am-6:00pm{" "}
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Schaumburg</h4>
                        <address>
                            1975 East Golf Road <br />
                            Schaumburg, IL 60173
                        </address>
                        <p>
                            (847) 379-8974
                            <br /> Mon-Wed 10:00am-6:00pm
                            <br /> Thur-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Indiana</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Indianapolis</h4>
                        <address>
                            5650 E. 86th Street Suite F<br /> Indianapolis, IN 46250
                        </address>
                        <p>
                            (317) 516-6683
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Kansas</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Overland Park</h4>
                        <address>
                            12010 Metcalf Ave
                            <br /> Overland Park, KS 66213
                        </address>
                        <p>
                            (913) 600-5508
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sun 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Wichita</h4>
                        <address>
                            8113 E. Kellogg St. Ste. 400
                            <br /> Wichita, KS 67207
                        </address>
                        <p>
                            (316) 925-7122
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Louisiana</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">5.11 By Karl Malone - Ruston</h4>
                        <address>
                            1913 E Kentucky Ave
                            <br /> Ruston, LA 71270
                        </address>
                        <p>
                            (318) 224-7065
                            <br /> Mon-Sat 10:00am-6:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Metairie</h4>
                        <address>
                            6601 Veterans Memorial Blvd
                            <br /> Metairie, LA 70003
                        </address>
                        <p>
                            (504) 266-2197
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Maryland</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Rockville</h4>
                        <address>
                            12212 Rockville Pike
                            <br /> Rockville, MD 20852
                        </address>
                        <p>
                            (240) 206-6415
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Massachusetts</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Braintree- PERMANENTLY CLOSED</h4>
                        <address>
                            200 Grossman Dr #110
                            <br /> Braintree, MA 02184
                        </address>
                        <p>
                            (781) 380-8100
                            <br /> *Please visit our Saugus location
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Saugus</h4>
                        <address>
                            358 Broadway Ste. D<br /> Saugus, MA 01906
                        </address>
                        <p>
                            (781) 816-7085
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Michigan</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Detroit</h4>
                        <address>
                            45153 Market St
                            <br /> Shelby Charter Township, MI 48315
                        </address>
                        <p>
                            (313) 752-1141
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Minnesota</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Minneapolis</h4>
                        <address>
                            750 W 78th St
                            <br /> Richfield, MN 55423
                        </address>
                        <p>
                            (612) 353-6798
                            <br /> Mon-Saturday 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Missouri</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Fenton</h4>
                        <address>
                            170 Gravois Bluffs Circle Dr., Ste. A <br />
                            Fenton, MO 63026
                        </address>
                        <p>
                            (636) 720-3224
                            <br /> Mon-Sat 10:00am-6:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Independence</h4>
                        <address>
                            18680 East 39th Street, South Suite B <br />
                            Independence, MO 64057
                        </address>
                        <p>
                            (816) 379-3467
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">St. Louis</h4>
                        <address>
                            1461 Bass Pro Drive
                            <br />
                            St. Charles, MO 63301
                        </address>
                        <p>
                            (636) 238-3821
                            <br /> Mon-Thur 10:00am-6:00pm
                            <br /> Fri-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Nebraska</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Omaha</h4>
                        <address>
                            721 S. 72nd St. Ste. 101
                            <br />
                            Omaha, NE 68114
                        </address>
                        <p>
                            (531)484-3677
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">New Mexico</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Albuquerque</h4>
                        <address>
                            4900 Cutler Ave. N.E., Suite E1
                            <br />
                            Albuquerque, NM 87110
                        </address>
                        <p>
                            (505)219-1704
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Cottonwood</h4>
                        <address>
                            10260 Coors Blvd Bypass NW Ste. BOA
                            <br />
                            Albuquerque, NM 87114
                        </address>
                        <p>
                            (505)295-5910
                            <br /> Mon-Sat 10:00am-6:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">New York</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Long Island</h4>
                        <address>
                            233 Glen Cove Rd
                            <br /> Carle Place, NY 11514
                        </address>
                        <p>
                            (516) 747-0217
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Nevada</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Las Vegas</h4>
                        <address>
                            4305 Dean Martin Dr #100
                            <br /> Las Vegas, NV 89103
                        </address>
                        <p>
                            (702) 625-0943
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Reno</h4>
                        <address>
                            6667 South Virginia Street
                            <br /> Reno, NV 89511
                        </address>
                        <p>
                            (775) 300-6016
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">North Carolina</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Burlington</h4>
                        <address>
                            1348 Java Lane, Ste. 106
                            <br /> Burlington, NC 27215
                        </address>
                        <p>
                            (743) 209-6903
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Charlotte</h4>
                        <address>
                            9813 South Blvd #105
                            <br /> Charlotte, NC 28273
                        </address>
                        <p>
                            (704) 900-6624
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Durham</h4>
                        <address>
                            6901 Fayetteville Rd Ste. 101
                            <br /> Durham, NC 27713
                        </address>
                        <p>
                            (984) 243-2400
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Fayetteville</h4>
                        <address>
                            2043 Skibo Rd. Ste. 102
                            <br /> Fayetteville, NC 28314
                        </address>
                        <p>
                            (910) 766-6013
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Lejeune</h4>
                        <address>
                            1447 Western Blvd., Ste. 100
                            <br />
                            Jacksonville, NC 28546
                        </address>
                        <p>
                            (910) 518-0472
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Ohio</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Cincinnati</h4>
                        <address>
                            7322 Kenwood Rd
                            <br />
                            Cincinnati, OH 45236
                        </address>
                        <p>
                            (513) 570-5213
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Columbus</h4>
                        <address>
                            4028 Morse Crossing
                            <br />
                            Columbus, OH 43219
                        </address>
                        <p>
                            (614) 636-4675
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Oklahoma</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Moore</h4>
                        <address>
                            2570 S. I-35 Service Rd. Ste. 024
                            <br /> Moore, OK 73160
                        </address>
                        <p>
                            (405) 754-1522
                            <br /> Mon-Sat 10:00am-6:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Oklahoma City</h4>
                        <address>
                            13710 N Pennsylvania Ave Unit 10
                            <br /> Oklahoma City, OK 73134
                        </address>
                        <p>
                            (405) 607-2354
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Tulsa</h4>
                        <address>
                            9608 E 71st Street
                            <br /> Tulsa, OK 74133
                        </address>
                        <p>
                            (539) 202-1632
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Oregon</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Portland</h4>
                        <address>
                            7071 SW Nyberg St
                            <br /> Tualatin, OR 97062
                        </address>
                        <p>
                            (503) 486-5945
                            <br /> Mon-Sat 10:00am-6:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Pennsylvania</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Pittsburgh</h4>
                        <address>
                            7803 McKnight Road Suite A<br /> Pittsburgh, PA 15237
                        </address>
                        <p>
                            (412) 404-3079
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">South Carolina</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Columbia </h4>
                        <address>
                            1009 Bower Pkwy
                            <br /> Columbia, SC 29212
                        </address>
                        <p>
                            (803) 932-5111
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Tennessee</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Clarksville</h4>
                        <address>
                            2139 Lowes Dr., Ste. B<br /> Clarksville, TN 37040
                        </address>
                        <p>
                            (629) 895-4911
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Knoxville</h4>
                        <address>
                            272 N. Peters Rd.
                            <br /> Knoxville, TN 37923
                        </address>
                        <p>
                            (865) 888-4493
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Memphis</h4>
                        <address>
                            2840 Wolf Creek Parkway
                            <br /> Memphis, TN 38133
                        </address>
                        <p>
                            (901) 623-9780
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Nashville</h4>
                        <address>
                            2109 Abbott Martin Rd
                            <br /> Nashville, TN 37215
                        </address>
                        <p>
                            (615) 891-2918
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Texas</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">The Alamo </h4>
                        <address>
                            5511 W Loop 1604 N Ste 101
                            <br /> San Antonio, TX 78253
                        </address>
                        <p>
                            (210) 688-9898
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Arlington</h4>
                        <address>
                            951 W Interstate 20 Ste 107
                            <br /> Arlington, TX 76017
                        </address>
                        <p>
                            (817) 466-7431
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Austin</h4>
                        <address>
                            5400 Brodie Lane, Suite 740
                            <br /> Sunset Valley, TX 78745
                        </address>
                        <p>
                            (512) 766-1205
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Baybrook</h4>
                        <address>
                            20095 Gulf Freeway
                            <br /> Webster, TX 77598
                        </address>
                        <p>
                            (281) 316-2664
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Beaumont</h4>
                        <address>
                            4255-B Dowlen Rd. <br /> Beaumont, TX 77706
                        </address>
                        <p>
                            (409) 299-5398
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Brooks</h4>
                        <address>
                            3127 SE Military Ste. 118 <br /> San Antonio, TX 78223
                        </address>
                        <p>
                            (210) 942-4356
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Brownsville</h4>
                        <address>
                            2355 N Expressway Ste. 8 <br /> Brownsville, TX 78520
                        </address>
                        <p>
                            (361) 288-1154
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">College Station</h4>
                        <address>
                            1501 University Dr. East, Ste. 800
                            <br /> College Station, TX 77840
                        </address>
                        <p>
                            (979) 431-4697
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Corpus Christi</h4>
                        <address>
                            4938 S. Staples St., Ste. D-18
                            <br /> Corpus Christi, TX 78411
                        </address>
                        <p>
                            (361) 724-3136
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">El Paso</h4>
                        <address>
                            6800 Gateway Blvd East, Unit 2, Suite B<br /> El Paso, TX 79915
                        </address>
                        <p>
                            (915) 249-4594
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Fort Bliss</h4>
                        <address>
                            1614 Pleasonton Rd. Suite D-123
                            <br /> Fort Bliss, TX 79906
                        </address>
                        <p>
                            (915) 249-4581
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Fort Worth</h4>
                        <address>
                            9329 North Freeway
                            <br /> Fort Worth, TX 76177
                        </address>
                        <p>
                            (682) 291-0085
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Frisco</h4>
                        <address>
                            3211 Preston Rd. Ste 12
                            <br /> Frisco, TX 75034
                        </address>
                        <p>
                            (214) 618-0277
                            <br /> Mon-Sat 10:00am-6:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Houston</h4>
                        <address>
                            5870 Westheimer Rd.
                            <br /> Houston, TX 77057
                        </address>
                        <p>
                            (713) 266-1012
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Humble</h4>
                        <address>
                            19438 US 59 N Suite B<br /> Humble, TX 77338
                        </address>
                        <p>
                            (281) 973-0783
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Katy</h4>
                        <address>
                            20230 Katy Fwy
                            <br /> Katy, TX 77449
                        </address>
                        <p>
                            (346) 353-2250
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Killeen</h4>
                        <address>
                            201 E. Central Texas Expressway Suite 700
                            <br /> Harker Heights, TX 76548
                        </address>
                        <p>
                            (254) 213-5402
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Laredo</h4>
                        <address>
                            2450 Monarch Dr., Suite 3E
                            <br /> Laredo, TX 78045
                        </address>
                        <p>
                            (956) 284-6054
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Lubbock</h4>
                        <address>
                            2910 West Loop 289, Ste. 825
                            <br /> Lubbock, TX 79407
                        </address>
                        <p>
                            (806) 696-3535
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">McAllen</h4>
                        <address>
                            1400 E Expressway 83 #110
                            <br /> McAllen, TX 78745
                        </address>
                        <p>
                            (956) 688-9806
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Midland</h4>
                        <address>
                            2900 W. Loop 250 N. Frontage Rd., Ste. 125 <br /> Midland, TX 79705
                        </address>
                        <p>
                            (432) 400-1188
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">San Antonio</h4>
                        <address>
                            15693 San Pedro Ave
                            <br /> San Antonio, TX 78232
                        </address>
                        <p>
                            (210) 402-4033
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">South Ft. Worth</h4>
                        <address>
                            5958 SW Loop 820 <br /> South Ft. Worth, TX 76132
                        </address>
                        <p>
                            (817) 737-5011
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Sugar Land</h4>
                        <address>
                            16322 Southwest Freeway <br /> Sugar Land, TX 77385
                        </address>
                        <p>
                            (281) 673-6375
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">The Woodlands</h4>
                        <address>
                            19075 Interstate 45 North Ste 113B
                            <br /> Shenandoah, TX 77385
                        </address>
                        <p>
                            (346) 704-0891
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Utah</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Salt Lake City</h4>
                        <address>
                            369 W 1830 South
                            <br /> Salt Lake City, UT 84115
                        </address>
                        <p>
                            (801) 467-8691
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Virginia</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Fairfax</h4>
                        <address>
                            13031 Fair Lakes Shopping Center
                            <br />
                            Fairfax, VA 22033
                        </address>
                        <p>
                            (571) 350-3056
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Fredericksburg</h4>
                        <address>
                            1501 Central Park Blvd. Ste 14
                            <br />
                            Fredericksburg, VA 22401
                        </address>
                        <p>
                            (571) 473-5002
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Richmond- PERMANENTLY CLOSED</h4>
                        <address>
                            7108 Midlothian Turnpike
                            <br /> North Chesterfield, VA 23225
                        </address>
                        <p>
                            (804) 745-6367
                            <br /> Mon-Fri 10:00am-8:00pm
                            <br /> Sat-Sun 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Springfield</h4>
                        <address>
                            6575 Frontier Dr. Ste T<br /> Springfield, VA 22150
                        </address>
                        <p>
                            (571) 312-6446
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Virginia Beach</h4>
                        <address>
                            3980 Virginia Beach Blvd Ste 101
                            <br /> Virginia Beach, VA 23452
                        </address>
                        <p>
                            (757) 837-4827
                            <br /> Mon-Sat 10:00am-6:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Short Pump</h4>
                        <address>
                            11120 West Broad St.
                            <br /> Glen Allen, VA 23060
                        </address>
                        <p>
                            (804) 613-4866
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Washington</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Spokane</h4>
                        <address>
                            4808 E. Sprague Avenue Ste. 203
                            <br />
                            Spokane, WA 99212
                        </address>
                        <p>
                            (509) 381-0020
                            <br /> Mon-Sat 10:00am-8:00pm
                            <br /> Sunday 10:00am-6:00pm
                        </p>
                    </div>
                </div>
                <br />
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">China</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Hong Kong</h4>
                        <address>
                            Shop 18, Yan On Building.
                            <br /> 1 Kwong Wah Street, Mongkok,
                            <br /> Kowloon, Hong Kong
                        </address>
                        <p>
                            852-2771 3380 / 2771 3880
                            <br /> Mon-Sun 12:00pm-9:00pm
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Shanghai</h4>
                        <address>
                            No.592, Fuxing Middle Road
                            <br /> Shanghai
                            <br /> China
                        </address>
                        <p>
                            559 277-5511
                            <br /> Mon-Sun 9:00am-8:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Indonesia</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Jakarta</h4>
                        <address>
                            Pondok Indah Mall 2 lt. 3 no.312 Jl. Metro Pondok Indah kav. 4, Pondok,
                            Pondok Pinang, Kebayoran Lama, RT.1/RW.16, Pd. Pinang, Kby. Lama, Kota
                            Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12310
                            <br /> Indonesia
                        </address>
                        <p>
                            021-75900876 <br />
                            Mon-Sun 10:00am-10:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Japan</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Tokyo</h4>
                        <address>
                            1072 Kumagawa
                            <br /> Fussashi, Japan
                        </address>
                        <p>
                            81-42-513-7015
                            <br /> Mon-Sun 11:00am-8:00pm / Closed on Tuesdays
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Taiwan</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Taipei</h4>
                        <address>
                            1F., No.13, Aly. 35, Ln. 181, Sec. 4, Zhongxiao E. Rd.
                            <br /> Da’an Dist., Taipei City 106
                            <br />
                            Taiwan (R.O.C.)
                        </address>
                        <p>
                            886-2-2778-9800
                            <br /> Mon-Sun 1:00pm-10:00pm
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">
                            <span style={{ fontSize: 30 }}>Australia</span>
                        </h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Australia</h4>
                        <address>
                            2/165 Canterbury Road
                            <br /> Bankstown, NSW 2200
                            <br /> <span>Australia</span>
                        </address>
                        <p>+61 02 9708 1856</p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">Europe</h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Hamburg</h4>
                        <address>
                            Brandshofer Deich 68
                            <br /> 20539 Hamburg
                            <br />
                            Germany
                        </address>
                        <p>
                            +49 40 22860237
                            <br /> Mon-Sat 10:00-19:00
                            <br /> Sunday Closed
                            <br />
                        </p>
                    </div>
                    <div className="info-location col-sm-6 col-lg-4">
                        <h4 className="heading-quinary">Helsinki</h4>
                        <address>
                            Ristipellontie 23
                            <br />
                            00390 Helsinki
                            <br />
                            Finland
                        </address>
                        <p>
                            +358 44 970 9699 <br /> Mon-Fri 10:00-15:30
                            <br />
                        </p>
                    </div>
                </div>
                <hr />
                <div className="location-row row m-5">
                    <div className="col-sm-12">
                        <h3 className="statename">
                            <span style={{ fontSize: 30 }}>Middle East</span>
                        </h3>
                    </div>
                    <br />
                    <hr />
                    <div className="info-location col-sm-6 col-lg-4">
                        <address>
                            5.11 International AB - Rep. Office
                            <br /> 1106 Smart Heights Bldg, Barsha Heights, Tecom
                            <br /> Dubai, U.A.E
                            <br /> <span>Europe</span>
                        </address>
                        <p>+971 44566383</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default StoreLocator;
