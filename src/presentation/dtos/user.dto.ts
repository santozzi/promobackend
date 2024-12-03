export class Picture{
    constructor(
        public large:string,
    ){ }
}
export class Id{
    constructor(
        public value:string
    ){ }
}
export class Login{
    constructor(
        public username:string,
        public password:string,
        public role:string,
    ){}
}
export class Location{
    constructor(
        public country:string,
        public city:string,
        public state:string,
        
    ){ }
}
export class Name{
    constructor(
       
        public first:string,
        public last:string,
       
    ){}
}
export class UserDto {
    constructor(
         public gender:string,
         public name:Name,
         public location:Location,
         public email:string,
         public login:Login,
         public phone:string,
         public id:Id,
         public picture:Picture,
         

    ){}
}