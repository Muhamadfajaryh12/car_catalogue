import { FieldError, UseFormRegister } from "react-hook-form";

export interface InputSpec {
  type: "text" | "hidden" | "date" | "number" | "password" | "year";
  title: string;
  placeholder: string;
  isRequired: boolean;
  register: UseFormRegister<any>;
  name: string;
  error: FieldError;
}
