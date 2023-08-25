import React, { useState, useEffect } from 'react';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { BsChevronDown } from 'react-icons/bs';
import Styles from './Styles.jsx';
import FavoriteModal from './FavoriteModal.jsx';
import Reviews from './Reviews.jsx';
import SizeQtyChooser from './SizeQtyChooser.jsx';
import Checkout from './Checkout.jsx';
import Share from './PopupPages/Share.jsx';
import AddToBag from './PopupPages/AddToBag.jsx';

const ProductInfo = ({ productData, styles, setImages, SetThumbnail, availableSizes }) => {
  // State variables
  const [isFavorite, setIsFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showBag, setShowBag] = useState(false);
  const [description, SetDescription] = useState(false);
  const [showMaterials, SetShowMaterials] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [checkoutItem, setCheckoutItem] = useState([]);
  const [itemFeatures, setItemFeatures] = useState([]);

  // Handle the favorite icon click
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    setShowModal(true);
  };

  // Close the favorite modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Close the share popup
  const closeShare = () => {
    setShowShare(false);
  };

  // Handle the "Description & fit" section click
  const handleDescriptionClick = () => {
    SetDescription(!description);
  };

  // Handle the "Materials & features" section click
  const handleMaterialClick = () => {
    SetShowMaterials(!showMaterials);
  };

  // Auto-hide the bag popup after 3 seconds
  useEffect(() => {
    if (showBag) {
      const timeout = setTimeout(() => {
        setShowBag(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [showBag]);

  // Populate the item features based on product data
  useEffect(() => {
    if (productData && productData.features && productData.features.length > 0) {
      setItemFeatures(productData.features);
    }
  }, [productData]);

  // Render components
  return (
    <div className='p-4'>
      <div className='inner py-4'>
        {/* Various sections */}
        {/* Styles component */}
        <Styles
          styles={styles}
          setImages={setImages}
          SetThumbnail={SetThumbnail}
          setSelectedStyle={setSelectedStyle}
          setCheckoutItem={setCheckoutItem}
        />
        {/* Reviews component */}
        <Reviews />
        {/* Size and Quantity chooser component */}
        <SizeQtyChooser availableSizes={availableSizes} setSelectedSize={setSelectedSize} />
        {/* Checkout component */}
        <Checkout setShowShare={setShowShare} setShowBag={setShowBag} />

        {/* Product details */}
        <section>
          <section className='text-white flex items-center justify-between mb-3 pb-2 text-xl font-bold font-sans border-b-2 border-[#78716C]'>
            {/* Product name */}
            <div>{productData.name}</div>
            {/* Favorite icon */}
            <div
              className='pr-4 hover:text-[#78716C] cursor-pointer hover:scale-125 ease-in-out duration-300'
              onClick={handleFavoriteClick}
            >
              <BsFillSuitHeartFill size={25} color={isFavorite ? '#78716C' : ''} />
            </div>
          </section>
          {/* Other product information */}
          {/* Description */}
          <section
            className='text-white mb-2 text-lg font-sans font-medium px-2 flex justify-between items-center cursor-pointer'
            onClick={handleDescriptionClick}
          >
            Description & fit
            <div className='mr-2 hover:text-[#78716C]'>
              <BsChevronDown size={25} />
            </div>
          </section>
          {/* Show description if clicked */}
          {description && (
            <div className='text-white mb-2 text-md font-sans px-2'>{productData.description}</div>
          )}
          {/* Materials & Features */}
          <section
            className='text-white mb-2 text-lg font-medium font-sans px-2 flex justify-between items-center cursor-pointer'
            onClick={handleMaterialClick}
          >
            Materials & features
            <div className='mr-2 hover:text-[#78716C]'>
              <BsChevronDown size={25} />
            </div>
          </section>
          {/* Show materials and features if clicked */}
          {showMaterials && (
            <div className='text-white mb-2 text-md font-sans px-2'>
              {itemFeatures.map((feature, index) => (
                <p key={index}>
                  {feature.feature}: {feature.value}
                </p>
              ))}
            </div>
          )}
          {/* Default price */}
          <section className='text-white mb-4 text-lg font-medium font-sans px-2'>
            ${productData.default_price}
          </section>
        </section>
      </div>
      {/* Modals and popups */}
      {showModal && <FavoriteModal closeModal={closeModal} />}
      {showShare && <Share closeShare={closeShare} />}
      {showBag && (
        <AddToBag
          selectedStyle={selectedStyle}
          selectedSize={selectedSize}
          name={productData.name}
          price={productData.default_price}
          checkoutItem={checkoutItem[0]}
        />
      )}
    </div>
  );
};

export default ProductInfo;
