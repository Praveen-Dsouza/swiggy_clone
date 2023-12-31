import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../../utils/storeSlices/cart";
import { CDN_URL, LOGIN_CHECKOUT_URL } from "../../utils/constants";
import account from "../../utils/images/account.png";
import checkout_location from "../../utils/images/checkout_location.png";
import payment from "../../utils/images/payment.png";
import info from "../../utils/images/info.png";
import OrderCancellationNotice from "./OrderCancellationNotice";
import EmptyCart from "./EmptyCart";
import { useEffect, useState } from "react";
import EmptyCartItems from "./EmptyCartItems";
import CartItems from "./CartItems";

const Checkout = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [cartPrice, setCartPrice] = useState(0);
  const restaurantInfo = useSelector((item) => item?.resInfo?.resInfo);
  const filterResInfo = restaurantInfo?.filter((item) => item !== undefined);
  const { name, areaName, cloudinaryImageId } = filterResInfo[0] || [];
  console.log("checkout  price", cartItems);

  useEffect(() => {
    calcItemtotal();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  const calcItemtotal = () => {
    let price = 0;
    cartItems?.map((p) => {
      price += p?.card?.info?.price;
      setCartPrice(price);
      return price;
    });
  };

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      <div className="min-h-full bg-[#e9ecee] flex-grow-1">
        <div className="bg-[#fff]">
          {cartItems.length === 0 && <EmptyCart />}
        </div>
        <div className="min-w-[1200px] max-w-[1200px] relative mx-auto my-0 flex mt-[31px] mb-[150px]">
          <div className="flex-1 mr-[30px] relative">
            <div>
              <div className="relative ml-[25px] bg-white mb-5 px-10 pt-[35px] pb-[39px]">
                <div className="text-[1.3rem] font-semibold text-[#282c3f] mb-8 flex items-center">
                  <div className="mr-[25px]">Account</div>
                </div>
                <div className="mt-[-30px] ">
                  <div className="text-[#7e808c] font-normal text-base">
                    To place your order now, log in to your existing account or
                    sign up.
                  </div>
                  <img
                    className="absolute right-10 top-[35px] border-none h-[140px] w-[147px]"
                    src={LOGIN_CHECKOUT_URL}
                    alt=""
                  />
                  <div className="flex mt-9">
                    <div className="border-[1px] border-[#60b246] text-[#60b246] mx-5 text-center px-[35px] pt-2 pb-[9px] leading-5 cursor-pointer">
                      <div className="text-[13px]">Have an account?</div>
                      <div className="font-semibold text-sm">LOG IN</div>
                    </div>
                    <div className="bg-[#60b246] text-[#fff] text-center px-[35px] pt-2 pb-[9px] leading-5 cursor-pointer">
                      <div className="text-[13px]">New to Swiggy?</div>
                      <div className="font-semibold text-sm">SIGN UP</div>
                    </div>
                  </div>
                  <div className="border-[#bebfc5] absolute border-l-[1px] border-l-[#282c3f] top-[35px] left-[-10px] bottom-[-57px]" />
                </div>
                <div className="absolute w-10 h-10 bg-[#282c3f] top-[34px] left-[-30px] shadow-md">
                  <span className="absolute top-[50%] left-[50%] bg-[#fff] text-xl transform -translate-x-1/2 -translate-y-1/2">
                    <img
                      className="overlay-blend"
                      src={account}
                      alt="account_img"
                    />
                  </span>
                </div>
              </div>
              <div className="relative ml-[25px] bg-white mb-5 px-10 pt-[35px] pb-[39px]">
                <div className="text-[#93959f] leading-[-0.3px] mb-[-3px] ml-[-2px] text-[1.3rem] font-semibold flex items-center">
                  <div className="mr-[25px]">Delivery address</div>
                </div>
                <div className="border-[#bebfc5] absolute border-l-[1px] border-l-[#282c3f] top-[35px] left-[-10px] bottom-[-57px]" />
                <div className="bg-white w-[40px] h-[40px] shadow-md absolute top-[34px] left-[-30px]">
                  <span className="absolute top-[50%] left-[50%] bg-[#fff] text-xl transform -translate-x-1/2 -translate-y-1/2">
                    <img
                      className="overlay-blend w-[19px] h-[20px]"
                      src={checkout_location}
                      alt="location_img"
                    />
                  </span>
                </div>
              </div>
              <div>
                <div className="mb-0 relative ml-[25px] bg-white px-10 pt-[35px] pb-[39px]">
                  <div className="text-[#93959f] leading-[-0.3px] mb-[-3px] ml-[-2px] text-[1.3rem] font-semibold flex items-center">
                    <div className="mr-[25px]">Payment</div>
                  </div>
                  <div className="bg-white w-[40px] h-[40px] shadow-md absolute top-[34px] left-[-30px]">
                    <span className="absolute top-[50%] left-[50%] bg-[#fff] text-xl transform -translate-x-1/2 -translate-y-1/2">
                      <img
                        className="overlay-blend w-[19px] h-[20px]"
                        src={payment}
                        alt="payment_img"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[366px]">
            {cartItems.length === 0 && <EmptyCartItems />}
            {cartItems.length > 0 && (
              <div className="relative flex flex-col overflow-hidden h-full">
                <button className="cursor-pointer px-[30px] py-5 flex bg-white text-left outline-none">
                  <span className="w-[50px] h-[50px] relative">
                    <img
                      className="w-[50px] h-[50px]"
                      src={CDN_URL + cloudinaryImageId}
                      alt="item_img"
                    />
                  </span>
                  <span className="ml-[14px] flex-1 relative overflow-hidden min-h-[50px]">
                    <div className="text-[17px] text-[#282c3f] font-medium text-ellipsis overflow-hidden whitespace-nowrap">
                      {name}
                    </div>
                    <div className="text-[13px] text-[#686b78]">{areaName}</div>
                  </span>
                </button>
                <div className="max-h-[calc(100vh-270px)] flex">
                  <div className="flex relative overflow-y-hidden">
                    <div className="flex flex-grow-1 relative flex-col overflow-y-auto overflow-x-hidden px-[30px] w-[366px] bg-white pb-0 outline-none">
                      <div className=" font-default">
                        {/* Items */}
                          <CartItems cartItemsList={cartItems}/>
                        {/* Items End */}
                        {/*  */}
                        <div className="h-[51px] relative text-[#686b78] text-[13px]">
                          <textarea className="border-0 outline-0 w-full h-full py-4 pl-10 text-[#3d4152] font-normal text-sm bg-[#f9f9f9] overflow-auto m-0" />
                          <div className="absolute text-[13px] top-[17px] left-[40px] w-full text-[#93959f]">
                            Any suggestions? We will pass it on...
                          </div>
                          <img
                            className="absolute top-5 left-5 w-[15px] h-[10px] text-[#282c3f]"
                            src=""
                            alt=""
                          />
                        </div>
                        <div className="items-center mt-[15px] bg-white py-[5px] px-[15px] flex relative overflow-hidden border-[1px] border-[#a9abb2] cursor-pointer">
                          <div className="flex items-start ">
                            <div className="mt-1 mr-[15px]">
                              <label className="relative cursor-pointer inline-block w-4 h-4 border-[1px] border-[#7e808c] bg-transparent rounded-sm transition duration-300 hover:border-blue-500">
                                <input className="absolute left-[-9999px] opacity-0 box-border" />
                                <img
                                  src=""
                                  className="overflow-hidden absolute left-[-3px] top-[-3px] opacity-1 fill-[#60b246]"
                                  alt=""
                                />
                              </label>
                            </div>
                            <div>
                              <div className="font-medium text-[#3e4152]">
                                Opt in for No-contact Delivery
                              </div>
                              <div className="opacity-[0.6] text-[#282c3f]">
                                Unwell, or avoiding contact? Please select
                                no-contact delivery. Partner will safely place
                                the order outside your door (not for COD)
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-[17px] pb-[21px] border-b-[2px] border-b-[#282c3f]">
                          <div className="font-medium text-[13px] mb-[10px] text-[#282c3f]">
                            Bill Details
                          </div>
                          <div className="text-[13px] text-[#686b78] flex items-center">
                            <div className="flex-1">
                              <span>Item Total</span>
                            </div>
                            <div className="text-right self-start">
                              <span className="text-right text-[13px] text-[#686b78]">
                                <span className="text-right text-[13px] text-[#686b78]">
                                  ₹{cartPrice / 100}
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="mt-[10px] text-[13px] text-[#686b78] flex items-center">
                            <div className="flex-1">
                              <div className="flex">
                                Delivery Fee | 1.4 kms
                                <div className="text-[#686b78] font-normal ml-[7px] text-xs relative top-[1px] inline cursor-pointer">
                                  <span>
                                    <img
                                      className="w-4 h-4"
                                      src={info}
                                      alt="info_img"
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right self-start">
                              <span className="text-right">₹31</span>
                            </div>
                          </div>
                          <div className="border-b-[1px] border-b-[#e9e9e9] mt-[17px] mb-[15px] mx-0 block"></div>
                          <div className="font-[13px] text-[#686b78] flex items-center">
                            <div className="flex-1">
                              <div className="flex">
                                Platform fee
                                <div className="text-[#686b78] font-normal ml-[7px] text-xs relative top-[1px] inline cursor-pointer">
                                  <span>
                                    <img
                                      className="w-4 h-4"
                                      src={info}
                                      alt="info_img"
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right self-start">
                              <span className="text-right">₹2</span>
                            </div>
                          </div>
                          <div className="mt-[10px] text-[13px] text-[#686b78] flex items-center">
                            <div className="flex-1">
                              <div className="flex">
                                GST and Restaurant Charges
                                <div className="text-[#686b78] font-normal ml-[7px] text-xs relative top-[1px] inline cursor-pointer">
                                  <span>
                                    <img
                                      className="w-4 h-4"
                                      src={info}
                                      alt="info_img"
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right self-start">
                              <span className="text-right">₹19.50</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-white h-[60px] min-h-[60px] flex items-center font-semibold text-[#282c3f] px-[30px] z-[1]">
                  <div className="uppercase">To pay</div>
                  <div className="flex-1 text-right">
                    ₹{cartPrice / 100 + 31 + 2 + 19.5}
                  </div>
                </div>

                <OrderCancellationNotice />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
