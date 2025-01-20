-- Step 1: Create a new database
CREATE DATABASE IF NOT EXISTS locationmarkerapp;

-- Step 2: Use the newly created database
USE locationmarkerapp;

DROP TABLE IF EXISTS places;

-- Step 3: Create table for places
CREATE TABLE places (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    lat DECIMAL(9, 6),
    lng DECIMAL(9, 6),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Step 4: Insert 15-20 fake data with random place names for Vilnius
INSERT INTO places (name, description, lat, lng)
VALUES
    ('Vilnius Gate', 'A historical gate marking the entrance to old Vilnius.', 54.6892, 25.2798),
    ('Gedimino Hill', 'A popular hill offering panoramic views of the city.', 54.6895, 25.2853),
    ('Lukiškės Square', 'A spacious city square located in central Vilnius.', 54.6868, 25.2790),
    ('Town Hall Square', 'A beautiful square surrounded by classic architecture.', 54.6891, 25.2860),
    ('Vilnius Cathedral', 'A magnificent cathedral located in the heart of Vilnius.', 54.6893, 25.2838),
    ('Uzupis Republic', 'A quirky district known for its artistic vibe and unique declaration.', 54.6817, 25.2892),
    ('Vingis Park', 'A popular park perfect for outdoor activities and relaxation.', 54.6803, 25.2975),
    ('Pavilniai Regional Park', 'A natural park offering stunning views of the Neris River valley.', 54.7342, 25.2901),
    ('Vilniaus University', 'One of the oldest and most prestigious universities in Lithuania.', 54.6899, 25.2823),
    ('Three Crosses Hill', 'A hill with three white crosses, a symbol of Vilnius.', 54.6920, 25.2910),
    ('St. Anne\'s Church', 'A beautiful Gothic-style church in Vilnius Old Town.', 54.6897, 25.2874),
    ('Bernardine Gardens', 'A serene garden located next to the Vilnia River.', 54.6854, 25.2881),
    ('Lithuanian National Opera and Ballet Theatre', 'A cultural gem hosting operas and ballet performances.', 54.6890, 25.2893),
    ('Vilnius TV Tower', 'A tall structure offering breathtaking views of the city.', 54.9119, 25.2894),
    ('Zverynas', 'A charming residential neighborhood known for its wooden houses.', 54.6819, 25.3097),
    ('KGB Museum', 'A museum dedicated to the history of the Soviet occupation in Lithuania.', 54.6812, 25.2899),
    ('Neris River Banks', 'A tranquil spot for a walk or picnic along the Neris River.', 54.6872, 25.2983),
    ('Antakalnis Cemetery', 'A historic cemetery that is the final resting place of many notable figures.', 54.6950, 25.3061),
    ('Lithuanian Museum of Art', 'A museum showcasing Lithuania’s rich cultural heritage.', 54.6898, 25.2865),
    ('Tuskulėnai Manor', 'A beautiful manor house located on the outskirts of Vilnius.', 54.6989, 25.3224);
