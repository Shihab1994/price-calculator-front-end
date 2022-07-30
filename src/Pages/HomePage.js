import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "../Components/Header";

const HomePage = () => {
    return (
        <main>
            <Header />
            <div className="container">
                <div className="body">
                    <div class="shadow-lg p-5 mb-5 bg-body rounded ms-5 me-5 ps-5 pe-5 pt-5 pb-5">
                        <label>
                            Product :
                        </label>
                        <select class="form-control form-select mb-5">
                            <option value="Select">Select a product</option><option value="Penguin-ears">
                                Penguin-ears (20 units per carton)</option><option value="Horseshoe">
                                Horseshoe (5 units per carton)</option>
                        </select>
                        <div className="mb-10 row">
                            <div class="mb-5 col-lg-4 col-md-6 col-sm-12">
                                <label>Product Price (Per Unit) : </label>
                                <input type="text" class="form-control" value="0.00" readonly />
                                <div class="invalid-feedback"></div>
                            </div>
                            <div class="mb-5 col-lg-4 col-md-6 col-sm-12">
                                <label>Total Product : </label>
                                <input type="number" class="form-control" />
                                <div class="invalid-feedback"></div>
                            </div>
                            <div class="mb-5 col-lg-4 col-md-6 col-sm-12">
                                <label>Purchase (Units) : </label>
                                <input type="text" class="form-control" value="" readonly />
                                <div class="invalid-feedback"></div>
                            </div>
                        </div>
                        <div align="center">
                            <button className="btn btn-success btn-size" type="submit">Get Price</button>
                        </div>
                        <div className="mb-10 row"><div class="mt-4 col-lg-4 col-md-6 col-sm-12">
                            <label className="bold">Total Price : </label>
                            <input type="text" class="form-control mb-1" value="" readonly />
                            <div class="invalid-feedback"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-2"><p></p></div>
            <footer className="text-center pt-3 footer">Copyright © 2022. All rights reserved.</footer>
        </main>
    )
}

export default HomePage;