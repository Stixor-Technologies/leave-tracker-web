export type AdminStatus = "ACTIVE" | "NONACTIVE";
export type AdminRole = "ADMIN";

export interface Admin {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  status: AdminStatus;
  role: AdminRole;
  createdAt: string;
  updatedAt: string;
}

export interface AdminState {
  admin: Admin | null;
  isLoggedIn: boolean;
  accessToken: string;
  signedInOtp: string | null;
  signedInPhoneNumber: string | null;
}

export interface Route {
  name: string;
  href: string;
  icon: string;
  activeIcon: string;
  nestedRoutes?: {
    name: string;
    href: string;
  }[];
}

export interface Picture {
  publicId: string;
  url: string;
}

export interface Category {
  id: string;
  title: string;
  code: string;
  isPublished: boolean;
  picture: Picture | null;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface SubCategory extends Omit<Category, "picture"> {
  category: Category;
}

export interface Product {
  id: string;
  name: string;
  code: string;
  description: string;
  unit: number;
  isPublished: boolean;
  category: Category;
  subCategory: SubCategory;
  picture: {
    publicId: string;
    url: string;
  } | null;
}

export interface SignInRequest {
  phoneNumber: string;
}

export interface SignInResponse {
  message: string;
  data: {
    otp: string;
  };
}

export interface VerifyOtpRequest {
  otp: string;
  phoneNumber: string;
}

export interface VerifyOtpResponse {
  message: string;
  data: {
    admin: Admin;
    accessToken: string;
  };
}

export interface ResendOtpRequest
  extends Pick<VerifyOtpRequest, "phoneNumber"> {}

export interface ResendOtpResponse extends SignInResponse {}

export interface CreateCategoryRequest {
  title: string;
  code: string;
  isPublished: boolean;
}

export interface CreateCategoryResponse {
  message: string;
  data: Category;
}

export interface GetCategoriesResponse {
  message: string;
  data: Category[];
}

export interface TogglePublishCategoryResponse {
  message: string;
  data: Category;
}

export interface TogglePublishCategoryRequest {
  categoryId: string;
}

export interface GetCategoryDetailsResponse
  extends TogglePublishCategoryResponse {}

export interface GetCategoryDetailsRequest
  extends TogglePublishCategoryRequest {}

export interface UpdateCategoryResponse extends TogglePublishCategoryResponse {}

export interface DeleteCategoryResponse extends TogglePublishCategoryResponse {}

export interface DeleteCategoryRequest extends TogglePublishCategoryRequest {}

export interface GetSubCategoriesResponse {
  message: string;
  data: SubCategory[];
}

export interface AddSubCategoryRequest {
  title: string;
  code: string;
  categoryId: string;
}

export interface AddSubCategoryResponse {
  message: string;
  data: SubCategory;
}

export interface GetSubCategoryDetailsResponse extends AddSubCategoryResponse {}

export interface UpdateSubCategoryRequest {
  title: string;
  categoryId: string;
}

export interface UpdateSubCaetgoryResponse extends AddSubCategoryResponse {}

export interface DeleteSubCategoryResponse extends AddSubCategoryResponse {}

export interface GetProductsResponse {
  message: string;
  data: Product[];
}

export interface AddProductResponse {
  message: string;
  data: Product;
}

export interface GetProductDetailsResponse {
  message: string;
  data: Product;
}

export interface ToggleIsPublishProductResponse {
  message: string;
  data: Product;
}

export interface DeleteProductResponse extends ToggleIsPublishProductResponse {}

export interface Profile {
  id: string;
  firstName: string;
  lastName: string;
  businessName: string;
  email: string;
  city: string;
  area: string;
  userId: string;
}

export interface User {
  id: string;
  phoneNumber: string;
  name: string | null;
  role: string;
  profilePicture: null;
  deviceToken: string | null;
  status: null;
  deleted: boolean;
  lastLogin: string;
  createdAt: string;
  updatedAt: null;
  updateColumn: number;
  verified: boolean;
  authState: string;
  profile: Profile | null;
}

export interface GetAccountsListResponse {
  message: string;
  data: User[];
}

export interface ToggleRestaurantStatusResponse {
  message: string;
  data: User;
}

export interface ToggleSupplierStatusResponse
  extends ToggleRestaurantStatusResponse {}

export interface GetAdminsListResponse {
  message: string;
  data: Admin[];
}

export interface ToggleAdminStatusResponse {
  message: string;
  data: Admin;
}

export interface CreateRestaurantRequest {
  name: string;
  businessName: string;
  email: string;
  phoneNumber: string;
  city: string;
  address: string;
  status: string;
}

export interface CreateRestaurantResponse {
  message: string;
  data: User;
}

export interface GetAccountDetailsResponse extends CreateRestaurantResponse {
  message: string;
  data: User;
}

export interface CreateSupplierRequest extends CreateRestaurantRequest {}

export interface CreateSupplierResponse extends CreateRestaurantResponse {}

export interface AddAdminRequest {
  name: string;
  username: string;
  email?: string | null;
  phoneNumber: string;
  status: "ACTIVE" | "NONACTIVE";
}

export interface AddAdminResponse {
  message: string;
  data: Admin;
}

export interface GetAdminDetailsResponse extends AddAdminResponse {}

export interface ProductRequest {
  id: string;
  category: {
    id: string;
    title: string;
  };
  subCatgeory: {
    id: string;
    title: string;
  };
  productDescription: string;
  productName: string;
  requestedBy: {
    id: string;
    name: string;
  };
  productPrice: number;
  picture: {
    url: string;
    publicId: string;
  } | null;
  supplier: User | null;
}

export interface ProductRequestDetails {
  id: string;
  category: string;
  subCategory: string;
  productDescription: string;
  productName: string;
  productPrice: number;
  picture: {
    url: string;
    publicId: string;
  } | null;
  supplier: User | null;
}

export interface GetProductRequestsResponse {
  message: string;
  data: ProductRequest[];
}

export interface GetProductRequestsDetails {
  message: string;
  data: ProductRequestDetails;
}

export interface AcceptProductResponse {
  message: string;
  data: ProductRequest;
}

export interface RejectProductResponse {
  message: string;
  data: ProductRequest;
}

export interface UpdateProductRequestDetailsResponse
  extends RejectProductResponse {}

export interface PromotionResponse {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  image: {
    url: string;
    publicId: string;
  };
}

export interface PromotionRequest {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  image: {
    url: string;
    publicId: string;
  };
}

export interface GetPromotionsResponse {
  message: string;
  data: {
    data: PromotionRequest[];
    meta: {
      currentPage: number;
      lastPage: number | null;
      next: number;
      perPage: number;
      prev: number | null;
      total: number;
    };
  };
}

export interface Restaurant {
  id: string;
  phoneNumber: string;
  name: string | null;
  role: string;
  profilePicture: { url: string; publicId: string } | null;
  deviceToken: null | string;
  status: string;
  deleted: boolean;
  lastLogin: string;
  createdAt: string;
  updatedAt: string | null;
  updateColumn: number;
  verified: boolean;
  authState: string;
  profile: {
    area: string;
    businessName: string;
  };
}

export interface Supplier {
  name: string;
  image: {
    url: string;
  };
  profile: {
    businessName: string;
  };
}

export interface SupplierProduct {
  createdAt: string;
  deleted: boolean;
  id: string;
  product: Product;
  productId: string;
  productPrice: number;
  discount: number;
  quantity: number;
  supplierId: string;
  updatedAt: string;
  supplier: Supplier;
}

export interface OrderItem {
  id: string;
  quantity: number;
  supplierProductId: string;
  supplierProduct: SupplierProduct;
  orderId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: string;
  orderId: string;
  subTotal: number;
  address: string;
  date: string;
  paymentMethod: string;
  restaurantId: string;
  orderStatus: string;
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
  restaurant: Restaurant;
  orderItems: OrderItem[];
}

export interface GetOrderRequest {
  page: number;
  perPage: number;
  searchTerm: string;
  sort: string;
  orderStatus: string;
  fromDate: string;
  toDate: string;
  minAmount: number | undefined;
  maxAmount: number | undefined;
}

export interface OrderCounts {
  All: number;
  DeliveryRequested: number;
  InProcess: number;
  PendingDeliveryCheck: number;
  Delivered: number;
  Return: number;
  Rejected: number;
}

export interface GetOrdersResponse {
  data: Order[];
  message: string;
  ordersCounts: OrderCounts;
  meta: {
    total: number;
    lastPage: number;
    currentPage: number;
    perPage: number;
    prev: number | null;
    next: number | null;
    pages: number;
  };
}
