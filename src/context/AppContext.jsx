import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  // Load initial state from localStorage if available
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('rajwadi_cart');
      return saved && saved !== "undefined" && saved !== "null" ? JSON.parse(saved) : [];
    } catch(e) { return []; }
  });
  
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const saved = localStorage.getItem('rajwadi_wishlist');
      return saved && saved !== "undefined" && saved !== "null" ? JSON.parse(saved) : [];
    } catch(e) { return []; }
  });
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem('rajwadi_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('rajwadi_wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToCart = (product, stitchingOption, priceModifier, customMeasurements = null) => {
    // Create a unique ID based on product and variant
    const variantId = `${product.id}-${stitchingOption}`;
    
    setCartItems(prev => {
      const existing = prev.find(item => item.variantId === variantId);
      if (existing) {
        return prev.map(item => 
          item.variantId === variantId 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prev, {
        ...product,
        variantId,
        stitchingOption,
        basePrice: product.price,
        priceModifier,
        finalPrice: product.price + priceModifier,
        customMeasurements,
        quantity: 1
      }];
    });
    
    // Automatically open the drawer when adding to cart
    setIsCartOpen(true);
  };

  const removeFromCart = (variantId) => {
    setCartItems(prev => prev.filter(item => item.variantId !== variantId));
  };

  const updateQuantity = (variantId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev => prev.map(item => 
      item.variantId === variantId 
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const toggleWishlist = (productId) => {
    setWishlistItems(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      }
      return [...prev, productId];
    });
  };

  return (
    <AppContext.Provider value={{
      cartItems,
      wishlistItems,
      isCartOpen,
      setIsCartOpen,
      isWishlistOpen,
      setIsWishlistOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleWishlist
    }}>
      {children}
    </AppContext.Provider>
  );
};
