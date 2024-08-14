const express = require('express');
const app = express();

app.use(express.json());

let animals = [
    { id: 1, name: 'Lion', type: 'Mammal', group: 'Carnivore', breed: 'Panthera leo' },
    { id: 2, name: 'Elephant', type: 'Mammal', group: 'Herbivore', breed: 'Loxodonta' },
    { id: 3, name: 'Cobra', type: 'Reptile', group: 'Carnivore', breed: 'Naja' },
    { id: 4, name: 'Shark', type: 'Fish', group: 'Carnivore', breed: 'Carcharodon carcharias' },
    { id: 5, name: 'Penguin', type: 'Bird', group: 'Carnivore', breed: 'Aptenodytes forsteri' },
    { id: 6, name: 'Giraffe', type: 'Mammal', group: 'Herbivore', breed: 'Giraffa camelopardalis' },
    { id: 7, name: 'Komodo Dragon', type: 'Reptile', group: 'Carnivore', breed: 'Varanus komodoensis' },
    { id: 8, name: 'Eagle', type: 'Bird', group: 'Carnivore', breed: 'Aquila chrysaetos' },
    { id: 9, name: 'Koala', type: 'Mammal', group: 'Herbivore', breed: 'Phascolarctos cinereus' },
    { id: 10, name: 'Blue Whale', type: 'Mammal', group: 'Carnivore', breed: 'Balaenoptera musculus' },
    { id: 11, name: 'Frog', type: 'Amphibian', group: 'Carnivore', breed: 'Rana temporaria' },
    { id: 12, name: 'Panda', type: 'Mammal', group: 'Herbivore', breed: 'Ailuropoda melanoleuca' },
    { id: 13, name: 'Chimpanzee', type: 'Mammal', group: 'Omnivore', breed: 'Pan troglodytes' },
    { id: 14, name: 'Wolf', type: 'Mammal', group: 'Carnivore', breed: 'Canis lupus' },
    { id: 15, name: 'Kangaroo', type: 'Mammal', group: 'Herbivore', breed: 'Macropus rufus' },
    { id: 16, name: 'Polar Bear', type: 'Mammal', group: 'Carnivore', breed: 'Ursus maritimus' },
    { id: 17, name: 'Cheetah', type: 'Mammal', group: 'Carnivore', breed: 'Acinonyx jubatus' },
    { id: 18, name: 'Rhinoceros', type: 'Mammal', group: 'Herbivore', breed: 'Rhinocerotidae' },
    { id: 19, name: 'Hippopotamus', type: 'Mammal', group: 'Herbivore', breed: 'Hippopotamus amphibius' },
    { id: 20, name: 'Sloth', type: 'Mammal', group: 'Herbivore', breed: 'Folivora' },
    { id: 21, name: 'Orangutan', type: 'Mammal', group: 'Omnivore', breed: 'Pongo' },
    { id: 22, name: 'Grizzly Bear', type: 'Mammal', group: 'Carnivore', breed: 'Ursus arctos horribilis' },
    { id: 23, name: 'Jaguar', type: 'Mammal', group: 'Carnivore', breed: 'Panthera onca' },
    { id: 24, name: 'Leopard', type: 'Mammal', group: 'Carnivore', breed: 'Panthera pardus' },
    { id: 25, name: 'Bison', type: 'Mammal', group: 'Herbivore', breed: 'Bison bison' },
    { id: 26, name: 'Zebra', type: 'Mammal', group: 'Herbivore', breed: 'Equus quagga' },
    { id: 27, name: 'Gazelle', type: 'Mammal', group: 'Herbivore', breed: 'Gazella' },
    { id: 28, name: 'Buffalo', type: 'Mammal', group: 'Herbivore', breed: 'Syncerus caffer' },
    { id: 29, name: 'Gorilla', type: 'Mammal', group: 'Herbivore', breed: 'Gorilla beringei' },
    { id: 30, name: 'Moose', type: 'Mammal', group: 'Herbivore', breed: 'Alces alces' },
    { id: 31, name: 'Wolverine', type: 'Mammal', group: 'Carnivore', breed: 'Gulo gulo' },
    { id: 32, name: 'Arctic Fox', type: 'Mammal', group: 'Carnivore', breed: 'Vulpes lagopus' },
    { id: 33, name: 'Crocodile', type: 'Reptile', group: 'Carnivore', breed: 'Crocodylidae' },
    { id: 34, name: 'Iguana', type: 'Reptile', group: 'Herbivore', breed: 'Iguana iguana' },
    { id: 35, name: 'Alligator', type: 'Reptile', group: 'Carnivore', breed: 'Alligatoridae' },
    { id: 36, name: 'Rattlesnake', type: 'Reptile', group: 'Carnivore', breed: 'Crotalus' },
    { id: 37, name: 'Anaconda', type: 'Reptile', group: 'Carnivore', breed: 'Eunectes' },
    { id: 38, name: 'Chameleon', type: 'Reptile', group: 'Carnivore', breed: 'Chamaeleonidae' },
    { id: 39, name: 'Tortoise', type: 'Reptile', group: 'Herbivore', breed: 'Testudinidae' },
    { id: 40, name: 'Gecko', type: 'Reptile', group: 'Carnivore', breed: 'Gekkonidae' },
    { id: 41, name: 'Python', type: 'Reptile', group: 'Carnivore', breed: 'Pythonidae' },
    { id: 42, name: 'Albatross', type: 'Bird', group: 'Carnivore', breed: 'Diomedeidae' },
    { id: 43, name: 'Ostrich', type: 'Bird', group: 'Herbivore', breed: 'Struthio camelus' },
    { id: 44, name: 'Flamingo', type: 'Bird', group: 'Omnivore', breed: 'Phoenicopteridae' },
    { id: 45, name: 'Peacock', type: 'Bird', group: 'Omnivore', breed: 'Pavo cristatus' },
    { id: 46, name: 'Vulture', type: 'Bird', group: 'Carnivore', breed: 'Cathartidae' },
    { id: 47, name: 'Parrot', type: 'Bird', group: 'Omnivore', breed: 'Psittacidae' },
    { id: 48, name: 'Crow', type: 'Bird', group: 'Omnivore', breed: 'Corvus' },
    { id: 49, name: 'Sparrow', type: 'Bird', group: 'Omnivore', breed: 'Passeridae' },
    { id: 50, name: 'Robin', type: 'Bird', group: 'Omnivore', breed: 'Turdus migratorius' },
    { id: 51, name: 'Bat', type: 'Mammal', group: 'Omnivore', breed: 'Chiroptera' },
    { id: 52, name: 'Koala', type: 'Mammal', group: 'Herbivore', breed: 'Phascolarctos cinereus' },
    { id: 53, name: 'Hedgehog', type: 'Mammal', group: 'Omnivore', breed: 'Erinaceinae' },
    { id: 54, name: 'Otter', type: 'Mammal', group: 'Carnivore', breed: 'Lutrinae' },
    { id: 55, name: 'Badger', type: 'Mammal', group: 'Omnivore', breed: 'Meles meles' },
    { id: 56, name: 'Beaver', type: 'Mammal', group: 'Herbivore', breed: 'Castor' },
    { id: 57, name: 'Rabbit', type: 'Mammal', group: 'Herbivore', breed: 'Oryctolagus cuniculus' },
    { id: 58, name: 'Squirrel', type: 'Mammal', group: 'Herbivore', breed: 'Sciuridae' },
    { id: 59, name: 'Raccoon', type: 'Mammal', group: 'Omnivore', breed: 'Procyon lotor' },
    { id: 60, name: 'Skunk', type: 'Mammal', group: 'Omnivore', breed: 'Mephitidae' },
    { id: 61, name: 'Armadillo', type: 'Mammal', group: 'Omnivore', breed: 'Dasypodidae' },
    { id: 62, name: 'Porcupine', type: 'Mammal', group: 'Herbivore', breed: 'Erethizontidae' },
    { id: 63, name: 'Ferret', type: 'Mammal', group: 'Carnivore', breed: 'Mustela putorius furo' },
    { id: 64, name: 'Wombat', type: 'Mammal', group: 'Herbivore', breed: 'Vombatidae' },
    { id: 65, name: 'Opossum', type: 'Mammal', group: 'Omnivore', breed: 'Didelphimorphia' },
    { id: 66, name: 'Platypus', type: 'Mammal', group: 'Carnivore', breed: 'Ornithorhynchus anatinus' },
    { id: 67, name: 'Lemur', type: 'Mammal', group: 'Omnivore', breed: 'Lemuridae' },
    { id: 68, name: 'Tasmanian Devil', type: 'Mammal', group: 'Carnivore', breed: 'Sarcophilus harrisii' },
    { id: 69, name: 'Kinkajou', type: 'Mammal', group: 'Omnivore', breed: 'Potos flavus' },
    { id: 70, name: 'Meerkat', type: 'Mammal', group: 'Carnivore', breed: 'Suricata suricatta' },
    { id: 71, name: 'Aardvark', type: 'Mammal', group: 'Omnivore', breed: 'Orycteropus afer' },
    { id: 72, name: 'Pangolin', type: 'Mammal', group: 'Omnivore', breed: 'Manidae' },
    { id: 73, name: 'Gibbon', type: 'Mammal', group: 'Omnivore', breed: 'Hylobatidae' },
    { id: 74, name: 'Macaque', type: 'Mammal', group: 'Omnivore', breed: 'Macaca' },
    { id: 75, name: 'Bonobo', type: 'Mammal', group: 'Omnivore', breed: 'Pan paniscus' },
    { id: 76, name: 'Okapi', type: 'Mammal', group: 'Herbivore', breed: 'Okapia johnstoni' },
    { id: 77, name: 'Tapir', type: 'Mammal', group: 'Herbivore', breed: 'Tapiridae' },
    { id: 78, name: 'Mandrill', type: 'Mammal', group: 'Omnivore', breed: 'Mandrillus sphinx' },
    { id: 79, name: 'Cassowary', type: 'Bird', group: 'Omnivore', breed: 'Casuarius' },
    { id: 80, name: 'Quokka', type: 'Mammal', group: 'Herbivore', breed: 'Setonix brachyurus' },
    { id: 81, name: 'Quoll', type: 'Mammal', group: 'Carnivore', breed: 'Dasyurus' },
    { id: 82, name: 'Galago', type: 'Mammal', group: 'Omnivore', breed: 'Galagidae' },
    { id: 83, name: 'Hyrax', type: 'Mammal', group: 'Herbivore', breed: 'Procaviidae' },
    { id: 84, name: 'Capybara', type: 'Mammal', group: 'Herbivore', breed: 'Hydrochoerus hydrochaeris' },
    { id: 85, name: 'Musk Ox', type: 'Mammal', group: 'Herbivore', breed: 'Ovibos moschatus' },
    { id: 86, name: 'Narwhal', type: 'Mammal', group: 'Carnivore', breed: 'Monodon monoceros' },
    { id: 87, name: 'Warthog', type: 'Mammal', group: 'Omnivore', breed: 'Phacochoerus' },
    { id: 88, name: 'Red Panda', type: 'Mammal', group: 'Herbivore', breed: 'Ailurus fulgens' },
    { id: 89, name: 'Lynx', type: 'Mammal', group: 'Carnivore', breed: 'Lynx lynx' },
    { id: 90, name: 'Jackal', type: 'Mammal', group: 'Carnivore', breed: 'Canis aureus' },
    { id: 91, name: 'Oryx', type: 'Mammal', group: 'Herbivore', breed: 'Oryx gazella' },
    { id: 92, name: 'Tarsier', type: 'Mammal', group: 'Carnivore', breed: 'Tarsius' },
    { id: 93, name: 'Caracal', type: 'Mammal', group: 'Carnivore', breed: 'Caracal caracal' },
    { id: 94, name: 'Civet', type: 'Mammal', group: 'Omnivore', breed: 'Viverridae' },
    { id: 95, name: 'Mongoose', type: 'Mammal', group: 'Carnivore', breed: 'Herpestidae' },
    { id: 96, name: 'Fennec Fox', type: 'Mammal', group: 'Carnivore', breed: 'Vulpes zerda' },
    { id: 97, name: 'Aye-Aye', type: 'Mammal', group: 'Omnivore', breed: 'Daubentonia madagascariensis' },
    { id: 98, name: 'Binturong', type: 'Mammal', group: 'Omnivore', breed: 'Arctictis binturong' },
    { id: 99, name: 'Axolotl', type: 'Amphibian', group: 'Carnivore', breed: 'Ambystoma mexicanum' },
    { id: 100, name: 'Tamarin', type: 'Mammal', group: 'Omnivore', breed: 'Saguinus' }
];

