$(() => {
  const handleDate = data => {
    console.log(data.results[0].name);
    console.log(data);

    const $img = data.results[0].image;
    const $img1 = $('<img>').attr('src', $img);
    $img1.addClass('img');
    $('.results').append($img1);

    const $name = data.results[0].name;
    const $Character = $('<h1>').text(`Name: ${$name}`);
    $Character.addClass('characterName');
    $('.results').append($Character);

    const $gender = data.results[0].gender;
    const $gender1 = $('<h1>').text(`Gender: ${$gender}`);
    $gender1.addClass('gender');
    $('.results').append($gender1);

    const $episode = data.results[0].episode[0];
    const $episode1 = $('<h1>').text(`Found here!:  ${$episode}`);
    $episode1.addClass('episode');
    $('.results').append($episode1);

    const $kind = data.results[0].species;
    const $kind1 = $('<h1>').text(`Species: ${$kind}`);
    $kind1.addClass('kind');
    $('.results').append($kind1);

    const $status = data.results[0].status;
    const $status1 = $('<h1>').text(`Status: ${$status}`);
    $status1.addClass('status');
    $('.results').append($status1);

    const $location = data.results[0].location.name;
    const $location1 = $('<h1>').text(`Location: ${$location}`);
    $location1.addClass('location');
    $('.results').append($location1);
  };

  $('form').on('submit', event => {
    event.preventDefault();
    $('.results').empty();

    const $input = $('.title-query').val();

    // const typeInfo = $(event.currentTarget).val();
    const endpoint = `https://rickandmortyapi.com/api/character/?name=${$input} `;

    $.ajax({ url: endpoint }).then(handleDate);
  });
});
// console.log(endpoint);

//   const titleQuery = 'Rick';

// const $entry = $('<h1>').text(data.Characters);
// $('form').append($entry);
