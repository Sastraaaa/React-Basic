import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const registerUserSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  dob: z.coerce.date().optional(),
});

type FormSchema = z.infer<typeof registerUserSchema>;

const FormPage = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(registerUserSchema),
  });

  const handleRegisterUser = (values: FormSchema) => {
    alert("User registered successfully!");
    console.log("Registered User:", values);
  };

  return (
    <div>
      <h1>React Hook Form</h1>
      <form
        action=""
        onSubmit={form.handleSubmit(handleRegisterUser)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label>
          Username: <input type="text" {...form.register("username")} />
        </label>
        <span>{form.formState.errors.username?.message}</span>

        <label>
          Password: <input type="password" {...form.register("password")} />
        </label>
        <span>{form.formState.errors.password?.message}</span>

        <label>
          Date of Birth: <input type="date" {...form.register("dob")} />
        </label>
        <span>{form.formState.errors.dob?.message}</span>

        <button style={{ width: "100px" }}>Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
