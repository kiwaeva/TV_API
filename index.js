// const body = document.querySelector('body');
const container = document.querySelector('.container');

const url= 'https://api.tvmaze.com/schedule?country=GB&date=2023-04-14';

fetch(url).then( 
    ( response ) => {
    return response.json();
  })
.then( (data) => {
    console.log(data);

    // for (let index = 0; index < data.length; index++){
    //     const element = data[index];
    //     console.log(`Program name: ${element.show.name},Program type: ${element.show.type}`);
    // }

    data.map( (obj) => {
        const showName = obj.show.name;
        // const showType = obj.show.type;
        const showTime = obj.airtime;
        const showUrl = obj.show.officialSite;
        const img = obj.show.image.medium;

        let card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('p-3');
        card.style.width = '18rem;';
        card.style.display = 'inline-block';
        card.style.margin = '2rem';
        container.appendChild(card);

        let image = document.createElement('img');
        image.src = img;
        image.classList.add('card-img-top')
        card.appendChild(image);

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        card.appendChild(cardBody);

        let title = document.createElement('h5');
        title.textContent = `${showName}`;
        title.classList.add('card-title');
        cardBody.appendChild( title );

        let time = document.createElement('p');
        time.classList.add('card-text');
        time.textContent = `${showTime}`;

        cardBody.appendChild( time );

        let link = document.createElement('a');
        link.href = `${showUrl}`;
        link.classList.add('btn');
        link.classList.add('btn-primary');
        link.textContent = `Official Site`;
        cardBody.appendChild(link);

        // let element = document.createElement('div');
        // element.textContent = `Program name: ${showName},Program time: ${showTime}, Link: ${showUrl}`;
        // container.appendChild(element);
  })
})
  .catch( (error) => {
    console.log(error)
  })


  //     console.log(
    //         `Program name: ${obj.show.name},Program type: ${obj.show.type}`);
    // } );