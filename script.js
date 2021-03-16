console.log("hello");

document.body.style.cursor = "none";

let cursor = document.createElement("div"),
	follow = document.createElement("div");

const button = document.querySelector("article p span");
const close = document.querySelector("#overlay svg");
const overlay = document.getElementById("overlay");

cursor.classList.add("cursor");
follow.classList.add("follow");

document.body.appendChild(cursor);
document.body.appendChild(follow);

function move(obj, e) {

	obj.style = "";
	obj.style.top = e.clientY + "px";
	obj.style.left = e.clientX + "px";

}

if(cursor) {
	window.addEventListener("mousemove", function(event) {
		let e = event,
			t = e.target,
			f = follow,
			c = cursor;

		if(t.tagName.toLowerCase() == "a") {
			c.style.backgroundColor = "transparent";

/* 			f.style.top = (t.offsetTop * 2) + "px";
			f.style.left = t.offsetLeft + "px";
			f.style.width = t.clientWidth + "px";
            f.style.height = (t.clientHeight) + "px"; */
            f.style.top = t.offsetTop + (t.clientHeight / 2) + 'px';
            f.style.left = t.offsetLeft + t.clientWidth  + 'px';
            
			f.classList.add("on-focus2");
		} else if(t.tagName.toLowerCase() == "span") {
			c.style.backgroundColor = "transparent";

		} else {
			move(c, e);
			move(f, e);
			f.classList.remove("on-focus2");
		}
	})
}

button.addEventListener("click", () => {
	overlay.classList.add("active");
})
button.addEventListener("click", ()=> {
		follow.classList.remove("on-focus2");
		follow.style.top = overlay.offsetTop + "px";
		follow.style.left = overlay.offsetLeft + "px";
		follow.style.width = overlay.clientWidth + "px";
		follow.style.height = overlay.clientHeight + "px"
		follow.classList.add("highlight");
})
button.addEventListener("mouseleave", ()=> {
	follow.classList.remove("highlight");
})
close.addEventListener("click", ()=> {
	overlay.classList.remove("active");
})

