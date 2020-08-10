const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const {check, validationResult} = require('express-validator')

const User = require('../models/user')
const Profile = require('../models/profile')

// GET api/profile/me
// get my profile
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({user: req.user.userId}).populate('User',['userName', 'avatar'])

    if(!profile){
      return res.status(400).json({message: 'Нет профиля для пользователя'})
    }

    res.json(profile)

  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
})

// POST api/profile
// create or update profile
router.post('/', [auth, [
  check('status', 'Status is required').not().isEmpty(),
  check('skills', 'Skills is required').not().isEmpty(),
  ]], 
  async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(400).json({
        errors: errors.array()
      })
    }

    const {
      company,
      website,
      location,
      bio,
      status,
      skills,
      youtube,
      facebook,
      twitter,
      instagram,
      linkedin
    } = req.body

    let profileFields = {}

    profileFields.user = req.user.userId
    if(company) profileFields.company = company
    if(website) profileFields.website = website
    if(location) profileFields.location = location
    if(bio) profileFields.bio = bio
    if(status) profileFields.status = status

    if(skills) {
      profileFields.skills = skills.split(',').map(skill => skill.trim())
    }

    profileFields.social = {}
    
    if(youtube) profileFields.social.youtube = youtube
    if(facebook) profileFields.social.facebook = facebook
    if(twitter) profileFields.social.twitter = twitter
    if(instagram) profileFields.social.instagram = instagram
    if(linkedin) profileFields.social.linkedin = linkedin
    
    try {
      let profile = await Profile.findOne({user: req.user.userId})

      if(profile){
        // update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.userId }, 
          { $set: profileFields }, 
          { new: true }
        )

        return res.json(profile)
      }

      // create

      profile = new Profile(profileFields)

      await profile.save()
      
      res.json(profile)
 
    } catch (error) {
      console.error(error.message)
      res.status(500).send('Server Error')
    }

    res.send('fff')
  }
)

// GET api/profile
// get all profile
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['userName', 'avatar'])
    res.json(profiles)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

// GET api/profile/user/:id
// get profile by user id
router.get('/user/:id', async (req, res) => {
  try {
    const profile = await Profile.findOne({user: req.params.id}).populate('user', ['userName', 'avatar'])

    if(!profile){
      return res.status(400).json({ message: 'No profile for this user'})
    }
    res.json(profile)
  } catch (error) {
    console.error(error.message)
    if(error.kind == 'ObjectId'){
      return res.status(400).json({ message: 'Profile not found'})
    }
    res.status(500).send('Server Error')
  }
})

// DELETE api/profile
// delete profile user and posts
router.delete('/', auth, async (req, res) => {
  try {
    // remove users posts

    //remove profile
    await Profile.findOneAndRemove({user: req.user.userId})

    await User.findOneAndRemove({_id: req.user.userId})

    res.json({message: 'User deleted'})
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

// PUT api/profile/experience
// add profile experience
router.put('/experience', [auth, [
  check('title', 'Title is required').not().isEmpty(),
  check('company', 'Company is required').not().isEmpty(),
  check('from', 'From date is required').not().isEmpty(),
]], async (req, res) => {
  try {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(400).json({
        errors: errors.array()
      })
    }

    const {
      title,
      company,
      location,
      from,
      to,
      current,
      description
    } = req.body

    const exp = {
      title,
      company,
      location,
      from,
      to,
      current,
      description
    }

    const profile = await Profile.findOne({user: req.user.userId})
    
    profile.experience.unshift(exp)

    await profile.save()

    res.json({ profile })
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

// DELETE api/profile/experience/:id
// delete exp from profile
router.delete('/experience/:id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({user: req.user.userId})
    console.log(profile)

    // get remove index
    const removeIndex = profile.experience.map(item => item.id).indexOf(req.params.id)

    profile.experience.splice(removeIndex, 1)

    await profile.save()

    res.json(profile)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})


// PUT api/profile/education
// add profile education
router.put('/education', [auth, [
  check('school', 'School is required').not().isEmpty(),
  check('degree', 'Degree is required').not().isEmpty(),
  check('fieldofstudy', 'Field of study is required').not().isEmpty(),
  check('from', 'From date is required').not().isEmpty(),
]], async (req, res) => {
  try {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(400).json({
        errors: errors.array()
      })
    }

    const {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    } = req.body

    const education = {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    }

    const profile = await Profile.findOne({user: req.user.userId})
    
    profile.education.unshift(education)

    await profile.save()

    res.json({ profile })
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

// DELETE api/profile/education/:id
// delete education from profile
router.delete('/education/:id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({user: req.user.userId})

    // get remove index
    const removeIndex = profile.education.map(item => item.id).indexOf(req.params.id)

    profile.education.splice(removeIndex, 1)

    await profile.save()

    res.json(profile)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router