let nextId = 101;

// Get all animals
app.get('/animals', (req, res) => {
    res.json(animals);
});

// Get all breeds of a certain type of animal
app.get('/animals/breeds/:type', (req, res) => {
    const type = req.params.type.toLowerCase();
    const breeds = animals
        .filter(animal => animal.type.toLowerCase() === type)
        .map(animal => animal.breed);
    
    if (breeds.length > 0) {
        res.json(breeds);
    } else {
        res.status(404).json({ error: 'Type not found' });
    }
});

// Get all animals by group (e.g., mammals, carnivores)
app.get('/animals/group/:group', (req, res) => {
    const group = req.params.group.toLowerCase();
    const groupAnimals = animals.filter(animal => animal.group.toLowerCase() === group);
    
    if (groupAnimals.length > 0) {
        res.json(groupAnimals);
    } else {
        res.status(404).json({ error: 'Group not found' });
    }
});

// Add an animal if it doesn't exist
app.post('/animals', (req, res) => {
    const { name, type, group, breed } = req.body;

    // Check if the animal already exists
    const exists = animals.some(animal => animal.name.toLowerCase() === name.toLowerCase());
    
    if (exists) {
        return res.status(400).json({ error: 'Animal already exists' });
    }

    const newAnimal = {
        id: nextId++,
        name,
        type,
        group,
        breed
    };

    animals.push(newAnimal);
    res.status(201).json(newAnimal);
});

const PORT = 3000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Graceful shutdown
const shutdown = (signal) => {
    console.log(`Received ${signal}. Closing HTTP server gracefully...`);

    server.close((err) => {
        if (err) {
            console.error('Error during shutdown:', err);
            process.exit(1);
        } else {
            console.log('HTTP server closed successfully.');
            process.exit(0);
        }
    });

    // Optional: Set a timeout to forcefully exit if shutdown takes too long
    setTimeout(() => {
        console.error('Forcing exit due to timeout.');
        process.exit(1);
    }, 10000); // 10 seconds timeout
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

module.exports = server; 