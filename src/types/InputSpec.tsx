export interface InputSpec {
  type: "text" | "hidden" | "date" | "number" | "password";
  title: string;
  placeholder: string;
  isRequired: boolean;
}
