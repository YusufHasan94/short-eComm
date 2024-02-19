import { Dialog, Transition } from "@headlessui/react";
import { Rating } from "@smastrom/react-rating";
import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ProductDetails = ({ isOpen, closeModal, product }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div>
                    <div>
                      <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        pagination={{
                          clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                      >
                        {product.images.map((image, index) => (
                          <SwiperSlide key={index}>
                            <img src={image} className="w-full" alt="" />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                    <div className="text-lg font-semibold my-5">
                      <h1 className="text-2xl font-semibold">
                        {product?.title}
                      </h1>
                      <p>{product?.description}</p>
                      <h1>
                        Brand:
                        <span className="font-normal ml-1">
                          {product?.brand}
                        </span>
                      </h1>
                      <h1>
                        Category:
                        <span className="font-normal ml-1">
                          {product?.category}
                        </span>
                      </h1>
                      <h1>
                        Price
                        <span className="font-normal ml-1">
                          ${product?.price}
                        </span>
                      </h1>
                      <h1>
                        Discount:
                        <span className="font-normal ml-1">
                          {product?.discountPercentage}%
                        </span>
                      </h1>
                      <h1>
                        Stock:
                        <span className="font-normal ml-1">
                          {product?.stock}
                        </span>
                      </h1>
                      <div className="w-full flex justify-center mt-4">
                        <div>
                          <Rating
                            className="size-7"
                            value={product?.rating}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ProductDetails;
