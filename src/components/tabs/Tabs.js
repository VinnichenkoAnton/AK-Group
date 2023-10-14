import React from 'react';

import Title from '../Title/Title';
import TabContent from './TabsComponents/TabContent';

import classes from './Tabs.module.scss';

import { firstTabList } from '../../data/data';

const Tabs = () => {
  return (
    <section className={classes.tabs}>
      <Title text="Ми пропонуємо" />
      <div className="tabs__outlet">
        <TabContent contentList={firstTabList} />
      </div>
    </section>
  );
};

export default Tabs;
