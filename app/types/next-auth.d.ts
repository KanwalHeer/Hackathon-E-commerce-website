
import {DefaultUser} from 'next-auth'
declare module 'next-auth' {
   interface Session {
    usser:DefaultUser & {
    id:string}
   }
}


declare module "next-auth" {
   interface Session {
     user: {
       email: string;
       name?: string;
       role?: string;
       phoneNumber:string
       address:string
       image?: string;
     };
   }
 
   interface User {
     email: string;
     name?: string;
     role?: string;
     phoneNumber:number
     address:string
     image?: string;
   };
  
 
 }
 
 
 // Typically, NextAuth's User type may look something like this:
 
   
   