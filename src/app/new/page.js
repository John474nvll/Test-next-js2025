"use client";

import { useState } from "react";

function Page() {
  const [tasks, setTasks] = useState();

  const handleChange = (e) => {
    console.log(e.target.value);
  };
    return (
      <form>
        <inpt name="title" placeholder="Title" onChange={handleChange} />
        <textarea
          name="description"
          placeholder="Content"
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
    );
  }

export default Page;

