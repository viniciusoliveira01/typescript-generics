import IPerson from "../interfaces/IPerson";

const people: Array<IPerson> = [
  {
    firstName: "Robinson",
    lastName: "Joyce",
    eyeColor: "green",
    birthday: new Date(
      "Tue Sep 06 1983 11:44:19 GMT-0300 (Horário Padrão de Brasília)"
    ),
  },
  {
    firstName: "Ochoa",
    lastName: "Banks",
    eyeColor: "brown",
    birthday: new Date(
      "Sat Oct 17 1987 13:59:18 GMT-0300 (Horário Padrão de Brasília)"
    ),
  },
  {
    firstName: "Guy",
    lastName: "Head",
    eyeColor: "brown",
    birthday: new Date(
      "Sun Sep 20 1981 15:40:17 GMT-0300 (Horário Padrão de Brasília)"
    ),
  },
  {
    firstName: "Ruthie",
    lastName: "Gill",
    eyeColor: "blue",
    birthday: new Date(
      "Sun Jan 04 1981 10:58:01 GMT-0300 (Horário Padrão de Brasília)"
    ),
  },
  {
    firstName: "Munoz",
    lastName: "Torres",
    eyeColor: "blue",
    birthday: new Date(
      "Sun Sep 20 1987 07:03:54 GMT-0300 (Horário Padrão de Brasília)"
    ),
  },
];

export default people;
