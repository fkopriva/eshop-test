import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Filip',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Dress 1',
            category: 'dress',
            image: '/images/p1.jpg',
            price: 2200,
            countInStock: 20,
            brand: 'sth',
            rating: 4.5,
            numReviews: 10,
            description: 'dress',
        },
        {
            name: 'Dress 2',
            category: 'dress',
            image: '/images/p2.jpg',
            price: 2500,
            countInStock: 5,
            brand: 'sth',
            rating: 4.8,
            numReviews: 15,
            description: 'dress',
        },
        {
            name: 'Dress 3',
            category: 'dress',
            image: '/images/p3.jpg',
            price: 2300,
            countInStock: 0,
            brand: 'sth',
            rating: 4.3,
            numReviews: 13,
            description: 'dress',
        },
        {
            name: 'Dress 4',
            category: 'dress',
            image: '/images/p4.jpg',
            price: 2200,
            countInStock: 12,
            brand: 'sth',
            rating: 3.8,
            numReviews: 20,
            description: 'dress',
        },
    ]
}
export default data;