export interface InputSpec {
  type: "text" | "hidden" | "date" | "number" | "password" | "year";
  title: string;
  placeholder: string;
  isRequired: boolean;
  register: any;
  name: string;
  error: any;
}
