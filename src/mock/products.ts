import flowerBoyImg from "../assets/img/cover-flowerBoy.png";
import theDarkSideImg from "../assets/img/cover-theDarkSide.png";
import happierThanEverImg from "../assets/img/cover-happierThanEver.png";
import tenImg from "../assets/img/cover-ten.png";
import brandNewEyesImg from "../assets/img/cover-brandNewEyes.png";

export interface ITrack {
  id: number;
  name: string;
  duration: string;
}

export interface IProduct {
  id: number;
  album: string;
  artist: string;
  price: number;
  image: string;
  genre: string;
  year: number;
  dimensions: string;
  recordCompany: string;
  numberOfTracks: number;
  tracks: ITrack[];
}

const productsList = [
  {
    id: 1,
    album: "Flower Boy",
    artist: "Tyler The Creator",
    price: 169.9,
    image: flowerBoyImg,
    genre: "Hip Hop",
    year: 2017,
    dimensions: "318 x 318 x 6 mm - 499 g",
    recordCompany: "COLUMBIA",
    numberOfTracks: 14,
    tracks: [
      {
        id: 1,
        name: "Foreword",
        duration: "3:14",
      },
      {
        id: 2,
        name: "Where This Flower Blooms",
        duration: "3:14",
      },
      {
        id: 3,
        name: "Sometimes...",
        duration: "0:36",
      },
      {
        id: 4,
        name: "See You Again",
        duration: "3:00",
      },
      {
        id: 5,
        name: "Who Dat Boy",
        duration: "3:24",
      },
      {
        id: 6,
        name: "Pothole",
        duration: "3:56",
      },
      {
        id: 7,
        name: "Garden Shed",
        duration: "3:43",
      },
      {
        id: 8,
        name: "Boredom",
        duration: "5:20",
      },
      {
        id: 9,
        name: "I Ain't Got Time!",
        duration: "3:26",
      },
      {
        id: 10,
        name: "911 / Mr. Lonely",
        duration: "4:15",
      },
      {
        id: 11,
        name: "Droppin' Seeds",
        duration: "1:00",
      },
      {
        id: 12,
        name: "November",
        duration: "3:45",
      },
      {
        id: 13,
        name: "Glitter",
        duration: "3:44",
      },
      {
        id: 14,
        name: "Enjoy Right Now, Today",
        duration: "3:55",
      },
    ],
  },
  {
    id: 2,
    album: "The Dark Side Of The Moon",
    artist: "Pink Floyd",
    price: 269.9,
    image: theDarkSideImg,
    genre: "Rock",
    year: 1973,
    dimensions: "318 x 318 x 6 mm - 499 g",
    recordCompany: "Haverst",
    numberOfTracks: 10,
    tracks: [
      { id: 1, name: "Speak to Me", duration: "1:30" },
      { id: 2, name: "Breathe", duration: "2:43" },
      { id: 3, name: "On the Run", duration: "3:30" },
      { id: 4, name: "Time", duration: "6:53" },
      { id: 5, name: "The Great Gig in the Sky", duration: "4:15" },
      { id: 6, name: "Money", duration: "6:30" },
      { id: 7, name: "Us and Them", duration: "7:51" },
      { id: 8, name: "Any Colour You Like", duration: "3:24" },
      { id: 9, name: "Brain Damage", duration: "3:50" },
      { id: 10, name: "Eclipse", duration: "2:03" },
    ],
  },
  {
    id: 3,
    album: "Happier Than Ever",
    artist: "Billie Eilish",
    price: 259.9,
    image: happierThanEverImg,
    genre: "Pop",
    year: 2021,
    dimensions: "318 x 318 x 6 mm - 499 g",
    recordCompany: "Darkroom - Interscope",
    numberOfTracks: 16,
    tracks: [
      { id: 1, name: "Getting Older", duration: "4:04" },
      { id: 2, name: "I Didn't Change My Number", duration: "2:38" },
      { id: 3, name: "Billie Bossa Nova", duration: "3:16" },
      { id: 4, name: "my future", duration: "3:30" },
      { id: 5, name: "Oxytocin", duration: "3:29" },
      { id: 6, name: "GOLDWING", duration: "2:30" },
      { id: 7, name: "Lost Cause", duration: "3:32" },
      { id: 8, name: "Halley's Comet", duration: "3:54" },
      { id: 9, name: "Not My Responsibility", duration: "3:47" },
      { id: 10, name: "OverHeated", duration: "3:23" },
      { id: 11, name: "Everybody Dies", duration: "3:27" },
      { id: 12, name: "Your Power", duration: "4:05" },
      { id: 13, name: "NDA", duration: "3:15" },
      { id: 14, name: "Therefore I Am", duration: "2:54" },
      { id: 15, name: "Happier Than Ever", duration: "4:58" },
      { id: 16, name: "Male Fantasy", duration: "3:14" },
    ],
  },
  {
    id: 4,
    album: "Ten",
    artist: "Pearl Jam",
    price: 299.9,
    image: tenImg,
    genre: "Rock",
    year: 1991,
    dimensions: "318 x 318 x 6 mm - 499 g",
    recordCompany: "Epic",
    numberOfTracks: 11,
    tracks: [
      { id: 1, name: "Once", duration: "3:51" },
      { id: 2, name: "Even Flow", duration: "4:53" },
      { id: 3, name: "Alive", duration: "5:40" },
      { id: 4, name: "Why Go", duration: "3:19" },
      { id: 5, name: "Black", duration: "5:43" },
      { id: 6, name: "Jeremy", duration: "5:18" },
      { id: 7, name: "Oceans", duration: "2:41" },
      { id: 8, name: "Porch", duration: "3:30" },
      { id: 9, name: "Garden", duration: "4:59" },
      { id: 10, name: "Deep", duration: "4:18" },
      { id: 11, name: "Release", duration: "9:05" },
    ],
  },
  {
    id: 5,
    album: "Brand New Eyes",
    artist: "Paramore",
    price: 179.9,
    image: brandNewEyesImg,
    genre: "Rock",
    year: 2009,
    dimensions: "318 x 318 x 6 mm - 499 g",
    recordCompany: "Fueled by Ramen",
    numberOfTracks: 11,
    tracks: [
      { id: 1, name: "Careful", duration: "3:50" },
      { id: 2, name: "Ignorance", duration: "3:38" },
      { id: 3, name: "Playing God", duration: "3:02" },
      { id: 4, name: "Brick by Boring Brick", duration: "4:13" },
      { id: 5, name: "Turn It Off", duration: "4:19" },
      { id: 6, name: "The Only Exception", duration: "4:27" },
      { id: 7, name: "Feeling Sorry", duration: "3:05" },
      { id: 8, name: "Looking Up", duration: "3:29" },
      { id: 9, name: "Where the Lines Overlap", duration: "3:18" },
      { id: 10, name: "Misguided Ghosts", duration: "3:01" },
      { id: 11, name: "All I Wanted", duration: "3:48" },
    ],
  },
];

export { productsList };
