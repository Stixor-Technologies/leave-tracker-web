export const signUpForm = {
  id: "01-sign-up-form",
  fields: {
    email: {
      type: "string",
      name: "email",
      label: "Email",
      placeholder: "email",
      errMsg: "Email is required",
    },
    password: {
      type: "string",
      name: "password",
      label: "New Password",
      placeholder: "new password",
      errMsg: "Password is required.",
    },
    confirmPassword: {
      type: "string",
      name: "confirmPassword",
      label: "Confirm Password",
      placeholder: "confirm password",
      errMsg: "Password confirmation is required.",
    },
  },
};

// export const addCategoryForm = {
//   id: "01-add-category-form",
//   fields: {
//     categoryName: {
//       type: "text",
//       name: "categoryName",
//       label: "Category Name",
//       placeholder: "Enter category name",
//       errMsg: "Category name is required.",
//     },
//     categoryCode: {
//       type: "text",
//       name: "categoryCode",
//       label: "Category Code",
//       placeholder: "Enter category code",
//       errMsg: "Category code is required.",
//     },
//     displayOnHome: {
//       type: "boolean",
//       name: "displayOnHome",
//       label: "Display On Home",
//       placeholder: "Enter display on home",
//       errMsg: "Display on home is required.",
//     },
//     picture: {
//       type: "file",
//       name: "picture",
//       label: "Upload Category Image",
//       placeholder: "Upload category image here",
//       errMsg: "Category image is required",
//     },
//   },
// };

export const updateCategoryForm = {
  id: "02-update-category-form",
  fields: {
    categoryName: {
      type: "text",
      name: "categoryName",
      label: "Category Name",
      placeholder: "Enter category name",
      errMsg: "Category name is required.",
    },
    categoryCode: {
      type: "text",
      name: "categoryCode",
      label: "Category Code",
      placeholder: "Enter category code",
      errMsg: "Category code is required.",
    },
    displayOnHome: {
      type: "boolean",
      name: "displayOnHome",
      label: "Display On Home",
      placeholder: "Enter display on home",
      errMsg: "Display on home is required.",
    },
    picture: {
      type: "file",
      name: "picture",
      label: "Upload Category Image",
      placeholder: "Upload category image here",
      errMsg: "Category image is required",
    },
  },
};

export const addSubCategoryForm = {
  id: "03-add-sub-category-form",
  fields: {
    subCategoryName: {
      type: "text",
      name: "subCategoryName",
      label: "Sub Category Name",
      placeholder: "Enter sub category name",
      errMsg: "Sub category name is required.",
    },
    subCategoryCode: {
      type: "text",
      name: "subCategoryCode",
      label: "Sub Category Code",
      placeholder: "Enter sub category code",
      errMsg: "Sub category code is required.",
    },
    category: {
      type: "text",
      name: "category",
      label: "Category",
      placeholder: "Select category",
      errMsg: "Category is required.",
    },
  },
};

export const updateSubCategoryForm = {
  id: "04-update-sub-category-form",
  fields: {
    subCategoryName: {
      type: "text",
      name: "subCategoryName",
      label: "Sub Category Name",
      placeholder: "Enter sub category name",
      errMsg: "Sub category name is required.",
    },
    subCategoryCode: {
      type: "text",
      name: "subCategoryCode",
      label: "Sub Category Code",
      placeholder: "Enter sub category code",
      errMsg: "Sub category code is required.",
    },
    category: {
      type: "text",
      name: "category",
      label: "Category",
      placeholder: "Select category",
      errMsg: "Category is required.",
    },
  },
};

export const addProductForm = {
  id: "05-add-product-form",
  fields: {
    productName: {
      type: "text",
      name: "productName",
      label: "Product Name",
      placeholder: "Enter product name",
      errMsg: "Product name is required.",
    },
    productCode: {
      type: "text",
      name: "productCode",
      label: "Product Code",
      placeholder: "Enter product code",
      errMsg: "Product code is required.",
    },
    description: {
      type: "text",
      name: "description",
      label: "Description",
      placeholder: "Enter product description",
      errMsg: "Product description is required.",
    },
    category: {
      type: "text",
      name: "category",
      label: "Category",
      placeholder: "Select category",
      errMsg: "Product category is required.",
    },
    subCategory: {
      type: "text",
      name: "subCategory",
      label: "Sub Category",
      placeholder: "Select sub category",
      errMsg: "Product sub category is required.",
    },
    displayOnHome: {
      type: "boolean",
      name: "displayOnHome",
      label: "Display On Home",
      placeholder: "Enter display on home",
      errMsg: "Display on home is required.",
    },
    picture: {
      type: "file",
      name: "picture",
      label: "Upload Product Image",
      placeholder: "Upload product image here",
      errMsg: "Product image is required.",
    },
  },
};

