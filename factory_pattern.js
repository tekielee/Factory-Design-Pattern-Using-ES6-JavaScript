class Rectangle {
	constructor() {
		
	}
	
	draw() {
		console.log('Inside Rectangle::draw() method.');
	}
}

class Square {
	constructor() {
		
	}
	
	draw() {
		console.log('Inside Square::draw() method.');
	}
}

class Circle {
	constructor() {
		
	}
	
	draw() {
		console.log('Inside Circle::draw() method.');
	}
}

class ShapeFactory {
	constructor() {
		
	}
	
	getShape(shapeType) {
		if(shapeType == null) {
			return null;
		}
		
		if(shapeType == 'CIRCLE') {
			return new Circle();
		} else if (shapeType == 'RECTANGLE') {
			return new Rectangle();
		} else if (shapeType == 'SQUARE') {
			return new Square();
		}
		
		return null;
	}
}

const shapeFactory = new ShapeFactory();
const shape1 = shapeFactory.getShape('CIRCLE');
shape1.draw();
const shape2 = shapeFactory.getShape('RECTANGLE');
shape2.draw();
const shape3 = shapeFactory.getShape('SQUARE');
shape3.draw();