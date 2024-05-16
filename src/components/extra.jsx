// const handleLogin = async () => {
//   const { value: formValues } = await Swal.fire({
//     title: "Login",
//     html:
//       '<input id="username" class="swal2-input" placeholder="Username">' +
//       '<input id="password" type="password" class="swal2-input" placeholder="Password">',
//     focusConfirm: false,
//     showCancelButton: true, // Add a cancel button
//     confirmButtonText: "Login", // Change confirm button text
//     cancelButtonText: "Cancel", // Change cancel button text
//     preConfirm: () => {
//       return [
//         document.getElementById("username").value,
//         document.getElementById("password").value,
//       ];
//     },
//   });
//
//   if (formValues) {
//     const [username, password] = formValues;
//     // Call your login API endpoint here
//     const response = await fetch("http://localhost:3000/v1/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     });
//     const data = await response.json();
//     if (response.ok) {
//       // Login successful
//       Swal.fire(`Logged in as ${username}`);
//     } else {
//       // Login failed
//       Swal.fire({
//         icon: "error",
//         title: "Login Failed",
//         text: data.message || "Something went wrong",
//       });
//     }
//   }
// };
//
// const handleRegister = async () => {
//   const { value: formValues, dismiss } = await Swal.fire({
//     title: "Register",
//     html: `
//       <input id="fullname" class="swal2-input" placeholder="Full Name">
//       <input id="username" class="swal2-input" placeholder="Username">
//       <input id="password" type="password" class="swal2-input" placeholder="Password">
//     `,
//     focusConfirm: false,
//     showCancelButton: true,
//     confirmButtonText: "Register",
//     cancelButtonText: "Login",
//     preConfirm: () => {
//       return [
//         document.getElementById("fullname").value,
//         document.getElementById("username").value,
//         document.getElementById("password").value,
//       ];
//     },
//   });
//
//   if (formValues) {
//     const [fullname, username, password] = formValues;
//     // Call your registration API endpoint here
//     const response = await fetch("http://localhost:3000/v1/auth/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ fullname, username, password }),
//     });
//     const data = await response.json();
//     if (response.ok) {
//       // Registration successful
//       Swal.fire(`Registered as ${username}`);
//     } else {
//       // Registration failed
//       Swal.fire({
//         icon: "error",
//         title: "Registration Failed",
//         text: data.message || "Something went wrong",
//       });
//     }
//   } else if (dismiss === Swal.DismissReason.cancel) {
//     // User clicked on "Already have an account?" text, navigate to login form
//     handleLogin();
//   }
// };
