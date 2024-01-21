import React from 'react';
import {images,data} from '../../constants'
import './SpecialMenu.css';
import { SubHeading, MenuItem } from '../../components';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title ="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today’s Special</h1>
    </div>
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_juice flex__center'>
        <p className='app__specialMenu-menu_heading'>Juice Oasis</p>
        <div className='app__specialMenu-menu_items'>
          {
            data.juices.map((juices, index)=>(
              <MenuItem key={juices.title + index} title={juices.title} price={juices.price} tags={juices.tags}/>
            ))}
        </div>
      </div>
    
    <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" loading='lazy' />
    </div>

   
      <div className='app__specialMenu-menu_coffee flex__center'>
        <p className='app__specialMenu-menu_heading'>Juice Oasis</p>
        <div className='app__specialMenu-menu_items'>
          {
            data.coffee.map((coffee, index)=>(
             <MenuItem key={coffee.title + index} title={coffee.title} price={coffee.price} tags={coffee.tags}/>
            ))}
        </div>
      </div>
    </div>
    <div style={{marginTop:'15px'}}>
        <button type='button' className='custom__button'>View more </button>
    </div>
  </div>
);

export default SpecialMenu;
