// Step 1
const library = [
  {
    title: 'HP 1',
    author: 'JK R',
    status: {
      own: true,
      reading: false,
      read: false,
    }
  },
  {
    title: 'HP 2',
    author: 'JK R2',
    status: {
      own: true,
      reading: false,
      read: false,
    }
  },
  {
    title: 'HP 3',
    author: 'JK R3',
    status: {
      own: true,
      reading: false,
      read: false,
    }
  }
]

// Step 2
for(let i =0; i<3; i++){
  library[i].status.read = true
}
console.log(library[0].status.read)
console.log(library[1].status.read)
console.log(library[2].status.read)

// Step 3
const {title:firstBook} = library[0];

console.log(firstBook)

// Step 4

const jsonString = JSON.stringify(library)
console.log(jsonString)