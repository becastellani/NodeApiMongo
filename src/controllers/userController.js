import httpStatus from 'http-status';
import User from "../models/userModel.js";


export const listUsers = async (req, res, next) => {
    try {
        const users = await User.find({});

        res
            .status(httpStatus.OK)
            .send("List of users: " + users)
    
    } catch (error) {
        res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .json({
                code: error.code,
                message: error.message,
            });    
    }
    
}

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(httpStatus.CREATED).json(newUser);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).json({
            code: error.code,
            message: error.message,
        });
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(httpStatus.NOT_FOUND).json({ message: "User not found" });
        }
        res.status(httpStatus.OK).json(updatedUser);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
    }
};


export const replaceUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;
        const replacedUser = await User.findOneAndReplace(
            { _id: id },
            { name, email, password },
            { new: true }
        );
        if (!replacedUser) {
            return res.status(httpStatus.NOT_FOUND).json({ message: "User not found" });
        }
        res.status(httpStatus.OK).json(replacedUser);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(httpStatus.NOT_FOUND).json({ message: "User not found" });
        }
        res.status(httpStatus.NO_CONTENT).send();
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
};