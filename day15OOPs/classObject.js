// class RailwayReservation{
//     constructor(givenName,givenAdrres){  //this is called data member
//         this.yourname = givenName;
//         this.youradress = givenAdrres;
//     }
//     submit(){
//         console.log(this.yourname+ "Your Ticket has Booked")  //these are called function member
//     }
//     cancle(){
//         console.log(this.yourname+ "Your Ticket has cancelled")
//     }
// }
// const poojaform =new RailwayReservation("Pooja", "Delhi")
// const rahulform =new RailwayReservation("Rahul","Noida")

// // console.log(poojaform.submit())
// // console.log(rahulform.submit())
// rahulform.cancle()



class fruites{
    constructor(givenfname,givenfweight,givenfsize,givenfcolor){
    this.fname=givenfname;
    this.fweight=givenfweight;
    this.fsize=givenfsize;
    this.fcolor=givenfcolor;
    }

    forderd(){
        // return "Fruites has ordered"
        return this.fname + "Fruits has ordered"
    }
    fcancelled(){
        return "Fruits has cancelled"
    }
}
// const mfruites = new fruites()
const mfruites = new fruites("Mango")
console.log(mfruites.forderd())