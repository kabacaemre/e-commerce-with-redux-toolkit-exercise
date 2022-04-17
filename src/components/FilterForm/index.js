import React, { useState } from 'react';
import Box from '../Box';
import FilterBox from '../FilterBox';
import './Filter.scss';

function FilterForm() {
  const categories = [
    { name: 'Old to new', key: 'new-asc' },
    { name: 'New to old', key: 'new-desc' },
    { name: 'Price hight to low', key: 'price-asc' },
    { name: 'Price low to High', key: 'price-desc' },
  ];

  const brands = [
    { name: 'Tesla', key: 'tesla' },
    { name: 'Polestar', key: 'rolestar' },
    { name: 'Rolls Royce', key: 'rolls-royce' },
    { name: 'Volkswagen', key: 'volkswagen' },
    { name: 'Mini', key: 'mini' },
    { name: 'Ferrari', key: 'ferrari' },
    { name: 'Dodge', key: 'dodge' },
    { name: 'Aston Martin', key: 'aston-martin' },
    { name: 'Chevrolet', key: 'chevrolet' },
  ];

  const models = [
    { name: 'Roadster', key: 'roadster' },
    { name: 'Grand Cherokee', key: 'grand-cherokee' },
    { name: 'Fortwo', key: 'fortwo' },
    { name: 'XC90', key: 'xc90' },
    { name: 'Durango', key: 'durango' },
    { name: 'Focus', key: 'focus' },
    { name: 'Charger', key: 'charger' },
    { name: 'Land Cruiser', key: 'land-cruiser' },
    { name: 'Ranchero', key: 'ranchero' },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);

  const onBrandsChange = (e) => {
    const selectedBrandsData = [...selectedBrands];

    if (e.checked) {
      selectedBrandsData.push(e.value);
    } else {
      for (let i = 0; i < selectedBrandsData.length; i++) {
        const selectedBrand = selectedBrandsData[i];

        if (selectedBrand.key === e.value.key) {
          selectedBrandsData.splice(i, 1);
          break;
        }
      }
    }

    setSelectedBrands(selectedBrandsData);
    console.log('selectedBrands', selectedBrands);
  };

  const onModelsChange = (e) => {
    const selectedModelsData = [...selectedModels];

    if (e.checked) {
      selectedModelsData.push(e.value);
    } else {
      for (let i = 0; i < selectedModelsData.length; i++) {
        const selectedModel = selectedModelsData[i];

        if (selectedModel.key === e.value.key) {
          selectedModelsData.splice(i, 1);
          break;
        }
      }
    }

    setSelectedModels(selectedModelsData);
    console.log('selectedModels', selectedModels);
  };

  return (
    <form>
      <Box title="Sort By">
        <FilterBox
          type="radio"
          isSearch={false}
          groupName="category"
          data={categories}
          selectedData={selectedCategory}
          onChangeFunc={setSelectedCategory}
        />
      </Box>
      <Box title="Brands">
        <FilterBox
          type="checkbox"
          isSearch
          groupName="brand"
          data={brands}
          selectedData={selectedBrands}
          onChangeFunc={onBrandsChange}
        />
      </Box>
      <Box title="Model">
        <FilterBox
          type="checkbox"
          isSearch
          groupName="model"
          data={models}
          selectedData={selectedModels}
          onChangeFunc={onModelsChange}
        />
      </Box>
    </form>
  );
}

export default FilterForm;
