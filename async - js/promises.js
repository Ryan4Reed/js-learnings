const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'},
];

function getPosts(posts) {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post}</li>`
        });
        document.body.innerHTML = output
    }, 1000);
}

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post)

//             const error = false;

//             if(!error) {
//                 resolve()
//             } else {
//                 reject('Error: Something went wrong');
//             }
//         }, 2000);
    
//     })
// }

//Function specific promise
//-------------------------
// createPost({ title: 'Post Three', body: 'This is post three'}, getPosts)
//     .then(getPosts)
//     .catch(err => console.log(err));


// //Promise.all
//---------------
// const promise1 = Promise.resolve('Hellow World');
// const promise2 = 10
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Goodbye');
// })
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());

// Promise.all([promise1, promise2, promise3, pr

// //Async / Await
// async function init() {
//     await createPost({ title: 'Post Three', body: 'This is post three'});

//     getPosts();
// }

// init()


// //Async / Await with fetch
async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    //need to reformat fetch response to json
    const data = await response.json();
    console.log(data)
    }

fetchUsers()