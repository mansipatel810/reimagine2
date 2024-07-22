function modanbikes(){
    
var madone = [
    { image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/MadoneSL7-25-46220-A-Primary",
        name:"Madone SL 7 Gen 8",
        price:"₹575,199",
        color:"Matte Lunar Silver"
    },
    { image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/MadoneSLR7-25-46687-B-Primary",
        name:"Madone SLR 7 Gen 8",
        price:"₹725,599",
        color:"Navy Smoke"
    },
    { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/MadoneSL6-25-46219-B-Primary",
        name:"Madone SL 6 Gen 8",
        price:"₹485,399",
        color:"Crimson"
    },
    { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/MadoneSL5-25-46218-B-Primary",
        name:"Madone SL 5 Gen 8",
        price:"₹324,999",
        color:"Hex Blue"
    },
    { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/MadoneSLR7_23_37025_A_Primary",
        name:"Madone SLR 7 Gen 7",
        price:"₹694,599",
        color:"Plasma Grey Pearl"
    },
    { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/MadoneSL7-24-41467-A-Primary",
        name:"Madone SL 7 Gen 7",
        price:"₹555,199",
        color:"Plasma Grey Pearl"
    },
    { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/MadoneSL6-24-41466-A-Primary",
        name:"Madone SL 6 Gen 7",
        price:"₹485,399",
        color:"Matte Carbon Smoke"
    },
    { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/MadoneSLFrameset-24-44369-A-Primary",
        name:"Madone SL Disc Gen 7 Frame Set",
        price:"₹325,000",
        color:" Dark Carmine"
    },
    { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/MadoneSLRDiscFrameset_23_37307_A_Primary",
        name:"Madone SLR Gen 7 Disc Frame Set",
        price:"₹276,937",
        color:" Deep Smoke Carbon"
    },
    { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/MadoneSLR7eTap_23_37418_C_Primary",
        name:" Deep Smoke Carbon",
        price:"₹899,699",
        color:"Azure"
    }
];

var products1 = document.querySelector("#products1");
var container = "";

madone.forEach(function(elem) {
    container += `
        <div class="product-container">
            <img src="${elem.image}" class="product1" alt="${elem.name}">
        </div>
    `;
});
products1.innerHTML = container;

var currentIndex = 1;
var images = document.querySelectorAll(".product1");

function updateSlider1() {

    images.forEach((img, idx) => {
        gsap.set(img.parentNode, { display: "none", transform: "translateX(0) scale(1)", opacity: 0.5 });
    });

    var prevIndex = (currentIndex - 1 + images.length) % images.length;
    var nextIndex = (currentIndex + 1) % images.length;

    gsap.set(images[prevIndex].parentNode, { display: "block", left: "3%", top: "15%", width: "22vw",ease: "circ.out" });
    gsap.to(images[prevIndex].parentNode, { transform: "translateX(-10%) scale(0.75)", duration: 0.5,ease: "circ.out" });

    gsap.set(images[currentIndex].parentNode, { display: "block", left: "50%", top: "19%", width: "42vw", opacity: 1,ease: "circ.out" });
    gsap.to(images[currentIndex].parentNode, { transform: "translateX(-50%) scale(1.05)", opacity: 1, duration: 0.5 ,ease: "circ.out"});

    gsap.set(images[nextIndex].parentNode, { display: "block", top: "15%", width: "22vw", left: "calc(100% - 3% - 22vw)",ease: "circ.out" });
    gsap.to(images[nextIndex].parentNode, { transform: "translateX(10%) scale(0.75)", duration: 0.5 ,ease: "circ.out"});


  
    document.querySelector("#name1").textContent = madone[currentIndex].name;
    document.querySelector(".details #color1 .btn").textContent = ` ${madone[currentIndex].color}`;
    document.querySelector(".details #price1 .price").textContent = madone[currentIndex].price;
}

updateSlider1();

document.querySelector("#slider-arrow1.right").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider1();
});

document.querySelector("#slider-arrow1.left").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider1();
});

images.forEach(function(image, idx) {
image.addEventListener("click", function() {
if (idx === currentIndex) return;

var prevIndex = (currentIndex - 1 + images.length) % images.length;
var nextIndex = (currentIndex + 1) % images.length;

if (idx === prevIndex) {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider1();
} else if (idx === nextIndex) {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider1();
}
});
});
}










