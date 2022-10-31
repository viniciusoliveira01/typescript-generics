import IWidget from "../interfaces/IWidget";

const widget: Array<IWidget> = [
  {
    title: "I am title 1",
    description: "My cool description 1",
    id: 1,
    rating: 10,
    created: new Date(+new Date() - Math.floor(Math.random() * 100000000)),
    updated: new Date(+new Date() - Math.floor(Math.random() * 100000000)),
    isSpecialCard: false,
  },
  {
    title: "I am title 2",
    description: "My cool description 2",
    id: 2,
    rating: 7,
    created: new Date(+new Date() - Math.floor(Math.random() * 100000000)),
    updated: new Date(+new Date() - Math.floor(Math.random() * 100000000)),
    isSpecialCard: false,
  },
  {
    title: "I am title 3",
    description: "My cool description 3",
    id: 3,
    rating: 2,
    created: new Date(+new Date() - Math.floor(Math.random() * 100000000)),
    updated: new Date(+new Date() - Math.floor(Math.random() * 100000000)),
    isSpecialCard: true,
  },
  {
    title: "I am title 4",
    description: "My cool description 4",
    id: 4,
    rating: 9,
    created: new Date(+new Date() - Math.floor(Math.random() * 100000000)),
    updated: new Date(+new Date() - Math.floor(Math.random() * 100000000)),
    isSpecialCard: false,
  },
  {
    title: "I am too cool to be here",
    description: "",
    id: 5,
    rating: 10,
    created: new Date(+new Date() - Math.floor(Math.random() * 100000000)),
    updated: new Date(+new Date() - Math.floor(Math.random() * 100000000)),
    isSpecialCard: true,
  },
];

export default widget;
