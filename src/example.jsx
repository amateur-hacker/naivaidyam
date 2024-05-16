const handleSignup = async (formData) => {
  try {
    const response = await fetch(
      "https://naivaidyam-api.vercel.app/v1/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );
    // const response = await toast.promise(callApi, {
    //   pending: "Signing up",
    //   success: "Successfully signup",
    //   error: {
    //     render({ data }) {
    //       const jsonData = JSON.parse(data);
    //       console.log("Data", jsonData);
    //       return `Hello ${jsonData}`;
    //     },
    //     icon: "🟢",
    //   },
    // });
    const responseData = await response.json();

    if (response.ok && responseData.success) {
      onClose();
      Swal.fire({
        icon: "success",
        title: responseData.message,
        text: "Enjoy our service as much as can.",
        confirmButtonColor: "#000000",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed to Signup up",
        text: responseData.message,
        confirmButtonColor: "#000000",
      });
      console.error("Signup failed:", responseData);
    }
  } catch (error) {
    console.error("Signup failed:", error.message);
  }
};