function emondabikes(){
    var emonda =[
        {
            image:"https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/EmondaALR5-24-41426-A-Primary",
            name:"Émonda ALR 5",
            price:"₹199,999",
            color:" Crimson to Dark Carmine Fade"
        },
        {
            image:"https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1024,h_768,c_pad/EmondaSL6-24-41352-B-Primary",
            name:"Émonda SL 6",
            price:"₹417,199",
            color:" Plasma Pearl Grey/Purple Flip"
        },
        {
            image:"https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1024,h_768,c_pad/EmondaSL5-24-41366-B-Primary",
            name:"Émonda SL 5",
            price:"₹254,599",
            color:"Navy Smoke/Dark Aquatic"
        },
        {
            image:"https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1024,h_768,c_pad/EmondaALRDiscFrameset_23_37299_B_Primary",
            name:"Émonda ALR Disc Frame Set",
            price:"₹94,099",
            color:" Era White"
        },
        {
            image:"https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/EmondaSLR7eTap_23_33139_C_Primary",
            name:"Émonda SLR 7 AXS",
            price:"₹797,199",
            color:" Azure"
        },
        {
            image:"https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/EmondaSL6Pro_23_36977_A_Primary",
            name:"Émonda SL 6 Pro Di2",
            price:"₹360,199",
            color:"Dnister Black/Trek Black"
        },
        {
            image:"https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/EmondaSL5_23_36974_B_Primary",
            name:"Émonda SL 5",
            price:"₹252,079",
            color:" Hex Blue/Deep Dark Blue"
        },
        {
            image:"https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/EmondaALR5_23_36100_A_Primary",
            name:"Émonda ALR 5",
            price:"₹194,999",
            color:"Trek Black"
        },
    ]

    var products2 = document.querySelector("#products2");
    var container = "";
    
    emonda.forEach(function(elem) {
        container += `
            <div class="product-container">
                <img src="${elem.image}" class="product2" alt="${elem.name}">
            </div>
        `;
    });
    products2.innerHTML = container;
    
    var currentIndex = 1;
    var images = document.querySelectorAll(".product2");
    
    function updateSlider2() {
    
        images.forEach((img, idx) => {
            gsap.set(img.parentNode, { display: "none", transform: "translateX(0) scale(1)", opacity: 0.5 });
        });
    
        var prevIndex = (currentIndex - 1 + images.length) % images.length;
        var nextIndex = (currentIndex + 1) % images.length;
    
        gsap.set(images[prevIndex].parentNode, { display: "block", left: "3%", top: "15%", width: "22vw" });
        gsap.to(images[prevIndex].parentNode, { transform: "translateX(-10%) scale(0.75)", duration: 0.5 });
    
        gsap.set(images[currentIndex].parentNode, { display: "block", left: "50%", top: "19%", width: "42vw", opacity: 1 });
        gsap.to(images[currentIndex].parentNode, { transform: "translateX(-50%) scale(1.05)", opacity: 1, duration: 0.5 });
    
        gsap.set(images[nextIndex].parentNode, { display: "block", top: "15%", width: "22vw", left: "calc(100% - 3% - 22vw)" });
        gsap.to(images[nextIndex].parentNode, { transform: "translateX(10%) scale(0.75)", duration: 0.5 });
    
    
      
        document.querySelector("#name2").textContent = emonda[currentIndex].name;
        document.querySelector("#details2 #color2 .btn").textContent = `${emonda[currentIndex].color}`;
        document.querySelector("#details2 #price2  .price").textContent = emonda[currentIndex].price;
    }
    
    updateSlider2();
    
    document.querySelector("#slider-arrow2.right").addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider2();
    });
    
    document.querySelector("#slider-arrow2.left").addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider2();
    });
    
    images.forEach(function(image, idx) {
    image.addEventListener("click", function() {
    if (idx === currentIndex) return;
    
    var prevIndex = (currentIndex - 1 + images.length) % images.length;
    var nextIndex = (currentIndex + 1) % images.length;
    
    if (idx === prevIndex) {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider2();
    } else if (idx === nextIndex) {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider2();
    }
    });
    });
    }
   
   



    function checkpointbikes(){
    
        var checkpoint = [
            { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/CheckpointSL5-24-41398-B-Primary",
                name:"Checkpoint SL 5",
                price:"₹294,499",
                color:"Matte Pennyflake"
            },
            { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/CheckpointALR4-24-41513-A-Primary",
                name:"Checkpoint ALR 4",
                price:"₹161,599",
                color:"Matte Galactic Grey"
            },
            { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/CheckpointALR5-24-41640-A-Primary",
                name:"Checkpoint ALR 5",
                price:"₹211,999",
                color:" Matte Keswick"
            },
            
        ];
        
        var products3 = document.querySelector("#products3");
        var container = "";
        
        checkpoint.forEach(function(elem) {
            container += `
                <div class="product-container">
                    <img src="${elem.image}" class="product3" alt="${elem.name}">
                </div>
            `;
        });
        products3.innerHTML = container;
        
        var currentIndex = 1;
        var images = document.querySelectorAll(".product3");
        
        function updateSlider3() {
        
            images.forEach((img, idx) => {
                gsap.set(img.parentNode, { display: "none", transform: "translateX(0) scale(1)", opacity: 0.5 });
            });
        
            var prevIndex = (currentIndex - 1 + images.length) % images.length;
            var nextIndex = (currentIndex + 1) % images.length;
        
            gsap.set(images[prevIndex].parentNode, { display: "block", left: "3%", top: "15%", width: "22vw",ease: "circ.out" });
            gsap.to(images[prevIndex].parentNode, { transform: "translateX(-10%) scale(0.75)", duration: 0.5,ease: "circ.out" });
        
            gsap.set(images[currentIndex].parentNode, { display: "block", left: "50%", top: "19%", width: "42vw", opacity: 1,ease: "circ.out" });
            gsap.to(images[currentIndex].parentNode, { transform: "translateX(-50%) scale(1.05)", opacity: 1, duration: 0.5 ,ease: "circ.out"});
        
            gsap.set(images[nextIndex].parentNode, { display: "block", top: "15%", width: "22vw", left: "calc(100% - 3% - 22vw)",ease: "circ.out" });
            gsap.to(images[nextIndex].parentNode, { transform: "translateX(10%) scale(0.75)", duration: 0.5 ,ease: "circ.out"});
        
        
          
            document.querySelector("#name3").textContent = checkpoint[currentIndex].name;
            document.querySelector("#details3 #color3 .btn").textContent = ` ${checkpoint[currentIndex].color}`;
            document.querySelector("#details3 #price3 .price").textContent = checkpoint[currentIndex].price;
        }
        
        updateSlider3();
        
        document.querySelector("#slider-arrow3.right").addEventListener("click", function() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateSlider3();
        });
        
        document.querySelector("#slider-arrow3.left").addEventListener("click", function() {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlider3();
        });
        
        images.forEach(function(image, idx) {
        image.addEventListener("click", function() {
        if (idx === currentIndex) return;
        
        var prevIndex = (currentIndex - 1 + images.length) % images.length;
        var nextIndex = (currentIndex + 1) % images.length;
        
        if (idx === prevIndex) {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlider3();
        } else if (idx === nextIndex) {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateSlider3();
        }
        });
        });
        }
        checkpointbikes()
       
       



    function domanebikes(){
    
            var domane = [
                { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/DomaneAL4-24-41607-B-Primary",
                    name:"Domane AL 4 Gen 4",
                    price:"₹149,899",
                    color:"Viper Red"
                },
                { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/FuelEX5-24-41346-B-Primary",
                    name:"Fuel EX 5 Gen 6",
                    price:"₹270,199",
                    color:"Matte Blue Sage"
                },
                { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/DomaneAL5-24-41395-A-Primary",
                    name:"Domane AL 5 Gen 4",
                    price:"₹186,899",
                    color:" Matte Trek Black"
                },
                { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/DomaneAL2-24-41587-C-Primary",
                    name:"Domane AL 2 Gen 4",
                    price:"₹99,699",
                    color:" Crimson to Dark Carmine Fade"
                },
                { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/DomaneSL6_23_36746_B_Primary",
                    name:"Domane SL 6 Gen 4",
                    price:"₹424,199",
                    color:" Matte Trek Black"
                },
                { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/DomaneAL2_21_33037_A_Primary",
                    name:"Domane AL 2 Rim",
                    price:"₹71,199",
                    color:" Matte Trek Black"
                },
                
            ];
            
            var products4 = document.querySelector("#products4");
            var container = "";
            
            domane.forEach(function(elem) {
                container += `
                    <div class="product-container">
                        <img src="${elem.image}" class="product4" alt="${elem.name}">
                    </div>
                `;
            });
            products4.innerHTML = container;
            
            var currentIndex = 1;
            var images = document.querySelectorAll(".product4");
            
            function updateSlider4() {
            
                images.forEach((img, idx) => {
                    gsap.set(img.parentNode, { display: "none", transform: "translateX(0) scale(1)", opacity: 0.5 });
                });
            
                var prevIndex = (currentIndex - 1 + images.length) % images.length;
                var nextIndex = (currentIndex + 1) % images.length;
            
                gsap.set(images[prevIndex].parentNode, { display: "block", left: "3%", top: "15%", width: "22vw",ease: "circ.out" });
                gsap.to(images[prevIndex].parentNode, { transform: "translateX(-10%) scale(0.75)", duration: 0.5,ease: "circ.out" });
            
                gsap.set(images[currentIndex].parentNode, { display: "block", left: "50%", top: "19%", width: "42vw", opacity: 1,ease: "circ.out" });
                gsap.to(images[currentIndex].parentNode, { transform: "translateX(-50%) scale(1.05)", opacity: 1, duration: 0.5 ,ease: "circ.out"});
            
                gsap.set(images[nextIndex].parentNode, { display: "block", top: "15%", width: "22vw", left: "calc(100% - 3% - 22vw)",ease: "circ.out" });
                gsap.to(images[nextIndex].parentNode, { transform: "translateX(10%) scale(0.75)", duration: 0.5 ,ease: "circ.out"});
            
            
              
                document.querySelector("#name4").textContent = domane[currentIndex].name;
                document.querySelector("#details4 #color4 .btn").textContent = ` ${domane[currentIndex].color}`;
                document.querySelector("#details4 #price4 .price").textContent = domane[currentIndex].price;
            }
            
            updateSlider4();
            
            document.querySelector("#slider-arrow4.right").addEventListener("click", function() {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                updateSlider4();
            });
            
            document.querySelector("#slider-arrow4.left").addEventListener("click", function() {
                currentIndex = (currentIndex + 1) % images.length;
                updateSlider4();
            });
            
            images.forEach(function(image, idx) {
            image.addEventListener("click", function() {
            if (idx === currentIndex) return;
            
            var prevIndex = (currentIndex - 1 + images.length) % images.length;
            var nextIndex = (currentIndex + 1) % images.length;
            
            if (idx === prevIndex) {
                currentIndex = (currentIndex + 1) % images.length;
                updateSlider4();
            } else if (idx === nextIndex) {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                updateSlider4();
            }
            });
            });
            }
        



    function dualsportbikes(){
    
             var dualsport = [
                { image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1024,h_768,c_pad/DualSport3-24-40826-B-Primary",
                        name:"Dual Sport 3 Gen 5",
                        price:"₹79,990",
                        color:"Pennyflake"
                    },
                    { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/DualSport2-24-40824-A-Primary",
                        name:"Dual Sport 2 Gen 5",
                        price:"₹61,199",
                        color:"Lithium Grey"
                    },
                    { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/DualSport3_23_36826_A_Primary",
                        name:"Dual Sport 3 Gen 5",
                        price:"₹72,799",
                        color:" MBlack Olive"
                    },
                    { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/DualSport2_23_36823_A_Primary",
                        name:"Dual Sport 2 Gen 5",
                        price:"₹52,199",
                        color:" Sale color / Galactic Grey"
                    },
                    { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/DualSport1_23_36824_A_Primary",
                        name:"Dual Sport 1 Gen 5",
                        price:"₹49,999",
                        color:"Sale color / Mercury"
                    },
                    { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/DualSport1_22_35060_A_Primary",
                        name:"Dual Sport 1 Gen 4",
                        price:"₹46,099",
                        color:"Sale color / Lithium Grey"
                    },
                    
                ];
                
                var products5 = document.querySelector("#products5");
                var container = "";
                
               dualsport.forEach(function(elem) {
                    container += `
                        <div class="product-container">
                            <img src="${elem.image}" class="product5" alt="${elem.name}">
                        </div>
                    `;
                });
                products5.innerHTML = container;
                
                var currentIndex = 1;
                var images = document.querySelectorAll(".product5");
                
                function updateSlider5() {
                
                    images.forEach((img, idx) => {
                        gsap.set(img.parentNode, { display: "none", transform: "translateX(0) scale(1)", opacity: 0.5 });
                    });
                
                    var prevIndex = (currentIndex - 1 + images.length) % images.length;
                    var nextIndex = (currentIndex + 1) % images.length;
                
                    gsap.set(images[prevIndex].parentNode, { display: "block", left: "3%", top: "15%", width: "22vw",ease: "circ.out" });
                    gsap.to(images[prevIndex].parentNode, { transform: "translateX(-10%) scale(0.75)", duration: 0.5,ease: "circ.out" });
                
                    gsap.set(images[currentIndex].parentNode, { display: "block", left: "50%", top: "10%", width: "52vw", opacity: 1,ease: "circ.out" });
                    gsap.to(images[currentIndex].parentNode, { transform: "translateX(-50%) scale(1.05)", opacity: 1, duration: 0.5 ,ease: "circ.out"});
                
                    gsap.set(images[nextIndex].parentNode, { display: "block", top: "15%", width: "22vw", left: "calc(100% - 3% - 22vw)",ease: "circ.out" });
                    gsap.to(images[nextIndex].parentNode, { transform: "translateX(10%) scale(0.75)", duration: 0.5 ,ease: "circ.out"});
                
                
                  
                    document.querySelector("#name5").textContent = dualsport[currentIndex].name;
                    document.querySelector("#details5 #color5 .btn").textContent = ` ${dualsport[currentIndex].color}`;
                    document.querySelector("#details5 #price5 .price").textContent = dualsport[currentIndex].price;
                }
                
                updateSlider5();
                
                document.querySelector("#slider-arrow5.right").addEventListener("click", function() {
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                    updateSlider5();
                });
                
                document.querySelector("#slider-arrow5.left").addEventListener("click", function() {
                    currentIndex = (currentIndex + 1) % images.length;
                    updateSlider5();
                });
                
                images.forEach(function(image, idx) {
                image.addEventListener("click", function() {
                if (idx === currentIndex) return;
                
                var prevIndex = (currentIndex - 1 + images.length) % images.length;
                var nextIndex = (currentIndex + 1) % images.length;
                
                if (idx === prevIndex) {
                    currentIndex = (currentIndex + 1) % images.length;
                    updateSlider5();
                } else if (idx === nextIndex) {
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                    updateSlider5();
                }
                });
                });
        }
    



   



