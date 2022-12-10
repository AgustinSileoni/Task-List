//Manejo el mock que imita la base de datos
export interface Task{
    id:number;//Cuando la creamos podria no venir
    text:string;
    day:string;
    reminder:boolean;
}