import Career from "../model/careerModel.js";

export const add = async (data) => {
    const newCareer = await Career.create(data);
    return newCareer;
}

export const getAll = async () => {
    const careers = await Career.find();
    return careers;
}

export const getById = async (id) => {
    const career = await Career.findById(id);
    return career;
}

export const update = async (id, data) => {
    const updatedCareer = await Career.findByIdAndUpdate(id, data, {new: true});
    return updatedCareer;
}

export const deleteById = async (id) => {
    const deletedCareer = await Career.findByIdAndDelete(id);
    return deletedCareer;
}
