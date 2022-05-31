import Product2 from "../assets/product2.png";
import Navbar from "../component/navbar/navbar";

import React from "react";

const DetailProduct = () => {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <div className="flex items-start">
        <div className="basis-2/5 ml-32 py-10">
          <img className="w-80 rounded-md" src={Product2} alt="product2" />
        </div>
        <div className="text-white basis-3/5 mr-40">
          <h1 className="text-brand-red text-3xl font-bold">Mouse</h1>
          <p className="mt-2 mb-9">Stock : 600</p>
          <p className="text-justify">
            - Wireless Mouse <br /> - Konektivitas wireless 2.4 GHz <br /> -
            Jarak wirelesshingga 10 m <br /> - Plug and Play <br /> - Baterai
            tahan hingga 12 bulan <br /> <br /> MouseWireless Alytech AL - Y5D,
            hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa.
            Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak
            10m) dan fitur sensor canggih optik pelacakan dengan penerima USB
            yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan
            hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac
            OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.
          </p>
          <p className="text-right text-brand-red text-2xl font-bold">
            Rp.300.000
          </p>
          <button className="bg-brand-red hover:bg-brand-red-hover w-full py-2 rounded-md mt-5">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
