import axios from 'axios';

export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }

  let data: Article[] = response.data;

  // Article型はtitle: string型で定義されているのでEROR
  // data = [
  //   {
  //     id: 1,
  //     title: 1,
  //     description: 'description',
  //   },
  // ];

  console.log(data);
});
