const { product, user, category, productCategory } = require("../../models");

exports.getProducts = async (req, res) => {
  try {
    let listProduct = await product.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "idUser"],
      },
    });

    listProduct = JSON.parse(JSON.stringify(listProduct));

    listProduct = listProduct.map((item) => {
      return { ...item, image: process.env.PATH_FILE + item.image };
    });

    res.send({
      status: "success",
      data: { listProduct },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    let getProduct = await product.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "idUser"],
      },
    });

    getProduct = JSON.parse(JSON.stringify(getProduct));

    getProduct = {
      ...getProduct,
      image: process.env.PATH_FILE + getProduct.image,
    };

    res.send({
      status: "success",
      data: { getProduct },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      desc: req.body.desc,
      price: req.body.price,
      image: req.file.filename,
      qty: req.body.qty,
      idUser: req.user.id,
    };

    let newProduct = await product.create(data);

    let productData = await product.findOne({
      where: {
        id: newProduct.id,
      },
      include: [
        {
          model: user,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "idUser"],
      },
    });

    productData = JSON.parse(JSON.stringify(productData));

    res.send({
      status: "success",
      data: {
        ...productData,
        image: process.env.PATH_FILE + productData.image,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const data = {
      name: req?.body?.name,
      desc: req?.body.desc,
      price: req?.body?.price,
      image: req?.file?.filename,
      qty: req?.body?.qty,
      idUser: req?.user?.id,
    };

    await product.update(data, {
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      data: {
        id,
        data,
        image: req?.file?.filename,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await product.destroy({
      where: {
        id,
      },
    });

    await productCategory.destroy({
      where: {
        idProduct: id,
      },
    });

    res.send({
      status: "success",
      message: `Delete product id: ${id} finished`,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
