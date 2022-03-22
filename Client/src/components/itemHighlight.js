import React from "react";
import Nav from "./nav";


const ItemHighlight = (props) => {
    return(
        <div>
            <section class="small-container single-product">
                <Nav />
    <article class="row">
        <div class="col-2">
            <img src="img/house.jpg"  id="ProductImg" />
            <div class="small-img-row">
               <div class="small-img-col">
                   <img src="img/bedroom.jpeg" class="small-img"  alt="cali mansion bedroom"/>
               </div>
               <div class="small-img-col">
                   <img src="img/bathroom.jpeg" class="small-img" alt="cali mansion bathroom"/>
               </div>
               <div class="small-img-col">
                   <img src="img/theatre.jpeg" class="small-img" alt="cali mansion theatre"  />
               </div>
               <div class="small-img-col">
                   <img src="img/imagereader.jpeg" class="small-img" alt="cali mansion backyard" />
               </div>
    
            </div>
            
        </div>
        <div class="col-2 white">
            <p>Beaumont Luxury Homes</p>
            <h1>Beverly Hills, CA</h1>
            <h2>$10,000,000</h2>
            <select>
               <option value = "select">ALL</option>
               <option value="Colorado">Colorado</option>
               <option value="California">California</option>
               <option value="Washington">Washington</option>
               
           </select>
            
            <a href="/contact" class="btn">Buy Now</a>
            
            <h3>PRODUCT DETAILS</h3>
            <br />
            <p>A spectacular generational estate envisioned by a master who elevates luxury to the next level. This extremely private and very rare nearly 3 acre property is located down a private lane in the most prime section of Beverly Hills. The home has been constructed with the most exquisite taste showcasing rare and decadent materials with sensational views and stunning light quality throughout.</p>
        </div>
    </article>
</section>
        </div>
    )
} 

export default ItemHighlight