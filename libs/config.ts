export const CONFIG = {
  HOT: [
    {
      title: "Gray Basic Hoodie",
      description: "A basic hoodie with a single color",
      img: "/hoodies/hastagone.png",
      price: "159.99TL",
      link: "gray-basic-hoodie",
      serial: "#1"
    },
    {
      title: "Black Basic Hoodie",
      description: "Another basic hoodie with a single color",
      img: "/hoodies/hastagtwo.png",
      price: "159.99TL",
      link: "black-basic-hoodie",
      serial: "#1"
    },
  ] as HOT[],

  ALL: [
    {
      title: "Gray Basic Hoodie",
      description: "A basic hoodie with a single color",
      img: "/hoodies/hastagone.png",
      price: "159.99TL",
      link: "gray-basic-hoodie",
      serial: "#1"
    },
    {
      title: "Black Basic Hoodie",
      description: "Another basic hoodie with a single color",
      img: "/hoodies/hastagtwo.png",
      price: "159.99TL",
      link: "black-basic-hoodie",
      serial: "#1"
    }
  ] as ALL[],
};



interface HOT {
  title: string;
  description: string;
  img: string;
  price: string;
  link: string;
  serial: string;
}

interface ALL {
  title: string;
  description: string;
  img: string;
  price: string;
  link: string;
  serial: string;
}