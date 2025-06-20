import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const registerUserSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  dob: z.coerce.date(),
});

type FormSchema = z.infer<typeof registerUserSchema>;

const RHFPage = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(registerUserSchema),
  });

  const handleRegisterUser = (values: FormSchema) => {
    alert("User registered successfully!");
    console.log("Registered User:", values);
    form.reset(); // Reset the form after submission
  };

  return (
    <div>
      <h1>React Hook Form</h1>
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
        onSubmit={form.handleSubmit(handleRegisterUser)}
      >
        <label>
          Username : <input type="text" {...form.register("username")} />
        </label>
        <span style={{ color: "red" }}>
          {form.formState.errors.username?.message}
        </span>

        <label>
          Password : <input type="password" {...form.register("password")} />
        </label>
        <span style={{ color: "red" }}>
          {form.formState.errors.password?.message}
        </span>

        <label>
          Date of Birth : <input type="date" {...form.register("dob")} />
        </label>
        <span style={{ color: "red" }}>
          {form.formState.errors.dob?.message}
        </span>

        <button style={{ width: "100px" }}>Submit</button>
      </form>
    </div>
  );
};

export default RHFPage;
