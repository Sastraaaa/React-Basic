import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const userSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  dob: z.coerce.date(),
});

type UserRegisterSchema = z.infer<typeof userSchema>;

const RHFPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserRegisterSchema>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = () => {
    alert(`Username registered  `);
    reset(); // Reset the form after submission
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <h1>React Hook Form</h1>
      <div>
        <label>Username</label>
        <input {...register("username")} />
        {errors.username && <p>{errors.username?.message}</p>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register("password")} />
        {errors.password && <p>{errors.password?.message}</p>}
      </div>
      <div>
        <label>Date of Birth</label>
        <input type="date" {...register("dob")} />
        {errors.dob && <p>{errors.dob?.message}</p>}
      </div>
      <button style={{ maxWidth: "100px" }}>Submit</button>
    </form>
  );
};

export default RHFPage;
