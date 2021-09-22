// ============================== Array and Object Destructuring in JavaScript ======================================
// Array Destructing in JavaScript
// -------------------------------

// const myProfile = ["Shubham Singh", 25, "Dehradun", "B.Sc. I.T", "75 K.G"];

// Without using an Array Destructuring
// console.log(myProfile[0]);
// console.log(myProfile[1]);
// console.log(myProfile[2]);
// console.log(myProfile[3]);
// console.log(myProfile[4]);

// Output:

// Shubham Singh
// 25
// Dehradun
// B.Sc. I.T
// 75 K.G

// --------------------------------------
// With using an Array Destructuring

// const [name, age, city, education, weight] = myProfile;

// console.log("My Name is: " + name);
// console.log("My Age is: " + age);
// console.log("My City is: " + city);
// console.log("My Highest Education is: " + education);
// console.log("My Weight is: " + weight);

// Output:

// My Name is: Shubham Singh
// My Age is: 25
// My City is: Dehradun
// My Highest Education is: B.Sc. I.T
// My Weight is: 75 K.G

// ==========================================================================================

// Object Destructing in JavaScript
// -------------------------------

// const myDetails = {
//   name: "Shubham Singh",
//   fatherName: "Mr. Lalit Singh",
//   motherName: "Mrs. Rekha Singh",
//   dateOfBirth: "13th October 1996",
//   employerName: "Illuminz",
// };

// Without using an Object Destructuring

// 1st Way:
// console.log(
//   myDetails.name,
//   myDetails.fatherName,
//   myDetails.motherName,
//   myDetails.dateOfBirth,
//   myDetails.employerName
// );

// Output:
// Shubham Singh Mr. Lalit Singh Mrs. Rekha Singh 13th October 1996 Illuminz

// 2nd Way:
// console.log(
//   myDetails["name"],
//   myDetails["fatherName"],
//   myDetails["motherName"],
//   myDetails["dateOfBirth"],
//   myDetails["employerName"]
// );

// Output:
// Shubham Singh Mr. Lalit Singh Mrs. Rekha Singh 13th October 1996 Illuminz

// --------------------------------------------
// With using an Object Destructuring

// const { myName, fatherName, motherName, dateOfBirth, employerName } = myDetails;

// console.log(`My Name is ${myName}. My father's name is ${fatherName}. My Mother's name is ${motherName}
// . My Date of Birth is ${dateOfBirth} and My Current Company Name is ${employerName}.`);

// Output:
// =======
// My Name is Shubham Singh. My father's name is Mr. Lalit Singh. My Mother's name is Mrs. Rekha Singh
// . My Date of Birth is 13th October 1996 and My Current Company Name is Illuminz.

// ============================================================================================================
// ============================================================================================================

// useState() Hook  -- Code Start
// useState is a Hook that allows you to have state variables in functional components.
// You pass the initial state to this function and it returns a variable with the current
// state value (not necessarily the initial state) and another function to update this value.
// useState() work asynchronously.
// =============================================================================================

import { useState } from "react"; // Required Dependency for useState() Hook

