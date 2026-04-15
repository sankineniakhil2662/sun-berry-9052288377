import React from 'react';

import UIUXHero from './sections/UIUXHero';
import UIUXCapabilities from './sections/UIUXCapabilities';
import UIUXProcessBlock from './sections/UIUXProcessBlock';
import UIUXBenefits from './sections/UIUXBenefits';
import UIUXWhyChooseUs from './sections/UIUXWhyChooseUs';
import UIUXTabs from './sections/UIUXTabs';
import UIUXAdvantages from './sections/UIUXAdvantages';
import UIUXStats from './sections/UIUXStats';

const UIUXDesignPage = () => {
  return (
    <main className="bg-bg text-body">
        <UIUXHero/>
        <UIUXCapabilities/>
        <UIUXProcessBlock variant="both"/>
        <UIUXBenefits/>
        <UIUXWhyChooseUs/>
        <UIUXTabs/>
        <UIUXAdvantages/>
        <UIUXStats/>
    </main>
  )
}

export default UIUXDesignPage
