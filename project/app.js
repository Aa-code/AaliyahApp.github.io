$(() => {
  const handleDate = data => {
    console.log(data.results[0].name);
    console.log(data);
    const $name = data.results[0].name;

    const $gender = data.results[0].gender;

    const $Character = $('<h1>').text($name);
    $('.results').append($Character);

    const $gender1 = $('<h1>').text($gender);
    $('.results').append($gender1);
  };

  $('form').on('submit', event => {
    event.preventDefault();
    $('.results').empty();

    const $input = $('.title-query').val();

    // const typeInfo = $(event.currentTarget).val();
    const endpoint = `https://rickandmortyapi.com/api/character/?name=${$input}`;

    $.ajax({ url: endpoint }).then(handleDate);
  });
});
// console.log(endpoint);

//   const titleQuery = 'Rick';

// const $entry = $('<h1>').text(data.Characters);
// $('form').append($entry);
