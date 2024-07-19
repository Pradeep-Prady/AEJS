import Contact from "./../model/contactModel.js";

export const add = async (data) => {
  const newContact = await Contact.create(data);
  return newContact;
};

export const getAll = async () => {
  const contacts = await Contact.find();
  return contacts;
};

export const getById = async (id) => {
  const contact = await Contact.findById(id);
  return contact;
};

export const update = async (id, data) => {
  const updatedContact = await Contact.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updatedContact;
};

export const deleteById = async (id) => {
  const deletedContact = await Contact.findByIdAndDelete(id);
  return deletedContact;
};
