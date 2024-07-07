
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Submit = () => {
  const initialFormData = {
    title: '',
    firstName: '',
    lastName: '',
    campaign: '',
    declarationDate: '',
    declarationStartDate: '',
    declarationEndDate: '',
    declarationMethod: 'web',
    confirmationRequired: 'no',
    confirmedOn: '',
    cancelledOn: '',
    uploadDocument: null,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { id, value, files } = e.target;
    setFormData({
      ...formData,
      [id]: files ? files[0] : value,
    });
  };

  const validateForm = () => {
    const requiredFields = ['title', 'firstName', 'lastName'];
    for (let field of requiredFields) {
      if (!formData[field]) {
        Swal.fire({
          icon: 'error',
          title: 'Validation Error',
          text: `Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field.`,
        });
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Form submitted successfully!',
      });
    }
  };

  const handleClear = () => {
    setFormData(initialFormData);
    Swal.fire({
      icon: 'info',
      title: 'Cleared',
      text: 'All fields have been cleared!',
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md">
      <h2 className="text-[25px] font-bold mb-6 justify-center text-center">CTF Submit Section</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-2 font-bold" htmlFor="title">Title*</label>
            <input
              className="w-full h-12 border-[1px] border-gray-800 rounded-md px-4"
              type="text"
              id="title"
              placeholder="Mr/Mrs"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block mb-2 font-bold" htmlFor="firstName">First Name*</label>
            <input
              className="w-full h-12 border-[1px] border-gray-800 rounded-md px-4"
              type="text"
              id="firstName"
              placeholder="Aayush"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block mb-2 font-bold" htmlFor="lastName">Last Name*</label>
            <input
              className="w-full h-12 border-[1px] border-gray-800 rounded-md px-4"
              type="text"
              id="lastName"
              placeholder="Thapa"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block mb-2 font-bold" htmlFor="campaign">Campaign</label>
            <input
              className="w-full h-12 border-[1px] border-gray-800 rounded-md px-4"
              type="text"
              id="campaign"
              placeholder="Clearwater Campaign"
              value={formData.campaign}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block mb-2 font-bold" htmlFor="declarationDate">Declaration Date</label>
            <input
              className="w-full h-12 border-[1px] border-gray-800 rounded-md px-4"
              type="date"
              id="declarationDate"
              value={formData.declarationDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block mb-2 font-bold" htmlFor="declarationStartDate">Declaration Start Date</label>
            <input
              className="w-full h-12 border-[1px] border-gray-800 rounded-md px-4"
              type="date"
              id="declarationStartDate"
              value={formData.declarationStartDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block mb-2 font-bold" htmlFor="declarationEndDate">Declaration End Date</label>
            <input
              className="w-full h-12 border-[1px] border-gray-800 rounded-md px-4"
              type="date"
              id="declarationEndDate"
              value={formData.declarationEndDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block mb-2 font-bold" htmlFor="declarationMethod">Declaration Method</label>
            <select
              className="w-full h-12 border-[1px] border-gray-800 rounded-md px-4"
              id="declarationMethod"
              value={formData.declarationMethod}
              onChange={handleInputChange}
            >
              <option value="web">Web</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-bold" htmlFor="confirmationRequired">Confirmation Required</label>
            <select
              className="w-full h-12 border-[1px] border-gray-800 rounded-md px-4"
              id="confirmationRequired"
              value={formData.confirmationRequired}
              onChange={handleInputChange}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-bold" htmlFor="confirmedOn">Confirmed On</label>
            <input
              className="w-full h-12 border-[1px] border-gray-800 rounded-md px-4"
              type="date"
              id="confirmedOn"
              value={formData.confirmedOn}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block mb-2 font-bold" htmlFor="cancelledOn">Cancelled On</label>
            <input
              className="w-full h-12 border-[1px] border-gray-800 rounded-md px-4"
              type="date"
              id="cancelledOn"
              value={formData.cancelledOn}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold" htmlFor="uploadDocument">Upload a Document</label>
          <div className="border-dashed border-2 border-gray-800 p-4 rounded-md text-center">
            <input
              type="file"
              className="hidden"
              id="uploadDocument"
              onChange={handleInputChange}
            />
            <label
              htmlFor="uploadDocument"
              className="cursor-pointer text-blue-500"
            >
              Drop documents here or click to upload
            </label>
          </div>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            type="submit"
            className="bg-blue-500 text-white px-[20px] py-2 hover:scale-105 rounded-md border-[1px]"
          >
            Save Changes
          </button>
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 justify-end  hover:scale-105 rounded-md border-[1px]"
            onClick={() => Swal.fire('Deleted!', 'Your file has been deleted.', 'success')}
          >
            Delete
          </button>
          <button
            type="button"
            className="bg-yellow-500 text-white px-4 py-2  justify-end rounded-md  hover:scale-105 border-[1px]"
            onClick={() => Swal.fire('Closed!', 'The form has been closed.', 'info')}
          >
            Close
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded-md justify-end hover:scale-105 border-[1px]"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Submit;

