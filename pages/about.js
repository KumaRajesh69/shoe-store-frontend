import React, { useState } from "react";

function About() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      name: name,
      email: email,
      age: age,
    };

    try {
      const response = await fetch("http://127.0.0.1:1337/api", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer efef55e26d2250225455631f271f4ab76df98d53ba1ced9bffbcf42fe59a0d03db13bca071f25f311cd8f82006ddeb6f8c9f4e4196106af13388d8ed0687cf6d3aeca63b8612543fbbea706fc788b408f16a0e9ef9813530c531f93c5181c0da0e1addb2d9d9362c22b8b9ab3ceaf1843648e29a6d9509f9e5566681c8d41bef",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        console.log("Data submitted successfully!");
        setName("");
        setEmail("");
        setAge("");
      } else {
        console.error("Failed to submit data:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter your Name:</label>
          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="space-x-4">
          <label>Enter Email:</label>
          <input
            type="text"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div className="space-x-4">
          <label>Enter Age:</label>
          <input
            type="number"
            value={age}
            placeholder="Enter your Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-2 p-1 rounded-md"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default About;
