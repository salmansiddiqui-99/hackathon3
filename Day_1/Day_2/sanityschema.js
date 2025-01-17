// schemas/index.js

// Products Schema
const product = {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
      { name: "name", type: "string", title: "Product Name" },
      { name: "price", type: "number", title: "Price" },
      { name: "stock", type: "number", title: "Stock Level" },
      { name: "category", type: "string", title: "Category" }, // e.g., Prescription, OTC
      { name: "description", type: "text", title: "Description" },
      { name: "tags", type: "array", title: "Tags", of: [{ type: "string" }] },
      { name: "expirationDate", type: "date", title: "Expiration Date" },
      { name: "pharmacy", type: "reference", to: [{ type: "pharmacy" }], title: "Pharmacy" },
    ],
  };
  
  // Orders Schema
  const order = {
    name: "order",
    type: "document",
    title: "Order",
    fields: [
      { name: "customer", type: "reference", to: [{ type: "customer" }], title: "Customer" },
      {
        name: "products",
        type: "array",
        title: "Products Ordered",
        of: [
          {
            type: "object",
            fields: [
              { name: "product", type: "reference", to: [{ type: "product" }], title: "Product" },
              { name: "quantity", type: "number", title: "Quantity" },
            ],
          },
        ],
      },
      { name: "total", type: "number", title: "Total Amount" },
      { name: "paymentStatus", type: "string", title: "Payment Status", options: { list: ["Pending", "Paid"] } },
      { name: "orderDate", type: "datetime", title: "Order Date" },
      { name: "shipment", type: "reference", to: [{ type: "shipment" }], title: "Shipment" },
    ],
  };
  
  // Customers Schema
  const customer = {
    name: "customer",
    type: "document",
    title: "Customer",
    fields: [
      { name: "name", type: "string", title: "Full Name" },
      { name: "email", type: "string", title: "Email Address" },
      { name: "phone", type: "string", title: "Phone Number" },
      {
        name: "address",
        type: "object",
        title: "Address",
        fields: [
          { name: "street", type: "string", title: "Street" },
          { name: "city", type: "string", title: "City" },
          { name: "postalCode", type: "string", title: "Postal Code" },
        ],
      },
      { name: "orderHistory", type: "array", title: "Order History", of: [{ type: "reference", to: [{ type: "order" }] }] },
    ],
  };
  
  // Shipment Schema
  const shipment = {
    name: "shipment",
    type: "document",
    title: "Shipment",
    fields: [
      { name: "order", type: "reference", to: [{ type: "order" }], title: "Order" },
      { name: "deliveryZone", type: "reference", to: [{ type: "deliveryZone" }], title: "Delivery Zone" },
      { name: "driver", type: "string", title: "Assigned Driver" },
      { name: "status", type: "string", title: "Status", options: { list: ["Pending", "In Transit", "Delivered"] } },
      { name: "ETA", type: "datetime", title: "Estimated Delivery Time" },
    ],
  };
  
  // Pharmacies Schema
  const pharmacy = {
    name: "pharmacy",
    type: "document",
    title: "Pharmacy",
    fields: [
      { name: "name", type: "string", title: "Pharmacy Name" },
      { name: "location", type: "string", title: "Location" },
      { name: "contactNumber", type: "string", title: "Contact Number" },
      { name: "products", type: "array", title: "Products Available", of: [{ type: "reference", to: [{ type: "product" }] }] },
    ],
  };
  
  // Delivery Zone Schema
  const deliveryZone = {
    name: "deliveryZone",
    type: "document",
    title: "Delivery Zone",
    fields: [
      { name: "zoneName", type: "string", title: "Zone Name" },
      { name: "postalCodes", type: "array", title: "Covered Postal Codes", of: [{ type: "string" }] },
      { name: "drivers", type: "array", title: "Assigned Drivers", of: [{ type: "string" }] },
    ],
  };
  
  export const schemaTypes = [product, order, customer, shipment, pharmacy, deliveryZone];
  