function fxbikes(){
    
    var fx = [
       { image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1024,h_768,c_pad/FX3-24-40819-C-Primary",
               name:"FX 3 Gen 4",
               price:"₹79,990",
               color:"Pennyflake"
           },
           { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/FX2-24-40815-A-Primary",
               name:"FX 2 Gen 4",
               price:"₹59,999",
               color:"Matte Trek Black"
           },
           { image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1024,h_768,c_pad/FXSport4Carbon-24-40822-B-Primary",
               name:"FX Sport 4",
               price:"₹156,499",
               color:" DARK AQUATIC"
           },
           { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/FX1-24-40813-A-Primary",
               name:"FX 1 Gen 4",
               price:"₹51,599",
               color:"  Dnister Black"
           },
           { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/FXSport6Carbon_22_35787_A_Primary",
               name:"FX Sport 6",
               price:"₹49,999",
               color:"Sale color / Mercury"
           },
           { image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1024,h_768,c_pad/FXSport5Carbon_22_35786_A_Primary",
               name:"FX Sport 5",
               price:"₹180,399",
               color:"NAVY CARBON SMOKE"
           },
           
       ];
       
       var products6 = document.querySelector("#products6");
       var container = "";
       
      fx.forEach(function(elem) {
           container += `
               <div class="product-container">
                   <img src="${elem.image}" class="product6" alt="${elem.name}">
               </div>
           `;
       });
       products6.innerHTML = container;
       
       var currentIndex = 1;
       var images = document.querySelectorAll(".product6");
       
       function updateSlider6() {
       
           images.forEach((img, idx) => {
               gsap.set(img.parentNode, { display: "none", transform: "translateX(0) scale(1)", opacity: 0.5 });
           });
       
           var prevIndex = (currentIndex - 1 + images.length) % images.length;
           var nextIndex = (currentIndex + 1) % images.length;
       
           gsap.set(images[prevIndex].parentNode, { display: "block", left: "3%", top: "15%", width: "22vw",ease: "circ.out" });
           gsap.to(images[prevIndex].parentNode, { transform: "translateX(-10%) scale(0.75)", duration: 0.5,ease: "circ.out" });
       
           gsap.set(images[currentIndex].parentNode, { display: "block", left: "50%", top: "10%", width: "52vw", opacity: 1,ease: "circ.out" });
           gsap.to(images[currentIndex].parentNode, { transform: "translateX(-50%) scale(1.05)", opacity: 1, duration: 0.5 ,ease: "circ.out"});
       
           gsap.set(images[nextIndex].parentNode, { display: "block", top: "15%", width: "22vw", left: "calc(100% - 3% - 22vw)",ease: "circ.out" });
           gsap.to(images[nextIndex].parentNode, { transform: "translateX(10%) scale(0.75)", duration: 0.5 ,ease: "circ.out"});
       
       
         
           document.querySelector("#name6").textContent = fx[currentIndex].name;
           document.querySelector("#details6 #color6 .btn").textContent = ` ${fx[currentIndex].color}`;
           document.querySelector("#details6 #price6 .price").textContent = fx[currentIndex].price;
       }
       
       updateSlider6();
       
       document.querySelector("#slider-arrow6.right").addEventListener("click", function() {
           currentIndex = (currentIndex - 1 + images.length) % images.length;
           updateSlider6();
       });
       
       document.querySelector("#slider-arrow6.left").addEventListener("click", function() {
           currentIndex = (currentIndex + 1) % images.length;
           updateSlider6();
       });
       
       images.forEach(function(image, idx) {
       image.addEventListener("click", function() {
       if (idx === currentIndex) return;
       
       var prevIndex = (currentIndex - 1 + images.length) % images.length;
       var nextIndex = (currentIndex + 1) % images.length;
       
       if (idx === prevIndex) {
           currentIndex = (currentIndex + 1) % images.length;
           updateSlider6();
       } else if (idx === nextIndex) {
           currentIndex = (currentIndex - 1 + images.length) % images.length;
           updateSlider6();
       }
       });
       });
}




