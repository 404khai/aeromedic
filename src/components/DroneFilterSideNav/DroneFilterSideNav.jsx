import React, {useState} from 'react'
import './DroneFilterSideNav.css'
import { IoFilter } from "react-icons/io5";
import DropdownWithCheckboxes from '../DropdownWithCheckboxes/DropdownWithCheckboxes';
import PriceFilter from '../PriceFilter/PriceFilter';

const DroneFilterSideNav = () => {
  const categoryOptions = ['Lightweight', 'Middleweight', 'Cruiserweight', 'Heavyweight'];
  const statusOptions = ['Idle', 'Loading', 'Loaded', 'Delivering', 'Delivered', 'Returning',];

  const [filteredPrice, setFilteredPrice] = useState(100);

  const handleFilterChange = (price) => {
    setFilteredPrice(price);
    console.log(`Filtered price: $${price}`);
  };

  return (
    <div className='filterSideNav'>

        <div className="filterHead">
            <h1>Filters</h1>
            <i><IoFilter /></i>
        </div>

        <div className="filterOptions">
            <DropdownWithCheckboxes 
              id="category"
              title="Category"
              options={categoryOptions}
            />

            <input type="text" placeholder='Name' className='filterSearch'/>

            <DropdownWithCheckboxes 
              id="status"
              title="Status"
              options={statusOptions}
            />

            <input type="text" placeholder='Battery' className='filterSearch'/>

            <div className='priceFilterBox'>
                <PriceFilter onFilterChange={handleFilterChange} />
                <p>Selected Price: ${filteredPrice}</p>
            </div>
        </div>
    </div>
  )
}

export default DroneFilterSideNav