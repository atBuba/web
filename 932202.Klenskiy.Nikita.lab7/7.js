function create_round() {
    let value = Number(document.getElementById("input").value);

    for (let i = 0; i < value; i++) {
	let div = document.createElement("div");
	div.className = "shape";
	let size = Math.floor(Math.random() * 200);
	let top = document.documentElement.clientHeight - size - 45;
	let left = document.documentElement.clientWidth - size;
	div.style.position = "absolute";
	div.style.width = size + "px";
	div.style.height = size + "px";
	div.style.backgroundColor = "green";
	div.style.opacity = "0.8";
	div.style.border = "0.5";
	div.style.overflow = "hidden";
	div.style.borderRadius = String(size / 2) + "px";
	div.style.top = Math.floor(Math.random() * top) + 40 + "px";
	div.style.left = Math.floor(Math.random() * left) + "px";
	document.body.append(div);

	div.onclick = function() {
		div.style.background="yellow";
	};
        
	div.ondblclick = function() {
		div.remove();
	};
    }
}

function create_square() {
    let value = Number(document.getElementById("input").value);
    
    for (let i = 0; i < value; i++) {
	let div = document.createElement("div");
	div.className = "shape";
	let size = Math.floor(Math.random() * 200);
	let top = document.documentElement.clientHeight - size - 45;
	let left = document.documentElement.clientWidth - size;
	div.style.position = "absolute";
	div.style.width = size + "px";
	div.style.height = size + "px";
	div.style.backgroundColor = "red";
	div.style.opacity = "0.8";
	div.style.border = "0.5";
	div.style.overflow = "hidden";
	div.style.clipPath = "polygon(0% 0%, 0% 100%, 100% 100%, 100%, 0%)";
	div.style.top = Math.floor(Math.random() * top) + 20 + "px";
	div.style.left = Math.floor(Math.random() * left) + "px";
	document.body.append(div);
        
	div.onclick = function() {
		div.style.background="yellow";
	};
        
	div.ondblclick = function() {
		div.remove();
	};
    }
}

function create_triangle() {
    let value = Number(document.getElementById("input").value);
   
    for (let i = 0; i < value; i++) {
	let div = document.createElement("div");
 	div.className = "shape";
	let size = Math.floor(Math.random() * 200);
	let top = document.documentElement.clientHeight - size - 45;
	let left = document.documentElement.clientWidth - size;
	div.style.position = "absolute";
	div.style.width = size + "px";
	div.style.height = size + "px";
	div.style.backgroundColor = "orange";
	div.style.opacity = "0.8";
	div.style.border = "1";
	div.style.overflow = "hidden";
	div.style.clipPath = "polygon(50% 50%, 100% 100%, 0% 100%)";
	div.style.top = Math.floor(Math.random() * top) + 20 + "px";
	div.style.left = Math.floor(Math.random() * left) + "px";
	document.body.append(div);
	
	div.onclick = function() {
		div.style.background="yellow";
	};
        
	div.ondblclick = function() {
		div.remove();
	};
    }
}

function clear_all() {
	let shapes = Array.from(document.getElementsByClassName("shape"));

	shapes.forEach(shape => {
  		shape.remove();
	});

}