function fuelex(){
    
    var fx = [
       { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/FuelEX5-24-41346-B-Primary",
               name:"Fuel EX Gen 6",
               price:"₹270,199",
               color:"Matte Blue Sage"
           },  
       ];
       
       var products7 = document.querySelector("#products7");
       var container = "";
       
      fx.forEach(function(elem) {
           container += `
               <div class="product-container">
                   <img src="${elem.image}" class="product7" alt="${elem.name}">
               </div>
           `;
       });
       products7.innerHTML = container;             
}



function marlinbikes(){
    
    var marlin = [
       { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Marlin5-24-40773-A-Primary",
               name:"Marlin 5 Gen 3",
               price:"₹61,399",
               color:"Matte Dnister Black"
           },
           { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Marlin4-24-41613-C-Primary",
               name:"Marlin 4 Gen 2",
               price:"₹35,999",
               color:"Matte Trek Black"
           },
           { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Marlin6_23_36966_B_Primary",
               name:"Marlin 6 Gen 3",
               price:"₹69,199",
               color:" DARK AQUATIC"
           },
           { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Marlin8_21_34649_B_Primary",
               name:"Marlin 8 Gen 2",
               price:"₹99,199",
               color:" Nautical"
           },
           { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Marlin7_23_36967_A_Primary",
               name:"Marlin 7 Gen 3",
               price:"₹90,399",
               color:"Sale color"
           },
           { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Marlin5_22_34587_A_Primary",
               name:"Marlin 5 Gen 2",
               price:"₹53,699",
               color:"Lithium Grey"
           },
           
       ];
       
       var products8 = document.querySelector("#products8");
       var container = "";
       
      marlin.forEach(function(elem) {
           container += `
               <div class="product-container">
                   <img src="${elem.image}" class="product8" alt="${elem.name}">
               </div>
           `;
       });
       products8.innerHTML = container;
       
       var currentIndex = 1;
       var images = document.querySelectorAll(".product8");
       
       function updateSlider8() {
       
           images.forEach((img, idx) => {
               gsap.set(img.parentNode, { display: "none", transform: "translateX(0) scale(1)", opacity: 0.5 });
           });
       
           var prevIndex = (currentIndex - 1 + images.length) % images.length;
           var nextIndex = (currentIndex + 1) % images.length;
       
           gsap.set(images[prevIndex].parentNode, { display: "block", left: "3%", top: "15%", width: "22vw",ease: "circ.out" });
           gsap.to(images[prevIndex].parentNode, { transform: "translateX(-10%) scale(0.75)", duration: 0.5,ease: "circ.out" });
       
           gsap.set(images[currentIndex].parentNode, { display: "block", left: "50%", top: "10%", width: "52vw", opacity: 1,ease: "circ.out" });
           gsap.to(images[currentIndex].parentNode, { transform: "translateX(-50%) scale(1.05)", opacity: 1, duration: 0.5 ,ease: "circ.out"});
       
           gsap.set(images[nextIndex].parentNode, { display: "block", top: "15%", width: "22vw", left: "calc(100% - 3% - 22vw)",ease: "circ.out" });
           gsap.to(images[nextIndex].parentNode, { transform: "translateX(10%) scale(0.75)", duration: 0.5 ,ease: "circ.out"});
       
       
         
           document.querySelector("#name8").textContent = marlin[currentIndex].name;
           document.querySelector("#details8 #color8 .btn").textContent = ` ${marlin[currentIndex].color}`;
           document.querySelector("#details8 #price8 .price").textContent = marlin[currentIndex].price;
       }
       
       updateSlider8();
       
       document.querySelector("#slider-arrow8.right").addEventListener("click", function() {
           currentIndex = (currentIndex - 1 + images.length) % images.length;
           updateSlider8();
       });
       
       document.querySelector("#slider-arrow8.left").addEventListener("click", function() {
           currentIndex = (currentIndex + 1) % images.length;
           updateSlider8();
       });
       
       images.forEach(function(image, idx) {
       image.addEventListener("click", function() {
       if (idx === currentIndex) return;
       
       var prevIndex = (currentIndex - 1 + images.length) % images.length;
       var nextIndex = (currentIndex + 1) % images.length;
       
       if (idx === prevIndex) {
           currentIndex = (currentIndex + 1) % images.length;
           updateSlider8();
       } else if (idx === nextIndex) {
           currentIndex = (currentIndex - 1 + images.length) % images.length;
           updateSlider8();
       }
       });
       });
}




