import { useState, useRef } from "react";

export default function Form({ onNewPost }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [promote, setPromote] = useState(true);
  const [status, setStatus] = useState("");
  const [picture, setPicture] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const inputFile = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Stops page from auto-refreshing on form submission

    // Hide success message
    setShowSuccess(false);

    const validate = [];

    if (title.length < 5) {
      validate.push("The title must be at least 5 characters long.");
    }
    if (description === "") {
      validate.push("The description is required.");
    }
    if (category === "") {
      validate.push("Please select a category.");
    }
    if (status === "") {
      validate.push("Please select a status.");
    }

    if (picture === "") {
      validate.push("Please select a picture.");
    }

    setErrorMessages(validate);

    if (validate.length === 0) {
      // Valid data
      onNewPost(title, description, category, promote, status, picture);

      // Display success message
      setShowSuccess(true);

      // Clean form
      setTitle("");
      setDescription("");
      setCategory("");
      setStatus("");
      setPromote(true);
      setPicture("");
      inputFile.current.value = "";
    }
  };

  const categories = [
    { id: "edu", text: "Education" },
    { id: "ent", text: "Entertainment" },
    { id: "nws", text: "News" },
    { id: "gam", text: "Games" },
    { id: "etc", text: "Other" },
  ];

  const statuses = [
    { id: "d", text: "Draft" },
    { id: "p", text: "Published" },
    { id: "a", text: "Archived" },
  ];

  const handlePictureSelection = (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      const result = event.target.result;
      setPicture(result);
    };
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <hr />

      {/* Conditionally display success message */}
      {showSuccess && (
        <>
          <p>
            <strong>Form successfully submitted!</strong>
          </p>
          <hr />
        </>
      )}

      {/* Conditionally display error message */}
      {errorMessages.length > 0 && (
        <div>
          Invalid data:
          <ul>
            {errorMessages.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Title Field */}
      <div>
        <label>
          Title:
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            // Cannot do onChange={setTitle(e.target.value)} since including
            // parentheses will cause the function to be executed automatically
            value={title}
            maxLength={50}
            placeholder="Enter title here"
            required={true}
          />
        </label>
      </div>

      {/* Post Body Field */}
      <div>
        <label>
          Post:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter post here"
            maxLength={500}
          />
        </label>
      </div>

      {/* Category Field */}
      <div>
        <label>
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">- Select -</option>
            {categories.map((item) => (
              <option value={item.id} key={item.id}>
                {item.text}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Promote Field */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={promote}
            onChange={(e) => setPromote(e.target.checked)}
          />
          Promote
        </label>
      </div>

      {/* Status Field (Draft, Publish, Archive) */}
      <div>
        Status:
        {statuses.map((item) => (
          <label key={item.id}>
            <input
              type="radio"
              value={item.id}
              key={item.id}
              onChange={(e) => setStatus(e.target.value)}
              checked={status === item.id}
            />
            {item.text}
          </label>
        ))}
      </div>

      {/* Picture Field */}
      <fieldset>
        <legend>Picture:</legend>
        <label>
          Select an image:
          <input
            type="file"
            accept="image/*"
            onChange={handlePictureSelection}
            ref={inputFile}
          />
          {picture && <img src={picture} alt="Preview" width={100} />}
        </label>
      </fieldset>

      <button>Post</button>
    </form>
  );
}