const UseStateHook = () => {
  // ===========================================================================
  // 1st Example of useState() hook -- code start.

  // Without using useState() hook -- The Problem is Data (myAge) is not updated in UI (DOM) on click of button.
  // let myAge = 25;
  // const incrementAge = () => {
  //   console.log("My Age is : ", myAge);
  //   myAge = myAge + 1;
  //   console.log("My Updated Age is : ", myAge);
  // };

  // ===========================================================================
  // With using useState() hook - Now the problem is resolved.

  // Syntax of useState() hook. Below, 25 is the default value. You can use
  // null, "", {}, [] instead of 25.

  const [myAge, setAge] = useState(25);

  // This function is used to update state with the help of setState() function.
  const incrementAge = () => {
    console.log("My Age is : ", myAge);
    setAge(myAge + 1);
    console.log("My Updated Age is : ", myAge);
  };
  // 1st Example of useState() hook -- code end.
  // *****************************************************************************

  // 2nd Example of useState() hook -- code start.
  const [users, setUsers] = useState([
    {
      name: "Shubham Singh",
      age: 25,
      country: "India",
      bloodGroup: "B+ve",
      identificationMarksAvailable: true,
      identification: "Stitches in lip and tongue",
    },
  ]);

  const [showUserForm, setUserForm] = useState(false);

  const [username, setUserName] = useState("");
  const [age, setUserAge] = useState("");
  const [country, setCountry] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [isIdentificationMarksAvailable, setIsIdentificationMarksAvailable] =
    useState(false);
  const [identificationDescription, setIdentificationDescription] =
    useState("");

  const addNewUser = () => {
    if (
      !username ||
      !age ||
      !country ||
      !bloodGroup ||
      !isIdentificationMarksAvailable ||
      !identificationDescription
    ) {
      alert("Warning ! All the form fields are required.");
      return;
    } else {
      console.log(
        username,
        age,
        country,
        bloodGroup,
        isIdentificationMarksAvailable,
        identificationDescription
      );
      let newUser = {
        name: username,
        age: age,
        country: country,
        bloodGroup: bloodGroup,
        identificationMarksAvailable: isIdentificationMarksAvailable,
        identification: identificationDescription,
      };
      setUsers([...users, newUser]);
      console.log(users);
      setUserName("");
      setUserAge("");
      setCountry("");
      setBloodGroup("");
      setIsIdentificationMarksAvailable(false);
      setIdentificationDescription("");
    }
  };
  const showUserRegistrationForm = () => {
    console.log(showUserForm);
    setUserForm(true);
    console.log(showUserForm);
  };
  // 2nd Example of useState() hook -- code end.

  // ===========================================================================

  return (
    <>
      <h3>useState() Hook in React</h3>
      {/* ----------------------------------------------------------------------------------- */}
      {/* Without using an useState() hook  */}
      {/* My Age is: <mark>{myAge}</mark>&nbsp;&nbsp;&nbsp;
      <button onClick={incrementAge}>Increment Age</button> */}
      {/* With using an useState() hook  */}
      My Age is: <mark>{myAge}</mark>&nbsp;&nbsp;&nbsp;
      <button onClick={incrementAge}>Increment Age</button>
      <br />
      <br />
      {/* ----------------------------------------------------------------------------------- */}
      <h1>User's List</h1>
      <div>
        <table
          style={{
            width: "75%",
            margin: "0 auto",
            borderCollapse: "collapse",
            fontSize: "18px",
          }}
        >
          <thead>
            <tr style={{ border: "1px solid black", background: "yellow" }}>
              <th>S.No.</th>
              <th style={{ border: "1px solid black" }}>Name</th>
              <th style={{ border: "1px solid black" }}>Age</th>
              <th style={{ border: "1px solid black" }}>Country</th>
              <th style={{ border: "1px solid black" }}>Blood Group</th>
              <th style={{ border: "1px solid black" }}>
                Is Identification Mark available?
              </th>
              <th style={{ border: "1px solid black" }}>
                Identification Mark description
              </th>
            </tr>
          </thead>
          {users.map((user, index) => {
            return (
              <tbody key={index}>
                <tr style={{ border: "1px solid black" }}>
                  <td>{index + 1}</td>
                  <td style={{ border: "1px solid black" }}>{user.name}</td>
                  <td style={{ border: "1px solid black" }}>{user.age}</td>
                  <td style={{ border: "1px solid black" }}>{user.country}</td>
                  <td style={{ border: "1px solid black" }}>
                    {user.bloodGroup}
                  </td>
                  <td style={{ border: "1px solid black" }}>
                    {user.identificationMarksAvailable === "true"
                      ? "Yes"
                      : "No"}
                  </td>
                  <td style={{ border: "1px solid black" }}>
                    {user.identification ? user.identification : "N.A"}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <br />
      <button onClick={showUserRegistrationForm}>
        Do you want to add a new user?
      </button>
      <br />
      <br />
      {showUserForm ? (
        <div
          id="newUserForm"
          style={{
            border: "1px solid black",
            width: "60%",
            padding: "10px",
            margin: "0 auto",
            background: "lightblue",
          }}
        >
          <h2>New User Registration</h2>
          <form name="userForm">
            <label htmlFor="username">Name: </label>
            <input
              type="text"
              value={username}
              id="username"
              autoFocus
              placeholder="Please enter the username"
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
            <br />
            <br />
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              value={age}
              id="age"
              placeholder="Please enter the age"
              onChange={(event) => {
                setUserAge(event.target.value);
              }}
            />
            <br />
            <br />
            <label htmlFor="country">Country: </label>
            <input
              type="text"
              value={country}
              id="country"
              placeholder="Please enter the country name"
              onChange={(event) => {
                setCountry(event.target.value);
              }}
            />
            <br />
            <br />
            <label htmlFor="bloodGroup">Blood Group: </label>
            <input
              type="text"
              value={bloodGroup}
              id="bloodGroup"
              placeholder="Please enter your blood group"
              onChange={(event) => {
                setBloodGroup(event.target.value);
              }}
            />
            <br />
            <br />
            <label htmlFor="isIdentificationAvailable">
              Is Identification Mark Available?:{" "}
            </label>
            <input
              type="radio"
              name="identification"
              value="true"
              id="isIdentificationAvailable"
              onChange={(event) => {
                setIsIdentificationMarksAvailable(event.target.value);
              }}
            />{" "}
            Yes
            <input
              type="radio"
              name="identification"
              value="false"
              id="isIdentificationAvailable"
              onChange={(event) => {
                setIsIdentificationMarksAvailable(event.target.value);
              }}
            />{" "}
            No
            <br />
            <br />
            {isIdentificationMarksAvailable === "true" ? (
              <>
                <label htmlFor="identificationMarkDescription">
                  Identification Mark Description:{" "}
                </label>
                <textarea
                  id="identificationMarkDescription"
                  cols="30"
                  rows="5"
                  value={identificationDescription}
                  onChange={(event) => {
                    setIdentificationDescription(event.target.value);
                  }}
                ></textarea>
                <br />
                <br />
              </>
            ) : null}
          </form>
          <button onClick={() => addNewUser()}>Add New User</button>
        </div>
      ) : null}
      {/* ----------------------------------------------------------------------------------- */}
    </>
  );
};
export default UseStateHook;

// useState() Hook  -- Code End
// ================================================================================================================