function Procaliberbikes(){
    
    var procaliber = [
       { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Procaliber97AXS-24-41643-A-Primary",
               name:"Procaliber 9.7",
               price:"₹441,499",
               color:"White Prismatic"
           },
           { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Procaliber95-24-33258-A-Primary",
               name:"Procaliber 9.6",
               price:"₹229,199",
               color:"Deep Smok"
           },
           { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Procaliber96_23_35113_B_Primary",
               name:"Procaliber 9.5",
               price:"₹189,299",
               color:" Matte Trek Black"
           },
           
           
       ];
       
       var products9 = document.querySelector("#products9");
       var container = "";
       
     procaliber.forEach(function(elem) {
           container += `
               <div class="product-container">
                   <img src="${elem.image}" class="product9" alt="${elem.name}">
               </div>
           `;
       });
       products9.innerHTML = container;
       
       var currentIndex = 1;
       var images = document.querySelectorAll(".product9");
       
       function updateSlider9() {
       
           images.forEach((img, idx) => {
               gsap.set(img.parentNode, { display: "none", transform: "translateX(0) scale(1)", opacity: 0.5 });
           });
       
           var prevIndex = (currentIndex - 1 + images.length) % images.length;
           var nextIndex = (currentIndex + 1) % images.length;
       
           gsap.set(images[prevIndex].parentNode, { display: "block", left: "3%", top: "15%", width: "22vw",ease: "circ.out" });
           gsap.to(images[prevIndex].parentNode, { transform: "translateX(-10%) scale(0.75)", duration: 0.5,ease: "circ.out" });
       
           gsap.set(images[currentIndex].parentNode, { display: "block", left: "50%", top: "10%", width: "52vw", opacity: 1,ease: "circ.out" });
           gsap.to(images[currentIndex].parentNode, { transform: "translateX(-50%) scale(1.05)", opacity: 1, duration: 0.5 ,ease: "circ.out"});
       
           gsap.set(images[nextIndex].parentNode, { display: "block", top: "15%", width: "22vw", left: "calc(100% - 3% - 22vw)",ease: "circ.out" });
           gsap.to(images[nextIndex].parentNode, { transform: "translateX(10%) scale(0.75)", duration: 0.5 ,ease: "circ.out"});
       
       
         
           document.querySelector("#name9").textContent =procaliber[currentIndex].name;
           document.querySelector("#details9 #color9 .btn").textContent = ` ${procaliber[currentIndex].color}`;
           document.querySelector("#details9 #price9 .price").textContent =procaliber[currentIndex].price;
       }
       
       updateSlider9();
       
       document.querySelector("#slider-arrow9.right").addEventListener("click", function() {
           currentIndex = (currentIndex - 1 + images.length) % images.length;
           updateSlider9();
       });
       
       document.querySelector("#slider-arrow9.left").addEventListener("click", function() {
           currentIndex = (currentIndex + 1) % images.length;
           updateSlider9();
       });
       
       images.forEach(function(image, idx) {
       image.addEventListener("click", function() {
       if (idx === currentIndex) return;
       
       var prevIndex = (currentIndex - 1 + images.length) % images.length;
       var nextIndex = (currentIndex + 1) % images.length;
       
       if (idx === prevIndex) {
           currentIndex = (currentIndex + 1) % images.length;
           updateSlider9();
       } else if (idx === nextIndex) {
           currentIndex = (currentIndex - 1 + images.length) % images.length;
           updateSlider9();
       }
       });
       });
}



