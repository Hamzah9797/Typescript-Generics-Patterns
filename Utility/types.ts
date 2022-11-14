////////////// Partials ////////////////////////

// Partial is a generic type that takes a genric parameter 'T' which is an interface
/*

lets say we have an 
interface A {
    x: number 
    y:number 
}

if we apply partial to it 

partial<A> {
    x?: number
    y?: number
}

we get a new interface which is exactly like interface A but with all the properties as optional

real example below
*/

interface Startship {
  name: string;
  enableHyperJump: boolean;
}

const updateStartShip = (id: number, starship: Startship) => {};

// updateStartShip(1, {
//   name: "explorer",
// });
// above produces an error as a startship requires two properties both a name and a enable hyper jump but we can make these properties optional by using partials

const updateStartShipPartials = (
  id: number,
  starship: Partial<Startship>
) => {};

updateStartShipPartials(1, {
  name: "explorer",
});

//////////////////// Required ///////////////////////

// Required is a generic type that takes a genric parameter 'T' which is an interface
/*

lets say we have an 
interface A {
    x?: number 
    y?:number 
}

if we apply required to it 

Required<A> = {
    x: number
    y: number
}

we get a new interface which is exactly like interface A but with all the properties required
 
*/

/////////////////////// Record //////////////////

/*
used to create object type in typescript

const aRecord:Record<string,number> = {
  apples:10,
  oranges: 20
}

*/

//////////////////////// Pick ////////////////////////

/*
pick type allows us to create a new type from an existing type by only selecting the properties we want in this new type 

interface A{
  x:number
  y:number
  z:number
}

Pick< A , 'x' | 'z' > = {
  x:number
  z:number
}

real example below
*/

interface NewStartship {
  name: string;
  enableHyperJump: boolean;
}

type StartShipNameOnly = Pick<NewStartship, "name">;

///////////////// Omit /////////////////////
/*
opposite of Pick , instead of slecting we omit some properties 

interface A{
  x:number
  y:number
  z:number
}

Omit< A , 'x' | 'z' > = {
  y:number
}

*/

///////////////////// Exclude ////////////////////

/*
we can use exclude to remove a part of the type we dont want to create a new type 

type A = string | string[] | undefined

Exclude<A, undefined> = string | string []

real example below 
*/

//drinks in our restaurant
type AvaliableDrinks = "coffee" | "tea" | "lemonade" | "whiskey";

// john can drink everything
let JohmsDrinks: AvaliableDrinks;
JohmsDrinks = "coffee";

// jane has preferances
type JanesDislikes = "tea" | "whiskey";
let JanesDrinks: Exclude<AvaliableDrinks, JanesDislikes>;
JanesDrinks = "coffee";

/////////////////// Extract //////////////////////

/*
opposite of exclude 

real example below
*/

//drinks in our restaurant
type AvaliableDrinksTwo = "coffee" | "tea" | "lemonade" | "whiskey";

// john can drink everything
let JohmsDrinksTwo: AvaliableDrinks;
JohmsDrinks = "coffee";

// jane has preferances
type JanesLikes = "tea" | "whiskey";
let JanesDrinksTwo: Extract<AvaliableDrinks, JanesDislikes>;
JanesDrinksTwo = "tea";

/////////////////////// NonNullable ////////////////////

/*

remove null and undefined 

type A = string | string [] | null | undefined

NonNullable <A> = string | string[]

real example below
*/

interface StarShipProperties {
  color?: "blue" | "red" | "green";
}

function paintStarship(
  id: number,
  color: NonNullable<StarShipProperties["color"]>
) {}
