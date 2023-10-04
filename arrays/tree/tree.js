 class NewNode {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}
class BinarySearchTree {
	constructor() {
	  this.root = null;
	}
	insert(value) {
	  const newNode = new Node(value);
	  if(!this.root) {
		this.root = newNode;
	  } else {
		let currentNode = this.root;
		while(true) {
		  if(value < currentNode.value) {
			if(!currentNode.left) {
			  currentNode.left = newNode;
			  return this;
			}
			currentNode = currentNode.left;
		  } else {
			if(!currentNode.right) {
			  currentNode.right = newNode;
			  return this;
			}
			currentNode = currentNode.right;
		  }
		}
	  }
	 }
	}
	const tree = neew BinarySearchTree();
	search (valor) {
	  if (this.root === null) {
		return "No hay datos para poder buscar";
	}
	  let currentNode = this.root;

		while (true) {
		  if (currentNode.value === valor) {
			return currentNode;
		}
		if (currentNode.value < valor) {
			if (currentNode.right === null) {
				return "Este dato no existe";
			} else {
				currentNode = currentNode.right;
			}
			} else {
			  if (currentNode.left === null) {
				return "Este dato no existe";
			} else {
				currentNode = currentNode.left;
			}
		}
	}
}
const tree = neew TreeSearch();
