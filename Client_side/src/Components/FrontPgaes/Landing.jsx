import React from 'react';
import Banner from './Banner';
import { Layout } from 'lucide-react';
import LayouteOption from './LayouteOption';

const Landing = () => {
    return (
        <div>
           <Banner/>
           <LayouteOption />
        </div>
    );
};

export default Landing;