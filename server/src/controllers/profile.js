const { profile, user } = require("../../models");

exports.getProfile = async (req, res) => {
  try {
    const idUser = req.user.id;

    let data = await profile.findOne({
      where: {
        idUser,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "idUser"],
      },
    });

    data = JSON.parse(JSON.stringify(data));

    data = {
      ...data,
      image: process.env.PATH_FILE + data.image,
    };

    res.send({
      status: "success...",
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const data = {
      phone: req.body.phone,
      gender: req.body.gender,
      address: req.body.address,
      image: req.file.filename,
      idUser: req.user.id,
    };

    let updateProfile = await profile.update(data);

    let profileData = await profile.findOne({
      where: {
        id: updateProfile.id,
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

    profileData = JSON.parse(JSON.stringify(profileData));

    res.send({
      status: "success",
      data: {
        ...profileData,
        image: process.env.PATH_FILE + profileData.image,
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
