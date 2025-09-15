/* 
    This file will define the dataType we are using in our app

    We will also create the array DATA here and then export both 
    so we can import wherever we need them
*/

type dataType = {
    id: string; // unique identifier
    title: string; // text displayed in FlatList
  }

const DATA: dataType[] = [
    {id: "1", title: "First Item"},
    {id: "2", title: "Second Item"},
    {id: "3", title: "Third Item"},
    {id: "4", title: "Fourth Item"},
    {id: "5", title: "Fifth Item"}
];

// When exporting multiple things, use curly braces instead of default
export { DATA, dataType };

