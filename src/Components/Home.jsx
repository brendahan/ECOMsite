import React from 'react'
import "./Home.css";
import girldress from "./girldress.jpg";
import "./girldress.css";
import wallpaper from "./wallpaper.jpg";
function Home() {
    return (
        <div className="bottom">
        <div className="groupings">
          <label for="All CATEGORIES:">ALL CATEGORIES</label>
          <p>
            <select name="men's style">
              {" "}
              <option value="MENs style">Men's Style</option>
              <option value="MENs style">T-shirts</option>
              <option value="MENs style">shorts</option>
              <option value="MENs style">Suits</option>
              <option value="MENs style">Trousers</option>
            </select>
          </p>

          <p>
            <select name="men's style">
              {" "}
              <option value="Women's fashion">Women's fashion</option>
              <option value="MENs style">Dresses</option>
              <option value="MENs style">Leggings</option>
              <option value="MENs style">Jeans</option>
            </select>
          </p>

          <p>
            <select name="men's style">
              {" "}
              <option value="Babies and Kids">Babies and Kids</option>
              <option value="MENs style">New Borns</option>
              <option value="MENs style">Sweaters</option>
              <option value="MENs style">Jackets</option>
              <option value="MENs style">Shorts</option>
            </select>
          </p>

          <p>
            <select name="men's style">
              {" "}
              <option value="MENs style">Ugandan fabric</option>
              <option value="MENs style">Kitenge</option>
              <option value="MENs style">Tie and dye</option>
              <option value="MENs style">Batik</option>
            </select>
          </p>

          <p>
            <select name="men's style">
              {" "}
              <option value="Accessories">Accessories</option>
              <option value="MENs style">Shoes</option>
              <option value="MENs style">Belts</option>
              <option value="MENs style">Bags</option>
            </select>
          </p>
          <a href="">
            <p className="reach">Contact-us</p>
          </a>
        </div>
        <div>
          <img src=""></img>
        </div>
        <div className="Center">
          <img className="wallpaper" src={wallpaper} alt="cover" />
        </div>
        <div className="groupings1">
          <img className="Girldress" src={girldress} alt="Girldress" />
        </div>
      </div>
    )
}

export default Home
