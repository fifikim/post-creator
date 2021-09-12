import React, { useState } from "react";

function PostCreate({addPost}) {
  const initialFormState = {
    type: "Text",
    content: ""
  };
  const [formData, setFormData] = useState({...initialFormState});

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost(formData.type, formData.content);
    setFormData({...initialFormState});
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select 
            id="type" 
            name="type" 
            required={true} 
            onChange={handleChange}
            value={formData.type}
          >
            <option>Text</option>
            <option>Image</option>
          </select>
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          {formData.type === "Text" ? (
            <textarea id="content" name="content" required={true} rows={3} onChange={handleChange}/>
          ) : (
            <input id="content" name="content" type="url" required={true} onChange={handleChange}/>
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default PostCreate;
