import React from 'react';
import Banner from './Banner';
import ChooseYourWallets from './ChooseYourWallets';
import QuickStartGuide from './QuickStartGuide';
import QuickStartGuide2 from './QuickStartGuide2';
import WhatIsAkacoin from './WhatIsAkacoin';

const Home = () => {
    return (
        <div>
            <Banner />
            <WhatIsAkacoin />
            <ChooseYourWallets />
            <QuickStartGuide />
            <QuickStartGuide2 />
        </div>
    );
};

export default Home;