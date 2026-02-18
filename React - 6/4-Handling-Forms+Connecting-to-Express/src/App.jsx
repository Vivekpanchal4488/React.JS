import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors,isSubmitting },
  } = useForm();

  const delay = (d)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
          resolve()
      }, d * 1000);
    })
  }
  const onSubmit = async(data) => {
    let r =await fetch("http://localhost:3000/", {method: "POST", body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data, res);
    
    // await delay(2) //simulate network delay
    // console.log(data);
  //   if(data.username !== "Vivek"){
  //     setError("myform", {message: "Form is not in Good Order"})
  // }
  //   if(data.username === "harry"){
  //     setError("blocked", {message: "User Blocked"})
  //   }
};

  return (
    <>
    {isSubmitting && <div > Loading...</div>}
      <div className="container ">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("username", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 3, message: "Min length is 3" },
              maxLength: { value: 8, message: "Max length is 8" },
            })}
            type="text"
          />
          {errors.username && <div>{errors.username.message}</div>}
          <br />
          <input
            {...register("password", { required: true , minLength: { value: 7, message: "Min length of password is 7" }})}
            type="password"
          />
          {errors.password && <div>{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myform && <div>{errors.myform.message}</div>}
          {errors.blocked && <div>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  );
};

export default App;