export const addRestaurantForm = {
  id: "06-add-restaurant-form",
  fields: {
    firstName: {
      type: "text",
      name: "firstName",
      label: "First Name",
      placeholder: "First name here",
      errMsg: "First name is required.",
    },
    lastName: {
      type: "text",
      name: "lastName",
      label: "Last Name",
      placeholder: "Last name here",
      errMsg: "Last name is required.",
    },
    businessName: {
      type: "text",
      name: "businessName",
      label: "Business Name",
      placeholder: "Business name here",
      errMsg: "Business name is required.",
    },
    email: {
      type: "text",
      name: "email",
      label: "Email",
      placeholder: "Your email here",
      errMsg: "Email is required.",
    },
    phoneNumber: {
      type: "text",
      name: "phoneNumber",
      label: "Phone Number",
      placeholder: "Your phone number here",
      errMsg: "Phone number is required.",
    },
    city: {
      type: "text",
      name: "city",
      label: "City",
      placeholder: "Select City",
      errMsg: "City is required.",
    },
    address: {
      type: "text",
      name: "address",
      label: "Address / Area",
      placeholder: "Your address here",
      errMsg: "Address / Area is required.",
    },
    status: {
      type: "boolean",
      name: "status",
      label: "Account Status",
      placeholder: "Account status",
      errMsg: "Account status is required.",
    },
  },
};

export const addAdminForm = {
  id: "07-add-admin-form",
  fields: {
    name: {
      type: "text",
      name: "name",
      label: "Name",
      placeholder: "Your name here",
      errMsg: "Name is required.",
    },
    username: {
      type: "text",
      name: "username",
      label: "Username",
      placeholder: "Username here",
      errMsg: "Username is required.",
    },
    email: {
      type: "text",
      name: "email",
      label: "Email",
      placeholder: "Your email here",
      errMsg: "Email is required.",
    },
    phoneNumber: {
      type: "text",
      name: "phoneNumber",
      label: "Phone Number",
      placeholder: "Your phone number here",
      errMsg: "Phone number is required.",
    },
    status: {
      type: "text",
      name: "status",
      label: "Admin Status",
      placeholder: "Select Status",
      errMsg: "Admin status is required.",
    },
  },
};

export const updateProductRequestForm = {
  id: "07-update-product-request-form",
  fields: {
    productName: {
      type: "text",
      name: "productName",
      label: "Product Name",
      placeholder: "Product name here",
      errMsg: "Product name is required.",
    },
    productDescription: {
      type: "text",
      name: "productDescription",
      label: "Product Description",
      placeholder: "Product description here",
      errMsg: "Product description is required.",
    },
    productPrice: {
      type: "text",
      name: "productPrice",
      label: "Product Price",
      placeholder: "Product price here",
      errMsg: "Product price is required.",
    },
    category: {
      type: "text",
      name: "category",
      label: "Category",
      placeholder: "Select Category",
      errMsg: "Category is required.",
    },
    subCategory: {
      type: "text",
      name: "subCategory",
      label: "Sub Category",
      placeholder: "Select Sub Category",
      errMsg: "Sub Category is required.",
    },
    picture: {
      type: "file",
      name: "picture",
      label: "Upload Product Request Image",
      placeholder: "Upload product request image here",
      errMsg: "Product request image is required.",
    },
  },
};

export const promotionForm = {
  id: "05-add-Promotion-form",
  fields: {
    title: {
      type: "text",
      name: "title",
      label: "Promotion Title",
      placeholder: "Enter promotion title",
      errMsg: "Promotion title is required.",
    },
    startDate: {
      type: "date",
      name: "startDate",
      label: "Start Date",
      placeholder: "dd/mm/yyy",
      errMsg: "Promotion's start date is required.",
    },
    endDate: {
      type: "date",
      name: "endDate",
      label: "End Date",
      placeholder: "dd/mm/yyy",
      errMsg: "Promotion's end date is required.",
    },
    isActive: {
      type: "boolean",
      name: "isActive",
      label: "Active",
      placeholder: "Active",
      errMsg: "",
    },
    image: {
      type: "file",
      name: "image",
      label: "Upload Banner Image",
      placeholder: "Upload promotion image here",
      errMsg: "Promotion image is required.",
    },
  },
};
