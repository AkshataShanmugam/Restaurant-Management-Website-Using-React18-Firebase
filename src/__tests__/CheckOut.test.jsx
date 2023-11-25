import React from 'react';
import { render } from '@testing-library/react';
import { assert } from 'vitest';
import DisplayOrders from '../../pages/CheckOutOrders.jsx';

const localStorageMock = (() => {
    let store = {};
    return {
      getItem: key => store[key],
      setItem: (key, value) => {
        store[key] = value.toString();
      },
      clear: () => {
        store = {};
      },
    };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });


test('checkOutTotalPrice is updated correctly', () => {
    // Set up required items in localStorage
    localStorage.setItem('checkOutTotalPrice', '0');
    localStorage.setItem('checkOutTotalPriceFinal', '0');
  
    const item = {
      title: 'Sample Item',
      description: 'This is a sample item',
      price: 10.99,
      count: 2,
      coverImg: 'sample-image-url',
    };
  
    const { getByText } = render(<DisplayOrders item={item} />);
  
    // Check the initial value of checkOutTotalPrice
    expect(localStorage.getItem('checkOutTotalPrice')).toBe('21.98');
});

let items = [
    {
        title: 'Sample Item 1',
        description: 'This is a sample item',
        price: 10.99,
        count: 2,
        coverImg: 'sample-image-url-1',
    },
    {
        title: 'Sample Item 2',
        description: 'This is another sample item',
        price: 15.99,
        count: 1,
        coverImg: 'sample-image-url-2',
    },
    {
        title: 'Sample Item 3',
        description: 'This is another sample item',
        price: 7.99,
        count: 4,
        coverImg: 'sample-image-url-3',
    },
];
  
test('checkOutTotalPrice is updated correctly for multiple items', () => {
    // Set up required items in localStorage
    localStorage.setItem('checkOutTotalPrice', '0');
    localStorage.setItem('checkOutTotalPriceFinal', '0');
  
    let totalPrice = 0;
    for (const item of items) {
      totalPrice += item.price * item.count;
    }
  
    // After processing all items, update the checkOutTotalPrice value
    localStorage.setItem('checkOutTotalPrice', String(totalPrice));
    console.log("Total Price: ", totalPrice);
    expect(localStorage.getItem('checkOutTotalPrice')).toBe(String(totalPrice));
});
  

items = [
    {
        title: 'Sample Item 1',
        description: 'This is a sample item',
        price: 10.99,
        count: 0,
        coverImg: 'sample-image-url-1',
    },
];
  
test('checkOutTotalPrice is updated correctly for multiple items', () => {
    // Set up required items in localStorage
    localStorage.setItem('checkOutTotalPrice', '0');
    localStorage.setItem('checkOutTotalPriceFinal', '0');
  
    let totalPrice = 0;
    for (const item of items) {
      totalPrice += item.price * item.count;
    }
  
    // After processing all items, update the checkOutTotalPrice value
    localStorage.setItem('checkOutTotalPrice', String(totalPrice));
    console.log("Total Price: ", totalPrice);
    expect(localStorage.getItem('checkOutTotalPrice')).toBe(String(totalPrice));
});