import Car from "../models/Car.js";
import User from "../models/User.js";

//test create Car
const createCar = async (req, res, next) => {
  const userId = req.params.userId;
  const newCar = new Car({ ...req.body, owner: userId });
  try {
    const savedCar = await newCar.save();
    try {
      await User.findByIdAndUpdate(userId, {
        $push: { cars: [savedCar._id] },
      });
    } catch (error) {
      throw Error(error);
    }
    return savedCar;
  } catch (error) {
    throw Error(error);
  }
};

const updateCar = async (req) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return updatedCar;
  } catch (error) {
    throw Error(error);
  }
};
const deleteCar = async (req) => {
  const userId = req.params.userId;
  try {
    await Car.findByIdAndDelete(req.params.id);
    try {
      await User.findByIdAndUpdate(userId, {
        $pull: { cars: req.params.id },
      });
    } catch (error) {
      throw Error(error);
    }
    return "The Car has been removed";
  } catch (error) {
    throw Error(error);
  }
};
const getCar = async (req) => {
  try {
    const car = await Car.findById(req.params.id).populate("services");
    return car;
  } catch (error) {
    throw Error(error);
  }
};
const getCars = async () => {
  try {
    const cars = await Car.find();
    return cars;
  } catch (error) {
    throw Error(error);
  }
};
const getCarsByType = async (req) => {
  const type = req.query.populate;
  try {
    const cars = await Car.find().populate(type);
    return cars;
  } catch (error) {
    throw Error(error);
  }
};
const getCarsWithService = async () => {
  try {
    const cars = await Car.find().populate("services");
    return cars;
  } catch (error) {
    throw Error(error);
  }
};
const getCarsByOwner = async (req) => {
  try {
    const cars = await Car.find({ owner: req.params.user }).populate(
      "services"
    );
    return cars;
  } catch (error) {
    throw Error(error);
  }
};

const carService = {
  createCar,
  updateCar,
  deleteCar,
  getCar,
  getCars,
  getCarsByType,
  getCarsWithService,
  getCarsByOwner,
};

export default carService;
