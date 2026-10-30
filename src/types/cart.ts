import { MenuItem } from '../data/restaurantData';

export interface CartItem {
  dish: MenuItem;
  quantity: number;
  selectedSpiceLevel: 1 | 2 | 3;
  specialInstructions?: string;
}

export type OrderType = 'dine_in' | 'pickup' | 'delivery';

export interface CustomerOrderDetails {
  customerName: string;
  phone: string;
  orderType: OrderType;
  address?: string;
  tableNumber?: string;
  notes?: string;
}
