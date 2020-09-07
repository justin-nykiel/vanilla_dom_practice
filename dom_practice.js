const marltonArticle = document.querySelector("#article");
console.log(marltonArticle);

const h2 = document.querySelector("h2");
console.log(h2);
h2.innerText += "!!!";

const headlines = document.querySelectorAll(".headlines");
console.log(headlines);
const liOne = document.querySelector("ol").firstElementChild;
liOne.style.color = "slateblue";
const liLast = document.querySelector("ol").lastElementChild;
liLast.innerText = "Jamboree sandwich at the Jambo-ree";
const newImg = document.createElement('img');
newImg.setAttribute("src", "https://lh3.googleusercontent.com/proxy/seyOs6sf0lh8lXDf_OQFgHnqO2Z5A47zw_BrqBccyiX7uR7CncDaf3lF4nN-gcJMUBijFR7zBOpJsS2h6MLiSaw51afwWOQi_ViuhaOJ6wzSjUusUWi5idc0X-7Mrv4tFwfGhED9v7dxZQRsvhdoqT_TVk0");
document.querySelector("body").appendChild(newImg);
const removee = document.querySelector("#article");
removee.remove();