function roscuebikes(){
    
    var roscoe = [
       { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Roscoe6_22_33192_C_Primary",
               name:"Roscoe 6",
               price:"₹77,899",
               color:"Waterloo Blue"
           },  
       ];
       
       var products10 = document.querySelector("#products10");
       var container = "";
       
      roscoe.forEach(function(elem) {
           container += `
               <div class="product-container">
                   <img src="${elem.image}" class="product10" alt="${elem.name}">
               </div>
           `;
       });
       products10.innerHTML = container;             
}



function speedconceptbikes(){
    
    var speedconcept = [
       { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/SpeedConceptSLR7_22_35577_A_Primary",
              
           },  
       ];
       
       var products11 = document.querySelector("#products11");
       var container = "";
       
      speedconcept.forEach(function(elem) {
           container += `
               <div class="product-container">
                   <img src="${elem.image}" class="product11" alt="${elem.name}">
               </div>
           `;
       });
       products11.innerHTML = container;             
}


function supercaliberbikes(){
    
    var supercaliber= [
       { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/SupercaliberSL97AXS-24-41719-A-Primary",
               name:"Supercaliber SL 9.6 Gen 2",
               price:"₹376,799",
               color:"Alpine Blue"
           },
           { image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1024,h_768,c_pad/SupercaliberSLR99XXAXS-24-41725-C-Primary",
               name:"Supercaliber SLR 9.9 XX AXS Gen 2",
               price:"₹1,472,599",
               color:"Argent Drizzle"
           },
           { image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1024,h_768,c_pad/SupercaliberSL97AXS-24-41719-A-Primary",
               name:"Supercaliber SL 9.7 AXS Gen 2",
               price:"₹529,799",
               color:"Plasma Grey Pearl"
           },
           
           
       ];
       
       var products12 = document.querySelector("#products12");
       var container = "";
       
     supercaliber.forEach(function(elem) {
           container += `
               <div class="product-container">
                   <img src="${elem.image}" class="product12" alt="${elem.name}">
               </div>
           `;
       });
       products12.innerHTML = container;
       
       var currentIndex = 1;
       var images = document.querySelectorAll(".product12");
       
       function updateSlider12() {
       
           images.forEach((img, idx) => {
               gsap.set(img.parentNode, { display: "none", transform: "translateX(0) scale(1)", opacity: 0.5 });
           });
       
           var prevIndex = (currentIndex - 1 + images.length) % images.length;
           var nextIndex = (currentIndex + 1) % images.length;
       
           gsap.set(images[prevIndex].parentNode, { display: "block", left: "3%", top: "15%", width: "22vw",ease: "circ.out" });
           gsap.to(images[prevIndex].parentNode, { transform: "translateX(-10%) scale(0.75)", duration: 0.5,ease: "circ.out" });
       
           gsap.set(images[currentIndex].parentNode, { display: "block", left: "50%", top: "10%", width: "52vw", opacity: 1,ease: "circ.out" });
           gsap.to(images[currentIndex].parentNode, { transform: "translateX(-50%) scale(1.05)", opacity: 1, duration: 0.5 ,ease: "circ.out"});
       
           gsap.set(images[nextIndex].parentNode, { display: "block", top: "15%", width: "22vw", left: "calc(100% - 3% - 22vw)",ease: "circ.out" });
           gsap.to(images[nextIndex].parentNode, { transform: "translateX(10%) scale(0.75)", duration: 0.5 ,ease: "circ.out"});
       
       
         
           document.querySelector("#name12").textContent =supercaliber[currentIndex].name;
           document.querySelector("#details12 #color12 .btn").textContent = ` ${supercaliber[currentIndex].color}`;
           document.querySelector("#details12 #price12 .price").textContent =supercaliber[currentIndex].price;
       }
       
       updateSlider12();
       
       document.querySelector("#slider-arrow12.right").addEventListener("click", function() {
           currentIndex = (currentIndex - 1 + images.length) % images.length;
           updateSlider12();
       });
       
       document.querySelector("#slider-arrow12.left").addEventListener("click", function() {
           currentIndex = (currentIndex + 1) % images.length;
           updateSlider12();
       });
       
       images.forEach(function(image, idx) {
       image.addEventListener("click", function() {
       if (idx === currentIndex) return;
       
       var prevIndex = (currentIndex - 1 + images.length) % images.length;
       var nextIndex = (currentIndex + 1) % images.length;
       
       if (idx === prevIndex) {
           currentIndex = (currentIndex + 1) % images.length;
           updateSlider12();
       } else if (idx === nextIndex) {
           currentIndex = (currentIndex - 1 + images.length) % images.length;
           updateSlider12();
       }
       });
       });
}



