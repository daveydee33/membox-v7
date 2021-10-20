const axios = require('axios').default

const collection_title_and_desc = [
  {
    title: 'Bali words',
    description: 'Words that are especially useful in Bali'
  },
  {
    title: 'Top 100 ⭐️',
    description: ''
  },
  {
    title: 'Indonesian culture',
    description: ''
  },
  {
    title: 'Small Talk',
    description:
      "Indonesians love their small talk!  It's extremely common for to ask all those questions that western cultures think of as taboo!  Where are you going?  Are you married? 😅"
  },
  {
    title: 'Now',
    description: ''
  },
  {
    title: 'Txting Talk 🤳',
    description:
      'The words and abbreviations that are commonly used when typing or texting.'
  },
  {
    title: 'Slang 😎',
    description: 'Some common slang you wont find in textbooks!'
  },
  {
    title: 'Expressive words 🙀',
    description: 'What! Ouch! Wow!'
  },
  {
    title: 'word-words',
    description:
      'Duplicating words can usually pluralize words, but also these often have unique and specific meanings'
  },
  {
    title: '1 + 1 = 1',
    description:
      'Many words are made of compounding 2 words into 1, to form a new word.  In English, this would be something like week + end = weekend or break + fast = breakfast.'
  },
  {
    title: 'Bad words 🙊',
    description: 'Swearing, cursing, and insults!'
  },
  {
    title: 'easy phrases from words known',
    description: ''
  },
  {
    title: '👋 Greetings',
    description: ''
  },
  {
    title: 'Making Friends and Introductions',
    description: ''
  },
  {
    title: 'Bonus: javanese words, sunda words',
    description: ''
  },
  {
    title:
      'Bonus: loan words from Portuguese, Dutch, Arabic, English -- EASY ones, and good words to learn when not having the brain energy',
    description: ''
  },
  {
    title: 'Jobs, Work, and Professions',
    description:
      'Work is more than just a job.  Most people take great pride in their professions, and their profession is usually connected with their social status.  These words and phrases will help you learn the names of common professions as well as all the dialoge to talk about one of the most common conversation topics when you are introduced to Indonesians and making new friends!'
  },
  {
    title: 'most used verbs',
    description: ''
  },
  {
    title: 'Yes/No/Maybe',
    description: 'Common and useful single word answers to questions'
  },
  {
    title: 'adjectives',
    description: ''
  },
  {
    title: 'Restaurants and Dining 🍽',
    description: ''
  },
  {
    title: 'at the shop',
    description: ''
  },
  {
    title: 'Food 😋',
    description: 'Rice, noodles, soup, and everything else 😋'
  },
  {
    title: 'numbers',
    description: ''
  },
  {
    title: 'family',
    description: ''
  },
  {
    title: 'parts of body',
    description: ''
  },
  {
    title: 'clothing',
    description: ''
  },
  {
    title: 'animals',
    description: ''
  },
  {
    title: '"ever" words (-pun)',
    description: ''
  },
  {
    title: '',
    description: ''
  },
  {
    title: 'Transition words 🤓',
    description: ''
  },
  {
    title: 'love, hate, like, dislike',
    description: ''
  },
  {
    title: 'formal - informal - casual - common',
    description:
      "Many words in Indonesian have more common or less formal variants.  Learn to use these words instead to sound more natural like a native speaker and not as a bule who learned from a textbook or classroom.  With this vocabulary you'll be able to quickly improve your understanding of natural and casual daily conversation between Indonesians"
  },
  {
    title: 'Gossip Talk 💅',
    description: ''
  },
  {
    title: 'Feelings and Emotions 😅',
    description: ''
  },
  {
    title: 'Flirting 😉',
    description: ''
  },
  {
    title: 'Shopping, Buying and Selling 🛍',
    description: ''
  },
  {
    title: 'Bargaining and making deals 💵',
    description: ''
  },
  {
    title: 'Excuse me, saying sorry, and asking forgiveness 🤦‍♂️',
    description: ''
  },
  {
    title: 'Now, later, not yet, already 🤔 (past, present, and future!)',
    description:
      "Some of the most useful and common words in everyday dialogue.  Fortunately, Indonesian is far easier than English and other languages when it comes to talking about past, present, and future.  Master this small handful of words and you're well on your way to talking about the past, present, and future! 🤩"
  }
]

const addToDatabase = async (object) => {
  var options = {
    method: 'POST',
    url: 'http://localhost:4001/v1/collections',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTViZTU3NjBiYzRiN2Q3YjBjNTIxZDciLCJpYXQiOjE2MzM0MTI0ODgsImV4cCI6MTYzNTI3MjQyOCwidHlwZSI6ImFjY2VzcyJ9.z0c-vTYgBsCeGPX_hcbC0EtQ3gx6lkcyCQ_EYOdqzAA'
    },
    data: object
  }

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.error(error)
    })
}

/// CAREFUL TO RUN THIS!
// addToDatabase(collection_title_and_desc[0])

// collection_title_and_desc.forEach((item) => {
//   addToDatabase(item)
// })
