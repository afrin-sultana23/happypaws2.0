const express = require('express')
const Pet     = require('../models/Pet')
const router  = express.Router()

// GET /api/pets — all active pets
router.get('/', async (req, res) => {
  try {
    const pets = await Pet.find({ is_active: true }).sort({ createdAt: -1 })
    res.json(pets)
  } catch (err) {
    console.error('Get pets error:', err)
    res.status(500).json({ message: 'Server error' })
  }
})

// POST /api/pets/seed — seed demo pets (run once)
router.get('/seed', async (req, res) => {
  try {
    const count = await Pet.countDocuments()
    if (count > 0) return res.json({ message: 'Pets already seeded' })

    await Pet.insertMany([
      { name: 'Biscuit', species: 'Dog',    breed: 'Mixed Breed',  age: 2, description: 'Found injured near Dhanmondi. Needs surgery and ongoing care.',       emoji: '🐕', goal_amount: 5000, raised_amount: 3200 },
      { name: 'Mimi',    species: 'Cat',    breed: 'Persian Mix',  age: 1, description: 'Tiny kitten rescued from Chittagong. Needs vaccinations and food.',    emoji: '🐱', goal_amount: 2000, raised_amount: 800  },
      { name: 'Rocky',   species: 'Dog',    breed: 'Labrador Mix', age: 4, description: 'Survived a road accident. Needs physical therapy to walk again.',      emoji: '🦮', goal_amount: 8000, raised_amount: 5500 },
      { name: 'Lily',    species: 'Rabbit', breed: 'Holland Lop',  age: 1, description: 'Abandoned in a box. Needs safe shelter and daily nutrition.',          emoji: '🐰', goal_amount: 1500, raised_amount: 600  },
      { name: 'Tiger',   species: 'Cat',    breed: 'Street Cat',   age: 3, description: 'Has a severe skin infection. Needs treatment and ongoing care.',       emoji: '🐈', goal_amount: 3000, raised_amount: 1100 },
      { name: 'Coco',    species: 'Dog',    breed: 'Beagle Mix',   age: 5, description: 'Elderly dog needing special diet and regular vet checkups.',           emoji: '🐩', goal_amount: 4000, raised_amount: 3800 },
    ])
    res.json({ message: '6 pets seeded successfully' })
  } catch (err) {
    console.error('Seed error:', err)
    res.status(500).json({ message: 'Server error' })
  }
})

module.exports = router