function topfuelbikes(){
    
    var topfuel = [
       { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/TopFuel97SLXXT_22_35178_B_Primary",
              
           },  
       ];
       
       var products13 = document.querySelector("#products13");
       var container = "";
       
      topfuel.forEach(function(elem) {
           container += `
               <div class="product-container">
                   <img src="${elem.image}" class="product13" alt="${elem.name}">
               </div>
           `;
       });
       products13.innerHTML = container;             
}


function vervebikes(){
    
    var verve= [
       { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Verve2Disc_21_32735_A_Primary",
               name:"Verve 2 Disc Gen 4",
               price:"₹50,199",
               color:"Lithium Grey"
           },
           { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Verve1Disc_21_32737_A_Primary",
               name:"Verve 1 Disc",
               price:"₹44,199",
               color:"Trek Black"
           },
           
           
       ];
       
       var products14 = document.querySelector("#products14");
       var container = "";
       
     verve.forEach(function(elem) {
           container += `
               <div class="product-container">
                   <img src="${elem.image}" class="product14" alt="${elem.name}">
               </div>
           `;
       });
       products14.innerHTML = container;
       
       var currentIndex = 1;
       var images = document.querySelectorAll(".product14");
       
       function updateSlider14() {
       
           images.forEach((img, idx) => {
               gsap.set(img.parentNode, { display: "none", transform: "translateX(0) scale(1)", opacity: 0.5 });
           });
       
           var prevIndex = (currentIndex - 1 + images.length) % images.length;
           var nextIndex = (currentIndex + 1) % images.length;
       
           gsap.set(images[prevIndex].parentNode, { display: "block", left: "3%", top: "15%", width: "22vw",ease: "circ.out" });
           gsap.to(images[prevIndex].parentNode, { transform: "translateX(-10%) scale(0.75)", duration: 0.5,ease: "circ.out" });
       
           gsap.set(images[currentIndex].parentNode, { display: "block", left: "50%", top: "10%", width: "52vw", opacity: 1,ease: "circ.out" });
           gsap.to(images[currentIndex].parentNode, { transform: "translateX(-50%) scale(1.05)", opacity: 1, duration: 0.5 ,ease: "circ.out"});
       
           gsap.set(images[nextIndex].parentNode, { display: "block", top: "15%", width: "22vw", left: "calc(100% - 3% - 22vw)",ease: "circ.out" });
           gsap.to(images[nextIndex].parentNode, { transform: "translateX(10%) scale(0.75)", duration: 0.5 ,ease: "circ.out"});
       
       
         
           document.querySelector("#name14").textContent =verve[currentIndex].name;
           document.querySelector("#details14 #color14 .btn").textContent = ` ${verve[currentIndex].color}`;
           document.querySelector("#details14 #price14 .price").textContent =verve[currentIndex].price;
       }
       
       updateSlider14();
       
       document.querySelector("#slider-arrow14.right").addEventListener("click", function() {
           currentIndex = (currentIndex - 1 + images.length) % images.length;
           updateSlider14();
       });
       
       document.querySelector("#slider-arrow14.left").addEventListener("click", function() {
           currentIndex = (currentIndex + 1) % images.length;
           updateSlider14();
       });
       
       images.forEach(function(image, idx) {
       image.addEventListener("click", function() {
       if (idx === currentIndex) return;
       
       var prevIndex = (currentIndex - 1 + images.length) % images.length;
       var nextIndex = (currentIndex + 1) % images.length;
       
       if (idx === prevIndex) {
           currentIndex = (currentIndex + 1) % images.length;
           updateSlider14();
       } else if (idx === nextIndex) {
           currentIndex = (currentIndex - 1 + images.length) % images.length;
           updateSlider14();
       }
       });
       });
}



