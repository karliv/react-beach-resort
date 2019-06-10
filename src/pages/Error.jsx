import React from 'react';
import {Link} from "react-router-dom";

import Hero from '../components/Hero';
import Banner from "../components/Banner";

function Error() {
    return (
        <Hero>
            <Banner title="404" subtitle="page not found">
                <Link to="/rooms" className="btn-primary">
                    Back to Home page
                </Link>
            </Banner>
        </Hero>
    );
}

export default Error;