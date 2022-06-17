let userApi = {
    name : 'John',
    movies : ['spiderman','antman','superwoman','marvels','catwoman'],
    friends : 
    [
        {
            // 1 : {
                name: 'Yoyo',
                movies: ['spiderman','superwoman','marvels','catwoman'],
                friends: 
                [
                    {
                        // 4 : {
                            name: 'Christo',
                            movies: ['spiderman','antman','superwoman','marvels'],
                            friends: []
                        // },
                    },
                ]
            // },
        },
        {
            // 2 : {
                name: 'Soso',
                movies: ['spiderman','antman',],
                friends: 
                [
                    {
                        // 5 : {
                            name: 'David',
                            movies: ['spiderman','marvels','catwoman'],
                            friends: []
                        // },
                    },  
                ]
            // },
        },
        {
            // 3 : {
                name: 'Vovo',
                movies: ['spiderman','antman','superwoman','marvels','catwoman'],
                friends: 
                [
                    {
                        // 6 : {
                            name: 'Parthy',
                            movies: ['spiderman','antman','superwoman','marvels','catwoman'],
                            friends: 
                            [
                                {
                                    // 7 : {
                                        name: 'Evan',
                                        movies: ['spiderman','antman','superwoman','marvels','catwoman'],
                                        friends: 
                                        [
                                            {
                                                // 8 : {
                                                    name: 'Evan',
                                                    movies: ['spiderman','antman','superwoman','marvels','catwoman'],
                                                    friends: []
                                                // },    
                                            },
                                        ]
                                    // },
                                },
                            ]
                        // },
                    },
                ]
            // },
        },                
    ]
}

let favMovie = (user) =>{
    let moviesObj = {}
    let helper = (user,moviesObj)=>{
        for(let i = 0 ; i < user.movies.length;i++){
            if(user.movies[i] in moviesObj){
                moviesObj[user.movies[i]] ++
            }else{
                moviesObj[user.movies[i]] = 1
            }
        }
    }
    let stack = [user]
    while (stack.length > 0){
        let currentFriend = stack.pop()
        helper(currentFriend,moviesObj)
        if(currentFriend.friends.length > 0){
            stack.push(...currentFriend.friends)
        }
    }

    let max = 0
    let favMovie = ''
    for (movie in moviesObj){
        if(moviesObj[movie] > max){
            max = moviesObj[movie]
            favMovie = movie
        }
    }
    
    return favMovie
}

console.log(favMovie(userApi))