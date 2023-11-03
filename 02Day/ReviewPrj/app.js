// local reviews data
const reviews = [
    {
      id: 1,
      name: 'sandesh mainali',
      job: 'software developer',
      img: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: "Hello",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];
  //selecting id
  const img=document.getElementById("person-img");
  const author=document.getElementById("author");
  const job=document.getElementById("job");
  const info=document.getElementById("info");
  
  const prevBtn=document.querySelector(".prev-btn")
  const nextBtn=document.querySelector(".next-btn")
  const randomBtn=document.querySelector(".random-btn")

  //set starting item
  let currentItem=0;

  //load initial item
  window.addEventListener("DOMContentLoaded", function(){
   showperson(currentItem);


  });
  //show person based on item
  function showperson(person) {
    const item= reviews[person];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
  }
  // show next and pre person
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
      }
      showperson(currentItem);
    showperson(currentItem);
      });

prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showperson(currentItem);
  });
  //randomnumber gen

  randomBtn.addEventListener('click', function () {
    // currentItem--;
    // if (currentItem < 0) {
    //   currentItem = reviews.length - 1;
    // }
    // showperson(currentItem);

    currentItem= Math.floor(Math.random()*reviews.length);

    showperson(currentItem);

  });


