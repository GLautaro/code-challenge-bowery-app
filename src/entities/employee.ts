export interface NewEmployeeForm {
  email: string;
  firstName: string;
  lastName: string;
  type: string | null;
}

export interface IEmployee {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  type: string | null;
}
