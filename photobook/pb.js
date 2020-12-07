let users =[
    {
        name:"Mercy Kalu",
        qualification:"Fullstack Developer",
        image:"https://res.cloudinary.com/belrah/image/upload/v1606158853/my_pics_leqpqa.jpg"
        
    },
    {
        name:"IROH JENNIFER",
        qualification:"Fullstack Developer",
        image:"./jenniferiroh.jpg"
    },
    {
        name:"Agbaje Inioluwa Temitope",
        qualification:"Fullstack Developer",
        image:"./tope.jpg"
    },
    {
        name:"Sonia Otiono",
        qualification:"Frontend Developer",
        image:"./soniaotiono.jpg",
    },
    {
        name:"Desola Oluseye",
        qualification:"Fontend Developer",
        image:"./desolaoluseye.jpg",
    },
    {
        name:"Oluwadunsin  Motunrayo Olajide",
        qualification:"Frontend Developer",
        image:"./oluwadunsinolajide.jpg",
    },
    {
        name:"Damilola Olatunji",
        qualification:"Backend Developer",
        image:"./damilolaOlatunji.png",
    },
    {
        name:"Awomolo Adekemi",
        qualification:"Backend Developer",
        image:"./adekemi.png",
    },
    {
        name:"Obalana Omobolanle Rukayat",
        qualification:"Backend Developer",
        image:"./omobolanle.jpg",
    },
    {
        name:"Adeola Alatishe",
        qualification:"Frontend Developer",
        image:"./adeolaalatishe.jpg",
    },
    {
        name:"Faith Omono",
        qualification:"Backend Developer",
        image:"./faithomono.jpg",
    },
];

const peopleDiv = document.querySelector(".users");

users.forEach((person) => {
  let personDiv = document.createElement("div");
  personDiv.classList.add("col");
  personDiv.classList.add("s12");
  personDiv.classList.add("m6");
  personDiv.classList.add("l4");
  personDiv.classList.add("xl3");

  personDiv.innerHTML = `
    <div class="card">
      <div class="card-image">
        <img src=${person.image} alt="" class="responsive-img" />
      </div>
      <div class="card-content">
        <p>${person.name}</p>
        <p>${person.qualification}</p>
      </div>
    </div>
  `;

  peopleDiv.appendChild(personDiv);
});