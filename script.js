// local data
const reviews = [
    {
      id: 1,
      name: "Susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "Anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "Peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "Bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

  
//select
const image = document.getElementById("clientImage");
const name = document.getElementById("name");
const job = document.getElementById("job");
const comment = document.getElementById("comment")

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const random = document.querySelector(".random");

//starting item
let current = 0;


window.addEventListener("DOMContentLoaded", function () {
 showReview();
});

function showReview(){
  const item = reviews[current];
  image.src=item.img;
  name.textContent=item.name;
  job.textContent=item.job;
  comment.textContent=item.text;
}

next.addEventListener("click",function(){
  current++;
  if(current>reviews.length-1){
    current=0;
  }
  showReview();
})

prev.addEventListener("click",function(){
  current--;
  if(current<0){
    current=reviews.length-1;
  }
  showReview();
})

random.addEventListener("click",function(){
  current = Math.floor(Math.random()*reviews.length);
  showReview();
})

