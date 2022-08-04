import { combineReducers } from "redux";
import Order from "./Order";
import Product from "./Product";
import OrderCart from "./OrderCart";
export const reducers = combineReducers({ Order, Product, OrderCart })