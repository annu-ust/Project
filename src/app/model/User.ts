export class User{
    id:number|undefined;
    name:string|undefined;
    contactNumber!: number;
    email!: string;
    password:string | undefined;
    status!: string;
    role!: string;
  static id: number;
}