function Xcaliberbikes(){
    
    var xcaliber= [
       { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/XCaliber9_22_35112_B_Primary",
               name:"X-Caliber 9",
               price:"₹118,999",
               color:"Factory Orange"
           },
           { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/XCaliber8_22_35069_A_Primary",
               name:"X-Caliber 8",
               price:"₹93,399",
               color:"Satin Lithium Grey"
           },
           
           
       ];
       
       var products15 = document.querySelector("#products15");
       var container = "";
       
     xcaliber.forEach(function(elem) {
           container += `
               <div class="product-container">
                   <img src="${elem.image}" class="product15" alt="${elem.name}">
               </div>
           `;
       });
       products15.innerHTML = container;
       
       var currentIndex = 1;
       var images = document.querySelectorAll(".product15");
       
       function updateSlider15() {
       
           images.forEach((img, idx) => {
               gsap.set(img.parentNode, { display: "none", transform: "translateX(0) scale(1)", opacity: 0.5 });
           });
       
           var prevIndex = (currentIndex - 1 + images.length) % images.length;
           var nextIndex = (currentIndex + 1) % images.length;
       
           gsap.set(images[prevIndex].parentNode, { display: "block", left: "3%", top: "15%", width: "22vw",ease: "circ.out" });
           gsap.to(images[prevIndex].parentNode, { transform: "translateX(-10%) scale(0.75)", duration: 0.5,ease: "circ.out" });
       
           gsap.set(images[currentIndex].parentNode, { display: "block", left: "50%", top: "10%", width: "52vw", opacity: 1,ease: "circ.out" });
           gsap.to(images[currentIndex].parentNode, { transform: "translateX(-50%) scale(1.05)", opacity: 1, duration: 0.5 ,ease: "circ.out"});
       
           gsap.set(images[nextIndex].parentNode, { display: "block", top: "15%", width: "22vw", left: "calc(100% - 3% - 22vw)",ease: "circ.out" });
           gsap.to(images[nextIndex].parentNode, { transform: "translateX(10%) scale(0.75)", duration: 0.5 ,ease: "circ.out"});
       
       
         
           document.querySelector("#name15").textContent =xcaliber[currentIndex].name;
           document.querySelector("#details15 #color15 .btn").textContent = ` ${xcaliber[currentIndex].color}`;
           document.querySelector("#details15 #price15 .price").textContent =xcaliber[currentIndex].price;
       }
       
       updateSlider15();
       
       document.querySelector("#slider-arrow15.right").addEventListener("click", function() {
           currentIndex = (currentIndex - 1 + images.length) % images.length;
           updateSlider15();
       });
       
       document.querySelector("#slider-arrow15.left").addEventListener("click", function() {
           currentIndex = (currentIndex + 1) % images.length;
           updateSlider15();
       });
       
       images.forEach(function(image, idx) {
       image.addEventListener("click", function() {
       if (idx === currentIndex) return;
       
       var prevIndex = (currentIndex - 1 + images.length) % images.length;
       var nextIndex = (currentIndex + 1) % images.length;
       
       if (idx === prevIndex) {
           currentIndex = (currentIndex + 1) % images.length;
           updateSlider15();
       } else if (idx === nextIndex) {
           currentIndex = (currentIndex - 1 + images.length) % images.length;
           updateSlider15();
       }
       });
       });
}


   


    var page1 = document.querySelector(".page1 ")
    var page2 = document.querySelector(".page2 ")
    var page3 = document.querySelector(".page3 ")
    var page4 = document.querySelector(".page4 ")
    var page5 = document.querySelector(".page5 ")
    var page6 = document.querySelector(".page6")
    var page7 = document.querySelector(".page7 ")
    var page8 = document.querySelector(".page8 ")
    var page9 = document.querySelector(".page9 ")
    var page10 = document.querySelector(".page10")
    var page11 = document.querySelector(".page11  ")
    var page12 = document.querySelector(".page12  ")
    var page13 = document.querySelector(".page13  ")
    var page14 = document.querySelector(".page14  ")
    var page15 = document.querySelector(".page15  ")


    var    checkpointBtn  =  document.querySelector("#Checkpoint")
    var    DomaneBtn = document.querySelector("#Domane")
    var    dualSportBtn = document.querySelector("#dualSport")
    var    FxBtn = document.querySelector("#FX")
    var    fuelExBtn = document.querySelector("#fuelEX")
    var    madoneBtn = document.querySelector("#madone")
    var    marlinBtn = document.querySelector("#Marlin")
    var    procaliberBtn = document.querySelector("#Procaliber")
    var    roscoeBtn = document.querySelector("#Roscoe")
    var    speedConceptBtn = document.querySelector("#speedConcept")
    var    supercaliberBtn = document.querySelector("#Supercaliber")
    var    topFuelBtn = document.querySelector("#topFuel")
    var   verveBtn = document.querySelector("#Verve")
    var    xCaliberBtn = document.querySelector("#xCaliber")
    var    emondaBtn = document.querySelector("#emonda")

    function hideAllPages() {
        page1.classList.add("hidden")
        page2.classList.add("hidden")
        page3.classList.add("hidden")
        page4.classList.add("hidden")
        page5.classList.add("hidden")
        page6.classList.add("hidden")
        page7.classList.add("hidden")
        page8.classList.add("hidden")
        page9.classList.add("hidden")
        page10.classList.add("hidden")
        page11.classList.add("hidden")
        page12.classList.add("hidden")
        page13.classList.add("hidden")
        page14.classList.add("hidden")
        page15.classList.add("hidden")
       
    }
    hideAllPages()
    checkpointbikes()
    page1.classList.remove("hidden")


    checkpointBtn.addEventListener("click", function(){
        hideAllPages()
        checkpointbikes()
        page1.classList.remove("hidden")
    })

    DomaneBtn.addEventListener("click", function(){
        hideAllPages()
        domanebikes()
        page2.classList.remove("hidden")
    })

    dualSportBtn.addEventListener("click", function(){
        hideAllPages()
        dualsportbikes()
        page3.classList.remove("hidden")
    })

    FxBtn.addEventListener("click", function(){
        hideAllPages()
        fxbikes()
        page4.classList.remove("hidden")
    })

    fuelExBtn.addEventListener("click", function(){
        hideAllPages()
        fuelex()
        page5.classList.remove("hidden")
        console.log("gawsdgfh")
    })

    madoneBtn.addEventListener("click", function(){
        hideAllPages()
        modanbikes()
        page6.classList.remove("hidden")
    })

    marlinBtn.addEventListener("click", function(){
        hideAllPages()
        marlinbikes()
        page7.classList.remove("hidden")
    })

    procaliberBtn.addEventListener("click", function(){
        hideAllPages()
        Procaliberbikes()
        page8.classList.remove("hidden")
    })

    roscoeBtn.addEventListener("click", function(){
        hideAllPages()
        roscuebikes()
        page9.classList.remove("hidden")
    })

    speedConceptBtn.addEventListener("click", function(){
        hideAllPages()
        speedconceptbikes()
        page10.classList.remove("hidden")
    })

    supercaliberBtn .addEventListener("click", function(){
        hideAllPages()
        supercaliberbikes()
        page11.classList.remove("hidden")
    })

    topFuelBtn.addEventListener("click", function(){
        hideAllPages()
        topfuelbikes()
        page12.classList.remove("hidden")
    })

    verveBtn.addEventListener("click", function(){
        hideAllPages()
        vervebikes()
        page13.classList.remove("hidden")
    })

    xCaliberBtn.addEventListener("click", function(){
        hideAllPages()
       Xcaliberbikes()
        page14.classList.remove("hidden")
    })

    emondaBtn.addEventListener("click", function(){
        hideAllPages()
        emondabikes()
        page15.classList.remove("hidden")
    })












