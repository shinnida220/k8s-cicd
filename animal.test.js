const request = require('supertest');
const app = require('./app'); // Replace with the correct path to your app
const http = require('http');

afterAll((done) => {
    app.close(done); // Close the server after tests are done
});

describe('Animals API', () => {
    it('should return all animals', async () => {
        const response = await request(app).get('/animals');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBe(100); // Check if there are 100 animals
    });

    it('should return breeds of a specific type', async () => {
        const response = await request(app).get('/animals/breeds/mammal');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);
    });

    it('should return 404 for a non-existing animal type', async () => {
        const response = await request(app).get('/animals/breeds/dinosaur');
        expect(response.statusCode).toBe(404);
    });

    it('should return animals by group', async () => {
        const response = await request(app).get('/animals/group/carnivore');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);
    });

    it('should return 404 for a non-existing animal group', async () => {
        const response = await request(app).get('/animals/group/herbivorous');
        expect(response.statusCode).toBe(404);
    });

    it('should add a new animal', async () => {
        const newAnimal = {
            name: 'Test Animal',
            type: 'Mammal',
            group: 'Herbivore',
            breed: 'Testus animalis'
        };

        const response = await request(app)
            .post('/animals')
            .send(newAnimal);

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe(newAnimal.name);
    });

    it('should not add an existing animal', async () => {
        const existingAnimal = {
            name: 'Lion',
            type: 'Mammal',
            group: 'Carnivore',
            breed: 'Panthera leo'
        };

        const response = await request(app)
            .post('/animals')
            .send(existingAnimal);

        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('error', 'Animal already exists');
    });
});
