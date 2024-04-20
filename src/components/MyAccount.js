import React from 'react'

function MyAccount() {
    return (
        <div><div
            className="container text-center"
            style={{ paddingTop: 100, paddingBottom: 300 }}
        >
            <div className="pb-3">
                <h1>CREATE NEW CUSTOMER ACCOUNT</h1>
            </div>
            <div className="row">
                <div className="col">
                    <h4 className="fw-bold text-start pb-2">PERSONAL INFORMATION</h4>
                    <form>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                                FIRST NAME
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label fw-bold">
                                LAST NAME
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                            />
                        </div>
                        <h4 className="fw-bold text-start pb-2">SIGN-IN INFORMATION</h4>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                                EMAIL
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label fw-bold">
                                PASSWORD
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label fw-bold">
                                CONFIRM PASSWORD
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                            />
                        </div>
                        <br />
                        <div className="mb-3 form-check d-flex gap-3">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                            />
                            <label className="form-check-label" htmlFor="exampleCheck1">
                                Show Password
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="btn rounded-0"
                            style={{ backgroundColor: "#F8862C" }}
                        >
                            SIGN IN
                        </button>
                        <button
                            type="button"
                            className="btn rounded-0"
                            style={{ color: "#F8862C" }}
                        >
                            FORGOT YOUR PASSWORD?
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MyAccount